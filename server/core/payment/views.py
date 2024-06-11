import hashlib
from django.conf import settings
from rest_framework import status
from rest_framework.views import APIView
from drf_yasg.utils import swagger_auto_schema
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from drf_yasg import openapi
from .models import Payment
from rest_framework.response import Response


class PaymentCreateView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('amount', openapi.IN_QUERY, description="Payment Amount", type=openapi.TYPE_INTEGER),
        ],
        responses={
            201: openapi.Response('Paymend Created', schema=openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties={
                    'url': openapi.Schema(type=openapi.TYPE_STRING),
                }
            )),
            400: 'An error occurred.'
        }
    )
    def post(self, request):
        try:
            amount = int(request.data.get('amount'))
            assert amount >= 10
            
            payment = Payment.objects.create(
                amount=amount,
                player=request.user,
            )
            
            data = {
                'amount': float(amount),
                'payment': payment.uuid,
                'shop': settings.PAYOK_SHOP_ID,
                'currency': 'RUB',
                'desc': 'Пополнение',
                'secret': settings.PAYOK_SECRET_KEY
            }
            
            string_to_hash = '|'.join(map(str, data.values()))
            sign = hashlib.md5(string_to_hash.encode()).hexdigest()
            
            url = f"https://payok.io/pay?amount={float(amount)}&payment={payment.uuid}&shop={settings.PAYOK_SHOP_ID}&currency=RUB&desc=Пополнение&sign={sign}"
            return Response({"url": url}, status=status.HTTP_201_CREATED)
        except:
            return Response({'error': "An error occurred."}, status=status.HTTP_400_BAD_REQUEST)
        
        
class PaymentCallbackView(APIView):

    def post(self, request):
        try:
            
            data = {
                'secret': settings.PAYOK_SECRET_KEY,
                'desc': request.data.get('desc'),
                'currency': request.data.get('currency'),
                'shop': int(settings.PAYOK_SHOP_ID),
                'payment_id': request.data.get('payment_id'),
                'amount': float(request.data.get('amount')),
            }
            
            string_to_hash = '|'.join(map(str, data.values()))
            sign = hashlib.md5(string_to_hash.encode()).hexdigest()
            
            if sign != request.data.get('sign'):
                return Response({'error': "Sign doesnt match"}, status=status.HTTP_400_BAD_REQUEST)
            
            payment = Payment.objects.filter(uuid=request.data.get('payment_id')).first()
            if not payment or payment.paid:
                return Response({'error': "Payment not found"}, status=status.HTTP_400_BAD_REQUEST)
            
            payment.paid = True
            payment.save()
            
            payment.player.balance += int(request.data.get('amount'))
            payment.player.save()
            
            return Response({"Success": True}, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)