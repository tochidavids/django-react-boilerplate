from django.shortcuts import render, HttpResponseRedirect
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.contrib.auth import logout
from rest_framework.views import APIView
from .serializers import UserSerializer, BoardSerializer, WorkspaceSerializer, ListSerializer, CardSerializer, LabelSerializer, ChecklistSerializer, ListItemSerializer
from .models import User, Board, Workspace, List, Card, Label, Checklist, ListItem

# Create your views here.

def index(request, view):
    return render(request, "main/index.html")

def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/')

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

class CurrentUserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer 
    queryset = User.objects.all()

    def get_object(self):
        pk = self.kwargs.get('pk')

        if pk == "current":
            return self.request.user

        return super().get_object()

class UsersView(viewsets.ModelViewSet):
    serializer_class = UserSerializer 
    queryset = User.objects.all()

class BoardsView(viewsets.ModelViewSet):
    serializer_class = BoardSerializer 
    queryset = Board.objects.all()

class WorkspacesView(viewsets.ModelViewSet):
    serializer_class = WorkspaceSerializer 
    queryset = Workspace.objects.all()

class ListsView(viewsets.ModelViewSet):
    serializer_class = ListSerializer 
    queryset = List.objects.all()

class CardsView(viewsets.ModelViewSet):
    serializer_class = CardSerializer 
    queryset = Card.objects.all()

class LabelsView(viewsets.ModelViewSet):
    serializer_class = LabelSerializer 
    queryset = Label.objects.all()

class ChecklistsView(viewsets.ModelViewSet):
    serializer_class = ChecklistSerializer 
    queryset = Checklist.objects.all()

class ListItemsView(viewsets.ModelViewSet):
    serializer_class = ListItemSerializer 
    queryset = ListItem.objects.all() 