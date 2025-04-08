from django.shortcuts import render, get_object_or_404, redirect
from .models import Producto, Venta
from .forms import ProductoForm
from django.utils import timezone


# Vista de inicio
def home(request):
    mensaje = "Bienvenido a la tienda virtual"
    return render(request, 'base.html', {'mensaje': mensaje})

# Vista principal (index)
def index(request):
    return render(request, 'index.html')

# Vista para listar todos los productos
def lista_productos(request):
    productos = Producto.objects.all()  # Obtenemos todos los productos
    return render(request, 'lista_productos.html', {'productos': productos})

# Vista para ver detalles de un producto específico
def detalle_producto(request, pk):
    producto = get_object_or_404(Producto, pk=pk)  # Obtenemos el producto por su id (pk)
    return render(request, 'detalle_producto.html', {'producto': producto})

# Vista para crear un nuevo producto
def crear_producto(request):
    if request.method == "POST":
        form = ProductoForm(request.POST,)  
        if form.is_valid():  
            form.save()  
            return redirect('lista_productos') 
    else:
        form = ProductoForm()  
    return render(request, 'crear_producto.html', {'form': form})

# Vista para mostrar las ventas realizadas en el día
def ventas_del_dia(request):
    fecha_actual = timezone.now().date()  
    ventas = Venta.objects.filter(fecha__date=fecha_actual)  
    total_ventas = sum(venta.total for venta in ventas)  
    return render(request, 'ventas_del_dia.html', {'ventas': ventas, 'total_ventas': total_ventas})

# Vista para crear una nueva venta
def crear_venta(request):
    if request.method == "POST":
        producto_id = request.POST.get('producto')  
        cantidad = int(request.POST.get('cantidad'))  
        producto = get_object_or_404(Producto, pk=producto_id)  

        # Verificamos si el producto tiene suficiente stock
        if producto.stock >= cantidad:
            total = producto.precio * cantidad  
            venta = Venta(producto=producto, cantidad=cantidad, total=total) 
            venta.save()

            # Reducimos el stock del producto
            producto.stock -= cantidad
            producto.save()

            return redirect('ventas_del_dia')  # Redirigimos a la vista de ventas del día
        else:
            error_message = "No hay suficiente stock para realizar esta venta."
            return render(request, 'crear_venta.html', {'error_message': error_message})

    else:
        productos = Producto.objects.filter(stock__gt=0)  
        return render(request, 'crear_venta.html', {'productos': productos})

# Vista para mostrar el listado de todas las ventas
def lista_ventas(request):
    ventas = Venta.objects.all()  
    return render(request, 'lista_ventas.html', {'ventas': ventas})
