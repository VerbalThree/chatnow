from django.urls import path
from .views import RegisterView, ApiRootView

urlpatterns = [
    path('', ApiRootView.as_view(), name='api-root'),
    path('register/', RegisterView.as_view(), name='register'),
]