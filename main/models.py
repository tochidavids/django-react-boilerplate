from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class User(AbstractUser):
    username = models.CharField(max_length=50, unique=True)
    recent = ArrayField(models.IntegerField(), default=list)

    def __str__(self):
        return self.first_name + self.last_name

class Workspace(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='workspace_creator')
    members = models.ManyToManyField(User, blank=True, related_name='workspace_members')
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Board(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='board_creator')
    members = models.ManyToManyField(User, blank=True, related_name='board_members')
    name = models.CharField(max_length=50)
    workspace = models.ForeignKey(Workspace, on_delete=models.CASCADE, related_name='board_workspace')
    starred = models.BooleanField(default=False)
    achived = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class List(models.Model):
    board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name='list_board')
    title = models.CharField(max_length=50)
    achived = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Card(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='card_creator')
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, blank=True)
    due_date = models.DateField(blank=True, null=True)
    list = models.ForeignKey(List, on_delete=models.CASCADE, related_name='card_list')
    members = models.ManyToManyField(User, blank=True, related_name='card_members')
    achived = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Label(models.Model):
    name = models.CharField(max_length=50)
    card = models.ManyToManyField(Card, related_name='label_card')

    def __str__(self):
        return self.name

class Checklist(models.Model):
    name = models.CharField(max_length=50)
    card = models.ForeignKey(Card, on_delete=models.CASCADE, related_name='checklist_card')

    def __str__(self):
        return self.name

class ListItem(models.Model):
    value = models.CharField(max_length=50)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='list_item_creator')
    checklist = models.ForeignKey(Checklist, on_delete=models.CASCADE, related_name='list_item_checklist')
    date_due = models.DateField(blank=True, null=True)
    members = models.ManyToManyField(User, related_name='list_item_members', blank=True)
    checked = models.BooleanField(default=False)

    def __str__(self):
        return self.value
