# admin.py
from django.contrib import admin
from .models import ContactMessage

class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'subscribe', 'created_at')
    search_fields = ('name', 'email', 'subject')
    list_filter = ('subject', 'subscribe', 'created_at')
    ordering = ('-created_at',)

admin.site.register(ContactMessage, ContactMessageAdmin)
