# serializers.py
from rest_framework import serializers
from .models import Producto, Venta, ReporteVentaDiaria

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class VentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = '__all__'

class ReporteVentaDiariaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReporteVentaDiaria
        fields = '__all__'
