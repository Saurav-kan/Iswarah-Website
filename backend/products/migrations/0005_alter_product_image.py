# Generated by Django 5.2.1 on 2025-06-07 00:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_product_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='./DefaultPic.jpg', null=True, upload_to='products/'),
        ),
    ]
