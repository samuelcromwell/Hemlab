# Generated by Django 5.0.6 on 2024-06-21 09:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0003_appointment'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ContactMessage',
            new_name='Contact',
        ),
    ]