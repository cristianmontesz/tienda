# views.py
from rest_framework import generics
from .models import Producto, Venta, ReporteVentaDiaria
from .serializers import ProductoSerializer, VentaSerializer, ReporteVentaDiariaSerializer

# API para Producto
class ProductoListCreate(generics.ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ProductoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

# API para Venta
class VentaListCreate(generics.ListCreateAPIView):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

class VentaRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

# API para ReporteVentaDiaria
class ReporteVentaDiariaListCreate(generics.ListCreateAPIView):
    queryset = ReporteVentaDiaria.objects.all()
    serializer_class = ReporteVentaDiariaSerializer

class ReporteVentaDiariaRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = ReporteVentaDiaria.objects.all()
    serializer_class = ReporteVentaDiariaSerializer
