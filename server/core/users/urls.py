from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import UserInfo, JWTView, ReportCreate, GetCSRF, Questions, ApiLogout, RedirectUser


urlpatterns = [
    path('', include('social_django.urls', namespace='social')),
    path('user/', UserInfo.as_view(), name='user_info'),
    path('report/', ReportCreate.as_view(), name='report'),
    path('question/', Questions.as_view(), name='question'),

    path('auth/redirect/', RedirectUser.as_view(), name='redirect-auth'),

    path('auth_logout/', ApiLogout.as_view(), name='auth_logout'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('jwt/', JWTView.as_view(), name='jwt'),
    path('csrf/', GetCSRF.as_view(), name='get_csrf'),
]
