from rest_framework               import serializers
from app_server.api.models.artist import Artist
from pdb                          import set_trace
class ArtistSerializer(serializers.ModelSerializer):
    images = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Artist
        fields = ('name', 'spotify_id', 'spotify_page', 'popularity', 'images')

    def create(self, validated_data):
        new_artist = Artist(**validated_data)
        if new_artist.save():
            return new_artist
        else:
            return new_artist

    def update(self, instance, validated_data):
        set_trace()
        return instance
