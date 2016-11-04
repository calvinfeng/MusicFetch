from rest_framework                    import viewsets
from rest_framework.response           import Response
from app_server.api.models             import Image
from app_server.api.serializers.image  import ImageSerializer
from pdb                               import set_trace

class ImageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows all images to be viewed
    """
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
