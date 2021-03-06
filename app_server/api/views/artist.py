from rest_framework                    import viewsets
from rest_framework.response           import Response

from app_server.api.models.artist      import Artist
from app_server.api.serializers.artist import ArtistSerializer

from pdb        import set_trace

class ArtistViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows all artists to be viewed
    """
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

    # def list(self, request):
    #     set_trace()
    #
    # def retrieve(self, request):
    #     set_trace()


    # def get(self, request):
    #     queryset = Artist.objects.all()
    #     serializer = ArtistSerializer(queryset, many=True)
    #     return Response(serializer.data)
