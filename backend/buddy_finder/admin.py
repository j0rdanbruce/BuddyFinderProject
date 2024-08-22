from django.contrib import admin
from .models import BuddyFinder

class BuddyFinderAdmin(admin.ModelAdmin):
    list_display = ('name', 'gender', 'size', 'description', 'completed')

# Register your models here.

admin.site.register(BuddyFinder, BuddyFinderAdmin)