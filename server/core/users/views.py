import uuid

from django.http import HttpResponseRedirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from django.middleware.csrf import get_token
from django.conf import settings
from django.urls import reverse
from django.utils.decorators import method_decorator
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from .models import CustomUser, Report, UserQuestions
from .serializers import CustomUserSerializer, ReportSerializer, QuestionSerializer
from django.views.decorators.csrf import csrf_exempt

import json


class JWTView(APIView):
    authentication_classes = [SessionAuthentication]

    @swagger_auto_schema(
        responses={
            200: openapi.Response('JWT tokens', schema=openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties={
                    'refresh': openapi.Schema(type=openapi.TYPE_STRING),
                    'access': openapi.Schema(type=openapi.TYPE_STRING),
                    'username': openapi.Schema(type=openapi.TYPE_STRING),
                    'id': openapi.Schema(type=openapi.TYPE_INTEGER),
                }
            )),
            401: 'Authentication credentials were not provided.'
        }
    )
    def get(self, request):
        if not request.user.is_anonymous:
            refresh = RefreshToken.for_user(request.user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'username': request.user.username,
                'id': request.user.id,
            })
        return Response({'detail': 'Authentication credentials were not provided.'}, status=401)


class UserInfo(APIView):
    @swagger_auto_schema(
        responses={
            200: CustomUserSerializer,
            400: 'No pk provided',
            401: 'Authentication credentials were not provided.'
        }
    )
    def get(self, request, format=None):
        pk = request.GET.get('pk', None)
        if pk is None:
            pk = request.user.id
        if pk is None or request.user.is_anonymous:
            return Response({"error": "No pk provided"}, status=status.HTTP_400_BAD_REQUEST)
        user = self.get_object(pk)
        serializer = CustomUserSerializer(user)
        return Response(serializer.data)

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'first_name': openapi.Schema(type=openapi.TYPE_STRING),
                'last_name': openapi.Schema(type=openapi.TYPE_STRING),
                'username': openapi.Schema(type=openapi.TYPE_STRING),
                'photo': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_BINARY),
            }
        ),
        responses={200: 'User info updated.', 400: 'An error occurred.'}
    )
    def post(self, request):
        try:
            data = json.loads(request.data)
            user = request.user
            user.first_name = data.get('first_name', user.first_name)
            user.last_name = data.get('last_name', user.last_name)
            user.username = data.get('username', user.username)
            user.photo = data.get('photo', user.photo)
            user.save()
            return Response({'detail': 'User info updated.'}, status=status.HTTP_200_OK)
        except:
            return Response({'error': 'An error occurred.'}, status=status.HTTP_400_BAD_REQUEST)


class ReportCreate(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'reported_user_id': openapi.Schema(type=openapi.TYPE_INTEGER),
                'report_type': openapi.Schema(type=openapi.TYPE_STRING, enum=['cheating', 'insult', 'foul', 'other']),
                'description': openapi.Schema(type=openapi.TYPE_STRING),
            }
        ),
        responses={201: 'Report created.', 400: 'An error occurred.'}
    )
    def post(self, request):
        try:
            user = request.user
            reported_user_pk = request.data.get('reported_user_id', None)
            report_type = request.data.get('report_type', None)
            description = request.data.get('description', None)
            report_types = ('cheating', 'insult', 'foul', 'other')

            if report_type is None or report_type not in report_types:
                return Response({'error': 'Invalid report_type.'}, status=status.HTTP_400_BAD_REQUEST)

            Report.objects.create(
                user=user,
                report_type=report_type,
                reported_user=CustomUser.objects.get(pk=reported_user_pk),
                description=description or ''
            )

            return Response({'detail': 'Report created.'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': 'An error occurred.'}, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(
        responses={200: ReportSerializer(many=True)}
    )
    def get(self, request):
        reports = Report.objects.filter(user=request.user)
        return Response(ReportSerializer(reports, many=True).data)


class GetCSRF(APIView):
    @swagger_auto_schema(
        responses={200: openapi.Response('CSRF token', schema=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={'csrf_token': openapi.Schema(type=openapi.TYPE_STRING)}
        ))}
    )
    def get(self, request):
        return Response({'csrf_token': get_token(request)})


class Questions(APIView):
    @swagger_auto_schema(
        responses={200: QuestionSerializer(many=True)}
    )
    def get(self, request):
        questions = UserQuestions.objects.filter(user=request.user)
        return Response(QuestionSerializer(questions, many=True).data)

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'question': openapi.Schema(type=openapi.TYPE_STRING),
                'question_type': openapi.Schema(type=openapi.TYPE_STRING,
                                                enum=['general', 'technical', 'complaint', 'suggestion', 'other']),
            }
        ),
        responses={201: QuestionSerializer, 400: 'An error occurred.'}
    )
    def post(self, request):
        data = json.loads(request.data.decode('utf-8'))
        try:
            question = UserQuestions.objects.create(
                user=request.user,
                question=data.get('question'),
                question_type=data.get('question_type', 'other'),
            )
            return Response(QuestionSerializer(question).data, status=status.HTTP_201_CREATED)
        except:
            return Response({'error': 'An error occurred.'}, status=status.HTTP_400_BAD_REQUEST)


class RedirectUser(APIView):
    def get(self, request):
        refresh = RefreshToken.for_user(request.user)
        access_token = refresh.access_token
        refresh_token = str(refresh)
        return HttpResponseRedirect(f'http://localhost:3000/callback?access_token={access_token}&refresh_token={refresh_token}')


@method_decorator(csrf_exempt, name='dispatch')
class ApiLogout(APIView):
    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={'refresh': openapi.Schema(type=openapi.TYPE_STRING)}
        ),
        responses={200: 'User logged out.', 400: 'An error occurred.'}
    )
    def post(self, request):
        try:
            data = json.loads(request.data)
            refresh = data.get('refresh', None)

            if not refresh:
                return Response({'error': 'Refresh token is required.'}, status=status.HTTP_400_BAD_REQUEST)

            token = RefreshToken(refresh)
            token.blacklist()
            return Response({'detail': 'User logged out.'}, status=status.HTTP_200_OK)
        except:
            return Response({'error': 'An error occurred.'}, status=status.HTTP_400_BAD_REQUEST)
