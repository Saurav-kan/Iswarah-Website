from rest_framework import serializers
from .models import Product
from django.conf import settings

class ProductSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        if obj.image:
            return obj.image.url
        return settings.MEDIA_URL + 'products/DefaultPic.jpg'

    class Meta:
        model = Product
        fields = '__all__'