from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.index, name='index'),
    # path('', views.index, name='boards'),
    path(r'logout', views.LogoutView.as_view(), name='logout')
]
