from django.shortcuts import render

def index(request):
    return render(request, "website/index.html")

def about(request):
    return render(request, "website/about1.html")

def blog(request):
    return render(request, "website/blog2.html")

def services(request):
    return render(request, "website/service1.html")

def contact(request):
    return render(request, "website/contact.html")