from rest_framework               import serializers
from app_server.api.models.artist import Artist

class ArtistSerializer(serializers.ModelSerializer):
    images = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Artist
        fields = ('name', 'spotify_id', 'spotify_page', 'popularity', 'images')
