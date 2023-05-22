from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.shortcuts import redirect

from sportista.models import Field


#from sportista.models import Users


# Create your views here.

def index(request):
    return HttpResponse("To je backend Sporiste hehe")





@api_view(['GET'])
def getListaUsera(request):
   list_of_users = Field.objects.filter(is_sport = 1)
   res = serializers.serialize('json', list_of_users)

   return HttpResponse(res, content_type="text/json-comment-filtered")

@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def dodajuBazu(request):
    print("ok")
    return HttpResponse("ovdje je okej")

