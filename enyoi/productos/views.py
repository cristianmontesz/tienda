from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Producto, Venta, ReporteVentaDiaria
from .serializers import ProductoSerializer, VentaSerializer, ReporteVentaDiariaSerializer

# ------------------- PRODUCTO -------------------
class ProductoListCreate(generics.ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    permission_classes = [AllowAny]

class ProductoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    permission_classes = [AllowAny]

# ------------------- VENTA -------------------
class VentaListCreate(generics.ListCreateAPIView):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer
    permission_classes = [AllowAny]

class VentaRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer
    permission_classes = [AllowAny]

# ------------------- REPORTE VENTA DIARIA -------------------
class ReporteVentaDiariaListCreate(generics.ListCreateAPIView):
    queryset = ReporteVentaDiaria.objects.all()
    serializer_class = ReporteVentaDiariaSerializer
    permission_classes = [AllowAny]

class ReporteVentaDiariaRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = ReporteVentaDiaria.objects.all()
    serializer_class = ReporteVentaDiariaSerializer
    permission_classes = [AllowAny]

