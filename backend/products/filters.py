from django_filters import rest_framework as filters
from .models import Product

class ProductFilter(filters.FilterSet):
    category = filters.CharFilter(
        field_name="category__slug",   # ← target the Category.slug field
        lookup_expr="iexact"
    )
    Price = filters.CharFilter(method="filter_price_range")
    class Meta:
        model  = Product
        fields = ["category", "Price"]

    def filter_price_range(self, queryset, name, value):
        try:
            low, high = value.split("-")
            low, high = float(low), float(high)
        except (ValueError, TypeError):
            return queryset
        return queryset.filter(price__gte=low, price__lte=high)
