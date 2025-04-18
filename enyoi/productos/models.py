from django.db import models
from django.utils.timezone import localdate

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()

    def restar_stock(self, cantidad):
        if self.stock >= cantidad:
            self.stock -= cantidad
            self.save()
            return True
        return False

    def __str__(self):
        return self.nombre

class Venta(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE) 
    cantidad = models.PositiveIntegerField()  
    total = models.DecimalField(max_digits=10, decimal_places=2)  
    fecha = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return f"Venta de {self.producto.nombre} por {self.total} COP"
    
    def save(self, *args, **kwargs):
        if self.producto.restar_stock(self.cantidad):
            super().save(*args, **kwargs)
            # Obtener o crear el reporte del día
            fecha_venta = localdate(self.fecha)
            reporte, _ = ReporteVentaDiaria.objects.get_or_create(fecha=fecha_venta)
            reporte.actualizar_reporte()
        else:
            raise ValueError("No hay suficiente stock para realizar esta venta")

class ReporteVentaDiaria(models.Model):
    fecha = models.DateField(unique=True)
    total_ventas = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    total_productos_vendidos = models.PositiveIntegerField(default=0)

    def actualizar_reporte(self):
        ventas_del_dia = Venta.objects.filter(fecha__date=self.fecha)
        self.total_ventas = ventas_del_dia.aggregate(models.Sum('total'))['total__sum'] or 0
        self.total_productos_vendidos = ventas_del_dia.aggregate(models.Sum('cantidad'))['cantidad__sum'] or 0
        self.save()

    def __str__(self):
        return f"Reporte del {self.fecha} - Total ventas: {self.total_ventas} COP"

