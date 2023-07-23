from django.shortcuts import render
import json
from django.contrib.auth import authenticate, login, logout
# from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
# from django.http import JsonResponse
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.contrib.auth.forms import UserCreationForm  
# from django.views.decorators.csrf import csrf_exempt

# Create your views here.


def index(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse("main:index")) 
    else:    
        return render(request, "index.html")


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(request, email=email, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return render(request, "main/index.html")
        else:
            return render(request, "login.html", {
                "message": "Invalid email and/or password."
            })
    else:
        return render(request, "login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)

    # check if passwords match
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "signup.html", {
                "message": "Passwords must match."
            })

        if form.is_valid():
            new_user = form.save()
            # attempt to create a new user
            try:
                new_user = authenticate(
                    username=form.cleaned_data['username'],
                    password=form.cleaned_data['password'],
                    email=form.cleaned_data['email'],
                    first_name=form.cleaned_data['firstname'],
                    last_name=form.cleaned_data['lastname'],
                )
                login(request, new_user)
                messages.info(request, "Thanks for registering. You are now logged in.")
            except IntegrityError as e:
                print(e)
                return render(request, "signup.html", {
                    "message": "Email address and/or username already taken."
                })
            return HttpResponseRedirect(reverse("main:index"))
    else:
        return render(request, "signup.html")