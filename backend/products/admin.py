from django.contrib import admin
from .models import Category, Product

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}
    list_display        = ("name", "slug")

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display        = ("name", "price", "category", "in_stock")
    prepopulated_fields = {"slug": ("name",)}
    list_filter         = ("category", "in_stock")
