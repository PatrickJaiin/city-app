from flask import Flask, render_template, request, jsonify
import requests
from flask_cors import CORS
import time
app = Flask(__name__)
CORS(app)
global CITY
CITY='Delhi'
@app.route('/weather',methods=['GET','POST'])
def hello_world():
    API_KEY="637512c0e47523469e20ef76357f0eef"
    BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"
    global CITY
    if request.method == 'POST':
        new_city = request.get_json(force=True)
        print(new_city)
        print(type(new_city))
        a=new_city['title']
        CITY=a
        print(CITY)

    if request.method == 'GET':
        time.sleep(0.01)
        URL = BASE_URL + "q=" + CITY + "&appid=" + API_KEY
        response = requests.get(URL)
        data = response.json()
        weather1={
            'city':CITY,
            'temperature':round(data['main']['temp']-273.15),
            'humidity':data['main']['humidity'],
            'description':data['weather'][0]['description'],
            'icon':data['weather'][0]['icon']
        }
        print(weather1)
        return weather1
    return 'Hello, World!'
if __name__ == '__main__':
    app.run(debug=True)