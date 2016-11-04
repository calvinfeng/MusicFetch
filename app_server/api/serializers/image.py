from rest_framework              import serializers
from app_server.api.models.image import Image

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('artist', 'height', 'width', 'src')
