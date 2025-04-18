from django.contrib import admin
from .models import Producto, Venta, ReporteVentaDiaria

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'precio', 'stock']
    search_fields = ['descripcion']

@admin.register(Venta)
class VentaAdmin(admin.ModelAdmin):
    list_display = ['producto', 'cantidad', 'total', 'fecha']
    list_filter = ['fecha']
    search_fields = ['producto__nombre']

@admin.register(ReporteVentaDiaria)
class ReporteVentaDiariaAdmin(admin.ModelAdmin):
    list_display = ['fecha', 'total_ventas', 'total_productos_vendidos']
    list_filter = ['fecha']
