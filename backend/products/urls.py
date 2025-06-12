from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, price_range,  CategoryViewSet, price_range


router = DefaultRouter()
router.register(r"products", ProductViewSet, basename="product")
router.register(r"categories", CategoryViewSet, basename="category")

urlpatterns = [
    path("price-range/", price_range, name="price-range"),
    path('', include(router.urls)),
]




