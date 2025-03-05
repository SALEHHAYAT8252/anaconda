from django.http import HttpResponse
from django.shortcuts import render


def weather(request):
    return render(request,'weather.html')