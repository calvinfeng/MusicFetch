from rest_framework        import serializers
from app_server.api.models import Image

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('artist', 'height', 'width', 'src')
