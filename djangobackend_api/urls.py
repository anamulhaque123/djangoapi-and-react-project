from djangobackend_api.views import informationViewSet
from rest_framework.routers import DefaultRouter
from djangobackend_api import views

router = DefaultRouter()
router.register(r'informations', views.informationViewSet, basename='information')
urlpatterns = router.urls

