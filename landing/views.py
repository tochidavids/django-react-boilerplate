from django.shortcuts import render
import json
from django.contrib.auth import authenticate, login
# from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
# from django.http import JsonResponse
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.contrib.auth.models import User
from .forms import SignUpForm
# from django.views.decorators.csrf import csrf_exempt

# Create your views here.


def index(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/u') 
        # return HttpResponseRedirect(reverse("main:index")) 
    else:    
        return render(request, "index.html")


def login_view(request):
    if request.method == "POST":
        # Attempt to sign user in
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(email=email, password=password)
        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect('/u') 
        else:
            return render(request, "login.html", {
                "message": "Invalid email and/or password."
            })
    else:
        return render(request, "login.html")

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)

        if form.is_valid():
            # attempt to create a new user
            try:
                form.save()
            except IntegrityError as e:
                print(e)
                return render(request, "signup.html", {
                    "message": "Something went wrong."
                })
            user = authenticate(
                username=form.cleaned_data['username'],
                password=form.cleaned_data['password'],
            )
            login(request, user)
            return HttpResponseRedirect('/u')
        else:
            if form.errors:
                return render(request, "signup.html", {
                        "message": json.loads(form.errors.as_json())['__all__'][0]['message']
                    })
            
    return render(request, "signup.html", {
            "message": 'Something went wrong.'
        })