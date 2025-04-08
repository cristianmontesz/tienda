from django.contrib import admin
from .models import Producto

# Registrar el modelo Producto en el panel de administración
@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'precio', 'stock']
    search_fields = ['descripcion']
