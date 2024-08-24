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
    all_pets = []
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
    for pet in pets:
        pet_data = {
            'id': pet['pet_id'],
            'name': pet['pet_name'],
            'gender': pet['sex'],
            'age': pet['age'],
            'size': pet['size'],
            'primary_breed': pet['primary_breed'],
            'secondary_breed': pet['secondary_breed'],
            'photo': pet['large_results_photo_url']
        }
        all_pets.append(pet_data)
    
    return JsonResponse(all_pets, safe=False)

def get_advanced_search(request):
    all_pets = []
    adopt_a_pet_url = "https://api-staging.adoptapet.com/search/pet_search"
    payload={
        "key": "hg4nsv85lppeoqqixy3tnlt3k8lj6o0c",
        "v": "3",
        "output": "json",
        "city_or_zip": "pass",
        "geo_range": "pass",
        "species": "pass",
        "sex": "pass",
        "start_number": "1",
        "end_number": "pass"
    }
    headers = {
        'Accept': 'application/json; charset=UTF8'
    }
    response = requests.request("GET", adopt_a_pet_url, headers=headers, data=payload)
    data = response.json()
    #print(data)
    pets = data['pets']

    return JsonResponse(all_pets, safe=False)