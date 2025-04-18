"""
URL configuration for enyoi project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# productos/urls.py
from django.urls import path
from .views import (
    ProductoListCreate, ProductoRetrieveUpdateDestroy,
    VentaListCreate, VentaRetrieveUpdateDestroy,
    ReporteVentaDiariaListCreate, ReporteVentaDiariaRetrieveUpdateDestroy
)

urlpatterns = [
    # Productos
    path('productos/', ProductoListCreate.as_view(), name='producto-list-create'),
    path('productos/<int:pk>/', ProductoRetrieveUpdateDestroy.as_view(), name='producto-detail'),

    # Ventas
    path('ventas/', VentaListCreate.as_view(), name='venta-list-create'),
    path('ventas/<int:pk>/', VentaRetrieveUpdateDestroy.as_view(), name='venta-detail'),

    # Reportes de venta diarios
    path('reportes-venta-diarios/', ReporteVentaDiariaListCreate.as_view(), name='reporte-venta-diaria-list-create'),
    path('reportes-venta-diarios/<int:pk>/', ReporteVentaDiariaRetrieveUpdateDestroy.as_view(), name='reporte-venta-diaria-detail'),
]
