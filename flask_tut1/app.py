# -*- coding: utf-8 -*-
"""
Created on Mon Jun 05 13:41:24 2017

@author: ADASNURK
"""

from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route('/hello')
def hello():
    return "Hello World"
 
# @app.route("/", methods=['GET', 'POST'])
# def home():
#     if request.method == 'POST':
#         x = int(request.form.get('first'))
#         y = int(request.form.get('second'))
#         add_one= x + y
#         total = {'total': str(add_one)}
#         return jsonify(total)
#     return render_template('index.html', string="ADITYA") 
    
 
@app.route("/", methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        x = request.form.get('first')
        y = request.form.get('second')
        # api call
        url = 'https://api.github.com/search/users?q=location:{0}+language:{1}'.format(x, y)
        response_dict = requests.get(url).json()
        return jsonify(response_dict)
    return render_template('index.html') 
 
if __name__ == "__main__":
  app.run(debug=True)