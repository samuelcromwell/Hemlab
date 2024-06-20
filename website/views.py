from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ContactForm

def index(request):
    return render(request, "website/index.html")

def about(request):
    return render(request, "website/about1.html")

def blog(request):
    return render(request, "website/blog2.html")

def services(request):
    return render(request, "website/service1.html")

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been sent successfully!')
            return redirect('contact')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = ContactForm()
    return render(request, 'website/contact.html', {'form': form})

def singleblog(request):
    return render(request, "website/single-blog.html")
