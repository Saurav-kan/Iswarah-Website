from rest_framework import viewsets, permissions   
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Min, Max
from django_filters.rest_framework import DjangoFilterBackend

from .models import Product
from .serializers import ProductSerializer
from .filters import ProductFilter

from .models import Category
from .serializers import CategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('-created_at')
    serializer_class = ProductSerializer
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductFilter


@api_view(["GET"])
def price_range(request):
    qs = Product.objects.all()
    category = request.query_params.get("category")
    if category:
        qs = qs.filter(category__slug__iexact=category)


    agg = qs.aggregate(
        min_price=Min("price"),
        max_price=Max("price")
    )
    return Response(agg)

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all().order_by("name")
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]
