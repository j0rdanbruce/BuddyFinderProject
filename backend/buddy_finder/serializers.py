from rest_framework import serializers
from .models import BuddyFinder

class BuddyFinderSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuddyFinder
        fields = ('id', 'name', 'gender', 'size', 'description', 'completed')