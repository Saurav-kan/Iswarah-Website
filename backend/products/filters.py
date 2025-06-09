from django_filters import rest_framework as filters
from .models import Product

class ProductFilter(filters.FilterSet):
    # 1) Category filter (exact match or case-insensitive)
    category = filters.CharFilter(field_name="category", lookup_expr="iexact")
    
    # 2) Single Price range param "min-max"
    Price = filters.CharFilter(method="filter_price_range")

    class Meta:
        model = Product
        fields = [
            "category",    # comes first
            "Price",       # then your price range
            # "type", "size" # etc.
        ]

    def filter_price_range(self, queryset, name, value):
        try:
            low, high = value.split("-")
            low, high = float(low), float(high)
        except (ValueError, TypeError):
            return queryset
        return queryset.filter(price__gte=low, price__lte=high)
