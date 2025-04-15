from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    documento = models.CharField(max_length=15, unique=True, null=True, blank=True)  # Campo adicional
    telefono = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return self.username
