from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, BoardSerializer, WorkspaceSerializer, ListSerializer, CardSerializer, LabelSerializer, ChecklistSerializer, ListItemSerializer
from .models import User, Board, Workspace, List, Card, Label, Checklist, ListItem

# Create your views here.

def index(request, view):
    return render(request, "main/index.html")

# @api_view(['GET'])
# def current_user(request):
#     user = request.user
#     serializer = UserSerializer(user)
#     return Response(serializer.data)

# @api_view(['GET', 'POST'])
# def users(request):
#     if request.method == 'GET':
#         user = User.objects.all()
#         serializer = UserSerializer(user, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = UserSerilizer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['DELETE'])
# def delete_user(request, pk):
#     try:
#         user = User.objects.get(pk=pk)
#     except User.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'DELETE':
#         user.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

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