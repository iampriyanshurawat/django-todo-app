from django.shortcuts import render, redirect
from django.contrib import auth, messages

# Create your views here.

def login_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('home')
        
        else:
            messages.error(request, "Invalid Credentials")
            return render(request, 'login.html')
    
    return render(request, 'login.html')

def logout_view(request):
    auth.logout(request)
    return redirect('login')