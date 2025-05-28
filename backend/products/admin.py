from django.contrib import admin
from .models import Product

admin.site.register(Product)

class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}



# Register your models here.
