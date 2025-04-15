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
# urls.py
from django.urls import path
from productos.views import ProductoListCreate, ProductoRetrieveUpdateDestroy, VentaListCreate, VentaRetrieveUpdateDestroy, ReporteVentaDiariaListCreate, ReporteVentaDiariaRetrieveUpdateDestroy

urlpatterns = [
    # Rutas para Producto
    path('api/productos/', ProductoListCreate.as_view(), name='producto-list-create'),
    path('api/productos/<int:pk>/', ProductoRetrieveUpdateDestroy.as_view(), name='producto-detail'),

    # Rutas para Venta
    path('api/ventas/', VentaListCreate.as_view(), name='venta-list-create'),
    path('api/ventas/<int:pk>/', VentaRetrieveUpdateDestroy.as_view(), name='venta-detail'),

    # Rutas para ReporteVentaDiaria
    path('api/reportes-venta-diarios/', ReporteVentaDiariaListCreate.as_view(), name='reporte-venta-diaria-list-create'),
    path('api/reportes-venta-diarios/<int:pk>/', ReporteVentaDiariaRetrieveUpdateDestroy.as_view(), name='reporte-venta-diaria-detail'),
]
  

