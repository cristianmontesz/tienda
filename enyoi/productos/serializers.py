from rest_framework import serializers
from .models import Producto, Venta, ReporteVentaDiaria

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class VentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = ['id', 'producto', 'cantidad', 'total', 'fecha']
        read_only_fields = ['fecha']


class ReporteVentaDiariaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReporteVentaDiaria
        fields = '__all__'
        read_only_fields = ['fecha', 'total_ventas', 'total_productos_vendidos']
