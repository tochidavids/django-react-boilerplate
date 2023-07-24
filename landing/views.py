from django.shortcuts import render
import json
from django.contrib.auth import authenticate, login, logout
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
        user = authenticate(request, email=email, password=password)

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


def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/')

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)

        if form.is_valid():
            # attempt to create a new user
            try:
                # user = User.objects.create_user(
                #     username=form.cleaned_data['username'],
                #     password=form.cleaned_data['password'],
                #     email=form.cleaned_data['email'],
                #     first_name=form.cleaned_data['firstname'],
                #     last_name=form.cleaned_data['lastname'],
                # )
                # user.save()
                form.save()
                messages.info(request, "Thanks for registering. You are now logged in.")
            except IntegrityError as e:
                print(e)
                return render(request, "signup.html", {
                    "message": "Something went wrong."
                })
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