# Generated by Django 4.1.4 on 2023-01-01 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='information',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('gender', models.CharField(max_length=200)),
                ('fathername', models.CharField(max_length=350)),
                ('mothername', models.CharField(max_length=350)),
            ],
        ),
    ]