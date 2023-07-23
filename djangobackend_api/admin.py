from django.contrib import admin
from .models import information

# Register your models here.
class informationAdmin(admin.ModelAdmin):
    list =(id,'name','gender', 'fathername','mothername')



admin.site.register(information)
