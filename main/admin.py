from django.contrib import admin
from .models import User, Workspace, Board, List, Card, Label, Checklist, ListItem

# Register your models here.

admin.site.register(User)
admin.site.register(Workspace)
admin.site.register(Board)
admin.site.register(List)
admin.site.register(Card)
admin.site.register(Label)
admin.site.register(Checklist)
admin.site.register(ListItem)
