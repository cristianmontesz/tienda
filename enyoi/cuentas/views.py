from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate


class UserCreateAPIView(APIView):
    permission_classes = [AllowAny]  

    def post(self, request):
        print(" Datos recibidos:", request.data)

        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Usuario creado exitosamente'}, status=status.HTTP_201_CREATED)
        print("❌ Errores:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  

class DebugLoginView(APIView):
    permission_classes = [AllowAny]  # ⬅️ AÑADE ESTO

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        print("🕵️ Intentando autenticar:", username, password)

        user = authenticate(username=username, password=password)
        if user is not None:
            print("✅ Usuario autenticado:", user)
            return Response({"message": "Usuario autenticado correctamente"}, status=200)
        else:
            print("❌ Fallo de autenticación")
            return Response({"error": "Credenciales inválidas"}, status=400)