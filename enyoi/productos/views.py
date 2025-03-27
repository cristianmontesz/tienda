from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    mensaje = "Bienvenido a la tienda virtual"
    # Usamos 'render' para devolver una plantilla HTML
    return render(request, 'home.html', {'mensaje': mensaje})