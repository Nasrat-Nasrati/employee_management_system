
# from django.contrib import admin
# from django.urls import path
# from django.conf import settings
# from django.conf.urls.static import static

# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]
# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('employee.urls')),  # مسیر API های ما
    path('api-auth/', include('rest_framework.urls')),  # برای لاگین پیشفرض DRF
     path('api/auth/', obtain_auth_token),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


