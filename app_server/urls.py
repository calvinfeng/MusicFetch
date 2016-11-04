"""MusicFetch URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls              import url, include
from django.contrib                import admin
from rest_framework                import routers
from app_server.api.views.artist   import ArtistViewSet
from app_server.api.views.image    import ImageViewSet
from pdb                           import set_trace

router = routers.DefaultRouter()
router.register(r'api/artists', ArtistViewSet)
router.register(r'api/images', ImageViewSet)

urlpatterns = [
    url(r'^', include('app_server.ui.urls')),
    url(r'^', include(router.urls)),
    url(r'^admin/', admin.site.urls)
]
