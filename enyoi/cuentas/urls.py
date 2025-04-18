from django.urls import path
from .views import UserCreateAPIView
from .views import UserCreateAPIView, DebugLoginView

urlpatterns = [
    path('register/', UserCreateAPIView.as_view(), name='user-register'),
    path('debug-login/', DebugLoginView.as_view(), name='debug-login'),
]