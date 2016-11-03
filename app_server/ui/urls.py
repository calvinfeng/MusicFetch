from django.conf.urls import url
from .                import views

# ?P<question_id> defines the name of the parameter
# [0-9]+ is the regular expression that matches a sequence of digits
# Using parenthesis around a pattern 'captures' the text

urlpatterns = [
    url(r'^$', views.index, name='index'),
]
