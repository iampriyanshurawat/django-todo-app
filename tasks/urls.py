from django.urls import path
from . import views

# urlpatterns = [
#     path('', views.home, name='home'),
#     path('add/', views.add_task, name='add_task'),
#     path('update/<int:id>/', views.update_task, name='update_task'),
#     path('delete/<int:id>/', views.delete_task, name='delete_task'),
# ]


from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('todos', views.TodoViewSet)
urlpatterns = router.urls