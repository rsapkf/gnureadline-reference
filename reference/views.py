import os
import csv
from django.shortcuts import render
from django.template.defaulttags import register

# Django custom Filter
@register.filter
def get_item(dictionary, key):
    return dictionary.get(key)

current_directory = os.path.dirname(os.path.abspath(__file__))
vi_data_file = current_directory + '/static/reference/data_vi_mode.csv'
emacs_data_file = current_directory + '/static/reference/data_emacs_mode.csv'

vi_categories = {}
emacs_categories = {}

# Vi Mode Data
with open(vi_data_file, 'r') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=',')
    
    for line in reader:
        if line['category'] in vi_categories:
            vi_categories[line['category']] += [[line['command'], line['description']]]
        else:
            vi_categories[line['category']] = [[line['command'], line['description']]]

# Emacs Mode Data
with open(emacs_data_file, 'r') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=',')
    
    for line in reader:
        if line['category'] in emacs_categories:
            emacs_categories[line['category']] += [[line['command'], line['description']]]
        else:
            emacs_categories[line['category']] = [[line['command'], line['description']]]

# Create your views here.
def index(request):

    context = {
        'vi_categories': vi_categories,
        'emacs_categories': emacs_categories,
    }

    return render(request, 'index.html', context=context)