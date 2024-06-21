# admin.py
from django.contrib import admin
from .models import Contact, Email, Appointment


admin.site.register(Contact)


admin.site.register(Email)


admin.site.register(Appointment)

