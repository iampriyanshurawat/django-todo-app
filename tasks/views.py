from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Task
from rest_framework.viewsets import ModelViewSet
from .models import Task
from .serializers import TaskSerializer
from rest_framework.permissions import IsAuthenticated


# # Create your views here.
# @login_required
# def home(request):
#     tasks = Task.objects.filter(user=request.user)

#     context = {
#         'tasks': tasks
#     }

#     return render(request, "home.html", context)

# @login_required
# def add_task(request):
#     if request.method == "POST":
#         title = request.POST['title']
#         description = request.POST.get('description', '')

#         Task.objects.create(user=request.user, title=title, description=description)

#         return redirect('home')
    
#     return render(request, 'add_task.html')

# @login_required
# def update_task(request, id):
#     task = Task.objects.get(id=id, user=request.user)
#     if request.method == "POST":
#         task.title = request.POST['title']
#         task.description = request.POST.get('description', '')
#         task.completed = 'completed' in request.POST
#         task.save()

#         return redirect('home')

#     context = {
#         'task': task
#     }
#     return render(request, 'update_task.html', context)

# @login_required
# def delete_task(request, id):
#     task = Task.objects.get(id=id, user=request.user)
#     task.delete()
#     return redirect('home')


class TodoViewSet(ModelViewSet):
    queryset = Task.objects.all().order_by("-created_at")
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
