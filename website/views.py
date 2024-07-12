import requests
from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
from .forms import EmailForm, AppointmentForm, ContactForm
from .models import Email, Appointment, Contact
from django.conf import settings

@csrf_exempt
def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'status': 'success'}, status=200)
        else:
            return JsonResponse({'status': 'error', 'errors': form.errors.as_json()}, status=400)
    else:
        form = ContactForm()
    return render(request, 'website/contact.html', {'form': form})


def index(request):
    form = EmailForm()
    return render(request, "website/index.html", {'form': form})

def about(request):
    return render(request, "website/about1.html")

def blog(request):
    return render(request, "website/blog2.html")

def services(request):
    return render(request, "website/service1.html")

def singleblog(request):
    return render(request, "website/single-blog.html")

class SubscribeView(View):
    def post(self, request, *args, **kwargs):
        form = EmailForm(request.POST)
        recaptcha_response = request.POST.get('g-recaptcha-response')
        data = {
            'secret': settings.RECAPTCHA_SECRET_KEY,
            'response': recaptcha_response
        }
        r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
        result = r.json()

        if result['success']:
            if form.is_valid():
                email = form.cleaned_data['email']
                if Email.objects.filter(email=email).exists():
                    return JsonResponse({'status': 'error', 'message': 'You have already subscribed to our newsletter.'}, status=400)
                else:
                    form.save()
                    return JsonResponse({'status': 'success', 'message': 'Thank you for subscribing to our Newsletter! You will now receive weekly updates from us.'})
            else:
                return JsonResponse({'status': 'error', 'errors': form.errors.as_json()}, status=400)
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid reCAPTCHA. Please try again.'}, status=400)

class ContactView(View):
    def post(self, request, *args, **kwargs):
        form = ContactForm(request.POST)
        recaptcha_response = request.POST.get('g-recaptcha-response')
        data = {
            'secret': settings.RECAPTCHA_SECRET_KEY,
            'response': recaptcha_response
        }
        r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
        result = r.json()
        
        if result['success']:
            if form.is_valid():
                form.save()
                return JsonResponse({'message': 'Success'})
            else:
                return JsonResponse({'errors': form.errors.as_json()}, status=400)
        else:
            return JsonResponse({'message': 'Invalid reCAPTCHA. Please try again.'}, status=400)        

class AppointmentView(View):
    def post(self, request, *args, **kwargs):
        form = AppointmentForm(request.POST)
        recaptcha_response = request.POST.get('g-recaptcha-response')
        data = {
            'secret': settings.RECAPTCHA_SECRET_KEY,
            'response': recaptcha_response
        }
        r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
        result = r.json()

        if result['success']:
            if form.is_valid():
                form.save()
                return JsonResponse({'message': 'Success'})
            else:
                return JsonResponse({'errors': form.errors.as_json()}, status=400)
        else:
            return JsonResponse({'message': 'Invalid reCAPTCHA. Please try again.'}, status=400)

