from django import forms
from .models import Contact, Email, Appointment
# from django_recaptcha.fields import ReCaptchaField

class AppointmentForm(forms.ModelForm):
    class Meta:
        model = Appointment
        fields = ['name', 'email', 'location', 'subject', 'message']

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'subject', 'message', 'subscribe']
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Your Name', 'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Email Address', 'class': 'form-control'}),
            'subject': forms.Select(attrs={'class': 'form-control'}, choices=[('', 'Select Subject')] + Contact.SUBJECT_CHOICES),
            'message': forms.Textarea(attrs={'placeholder': 'Write Your Message', 'class': 'form-control'}),
            'subscribe': forms.CheckboxInput(attrs={'class': 'form-control'}),
        }

class EmailForm(forms.ModelForm):
    class Meta:
        model = Email
        fields = ['email']


