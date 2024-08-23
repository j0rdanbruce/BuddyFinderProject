from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, generics, permissions, response, status
from .serializers import BuddyFinderSerializer
from .models import BuddyFinder

import requests
from django.http import JsonResponse

# Create your views here.

class BuddyFinderView(viewsets.ModelViewSet):
    serializer_class = BuddyFinderSerializer
    queryset = BuddyFinder.objects.all()

def get_all_pets(request):
    all_pets = {}
    adopt_a_pet_url = "https://api-staging.adoptapet.com/search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json&city_or_zip=07738&geo_range=50&species=dog&breed_id=real=801&sex=m&age=young&start_number=1&end_number=40"
    payload={}
    headers = {
        'Accept': 'application/json; charset=UTF8'
    }
    response = requests.request("GET", adopt_a_pet_url, headers=headers, data=payload)
    data = response.json()
    #print(data)
    pets = data['pets']

    #loop through all available pets
    #for pet in pets:
    #    pet_data = BuddyFinder(
    #        name = pet['pet_name'],
    #        gender = pet['sex'],
    #        size = pet['size'],
    #        description = 'unavailable'
    #    )
    #    pet_data.save()
    #    all_pets = BuddyFinder.objects.all()
    
    return JsonResponse(pets, safe=False)