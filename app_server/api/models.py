from django.db  import models

# Create your models here.
class Artist(models.Model):
    name = models.CharField(db_index = True, max_length = 200, default = None)
    spotify_id = models.CharField(db_index = True, max_length = 200, default = None)
    spotify_page = models.URLField(max_length = 200)
    popularity = models.IntegerField(default = 0)

    def __str__(self):
        return self.name

class Image(models.Model):
    artist = models.ForeignKey(Artist, on_delete = models.CASCADE, related_name='images')
    height = models.IntegerField(default = None)
    width = models.IntegerField(default = None)
    src = models.URLField(max_length = 200)

    def __str__(self):
        return self.artist.name

    def __unicode__(self):
        return self.src
