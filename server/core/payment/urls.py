from django.urls import path
from .views import PaymentCreateView, PaymentCallbackView


urlpatterns = [
    path('create/', PaymentCreateView.as_view()),
    path('callback/', PaymentCallbackView.as_view()),
]
