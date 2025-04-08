from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(null=True, blank=True, default="sin descripcion")
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()  
   
    
    def __str__(self):
        return self.nombre

    def restar_stock(self, cantidad):
        """Método para restar el stock después de una venta"""
        if cantidad <= self.stock:
            self.stock -= cantidad
            self.save()
            return True
        return False

    def aumentar_stock(self, cantidad):
        """Método para aumentar el stock (reponer productos)"""
        self.stock += cantidad
        self.save()

class Venta(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)  # Producto vendido
    cantidad = models.PositiveIntegerField()  # Cantidad vendida
    total = models.DecimalField(max_digits=10, decimal_places=2)  # Total de la venta en COP
    fecha = models.DateTimeField(auto_now_add=True)  # Fecha y hora de la venta

    def __str__(self):
        return f"Venta de {self.producto.nombre} por {self.total} COP"
    
    def save(self, *args, **kwargs):
        """Sobrescribimos el método save para restar el stock cuando se realiza una venta"""
        if self.producto.restar_stock(self.cantidad):
            super().save(*args, **kwargs)
        else:
            raise ValueError("No hay suficiente stock para realizar esta venta")

class ReporteVentaDiaria(models.Model):
    fecha = models.DateField(unique=True)  # Fecha del reporte
    total_ventas = models.DecimalField(max_digits=10, decimal_places=2, default=0)  # Total de ventas del día en COP
    total_productos_vendidos = models.PositiveIntegerField(default=0)  # Total de productos vendidos

    def actualizar_reporte(self):
        """Método para actualizar las ventas del día"""
        ventas_del_dia = Venta.objects.filter(fecha__date=self.fecha)  # Obtener ventas de la fecha específica
        self.total_ventas = ventas_del_dia.aggregate(models.Sum('total'))['total__sum'] or 0
        self.total_productos_vendidos = ventas_del_dia.aggregate(models.Sum('cantidad'))['cantidad__sum'] or 0
        self.save()

    def __str__(self):
        return f"Reporte del {self.fecha} - Total ventas: {self.total_ventas} COP"
