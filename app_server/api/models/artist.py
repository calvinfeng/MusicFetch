from django.db  import models

class Artist(models.Model):
    name = models.CharField(db_index=True, max_length=200, default=None)
    spotify_id = models.CharField(db_index=True, max_length=200, default=None, unique=True)
    spotify_page = models.URLField(max_length=200)
    popularity = models.IntegerField(default=0)

    def __str__(self):
        return self.name
