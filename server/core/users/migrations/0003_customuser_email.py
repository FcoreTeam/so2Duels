# Generated by Django 5.0.3 on 2024-06-09 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_remove_customuser_api_id_remove_customuser_email_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
    ]