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
from django.contrib import admin
from django.urls import path
from productos.views import home, index, lista_productos, detalle_producto, crear_producto, lista_ventas, ventas_del_dia, crear_venta
from productos import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', home, name='home'),
    path('', index, name='index'),  
    path('productos/', lista_productos, name='lista_productos'),  
    path('producto/<int:pk>/', detalle_producto, name='detalle_producto'),
   path('producto/nuevo/', views.crear_producto, name='crear_producto'),
    
    # Rutas para ventas
    path('ventas/', lista_ventas, name='lista_ventas'),  
    path('ventas/dia/', ventas_del_dia, name='ventas_del_dia'), 
    path('venta/nueva/', crear_venta, name='crear_venta'),  
]
