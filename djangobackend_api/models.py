from django.db import models

# Create your models here.
class information(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=250)
    gender = models.CharField(max_length=200)
    fathername = models.CharField(max_length=350)
    mothername = models.CharField(max_length=350)

    def __str__(self):
        return self.name