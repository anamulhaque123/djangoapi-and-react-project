from rest_framework import serializers
from djangobackend_api.models import information

class informationSerializer(serializers.ModelSerializer):
    class Meta:
        model = information
        fields = '__all__'