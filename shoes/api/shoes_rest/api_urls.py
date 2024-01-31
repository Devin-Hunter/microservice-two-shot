from django.urls import path

from .views import api_shoes_list, api_shoes_details

urlpatterns = [
    path("shoes/", api_shoes_list, name="api_shoes_list"),
    path("bins/<int:bin_vo_id>/shoes/", api_shoes_details, name="api_shoes_details"),
    path("shoes/<int:pk>/", api_shoes_details, name="api_shoes_details"),
]
