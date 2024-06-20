# models.py
from django.db import models

class ContactMessage(models.Model):
    SUBJECT_CHOICES = [
        ('finance', 'Finance Consultant'),
        ('business', 'Business Consultant'),
        ('advice', 'Financial Advices'),
        ('growth', 'Business Growth'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200, choices=SUBJECT_CHOICES)
    message = models.TextField()
    subscribe = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
