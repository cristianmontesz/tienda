from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.timezone import localdate
from .models import Venta, ReporteVentaDiaria

@receiver(post_save, sender=Venta)
def actualizar_reporte(_sender, instance, created, **_kwargs):
    if created:
        fecha_venta = localdate(instance.fecha)
        reporte, _ = ReporteVentaDiaria.objects.get_or_create(fecha=fecha_venta)
        reporte.actualizar_reporte()
