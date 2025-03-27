from django.contrib import admin
from .models import producto

# Register your models here.
@admin.register(producto)
class productoAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'descripcion', 'precio', 'stock', 'disponible']