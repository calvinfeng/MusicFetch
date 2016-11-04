from django.db  import models
from artist     import Artist

class Image(models.Model):
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='images')
    height = models.IntegerField(default=None)
    width = models.IntegerField(default=None)
    src = models.URLField(max_length=200)

    def __str__(self):
        return self.artist.name

    def __unicode__(self):
        return self.src
