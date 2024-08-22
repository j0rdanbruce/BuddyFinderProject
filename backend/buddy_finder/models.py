from django.db import models

# Create your models here.

class BuddyFinder(models.Model):
    name = models.CharField(max_length=50)
    gender = models.CharField(max_length=6)
    size = models.CharField(max_length=10)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.name