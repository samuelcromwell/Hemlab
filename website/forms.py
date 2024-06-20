from django import forms
from .models import ContactMessage

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'subject', 'message', 'subscribe']
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Your Name', 'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Email Address', 'class': 'form-control'}),
            'subject': forms.Select(choices=ContactMessage.SUBJECT_CHOICES, attrs={'class': 'form-control'}),
            'message': forms.Textarea(attrs={'placeholder': 'Type Your Message', 'class': 'form-control'}),
            'subscribe': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }


