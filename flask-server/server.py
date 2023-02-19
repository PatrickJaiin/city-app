from flask import Flask, render_template, request, jsonify
import requests
from flask_cors import CORS
import time
from geopy.geocoders import Nominatim
app = Flask(__name__)
CORS(app)
global CITY
CITY='Delhi'

@app.route('/map',methods=['GET','POST'])
def map():
    API_KEY_MAP="3fe14d787681486290ff5495df61040c"
    URLMAP='https://maps.geoapify.com/v1/staticmap?style=osm-liberty&width=400&height=600'
    global CITY
    loc = Nominatim(user_agent="GetLoc")
    getLoc = loc.geocode(CITY)
    lat = getLoc.latitude
    long = getLoc.longitude
    print(lat,long)
    URL=URLMAP+'&center=lonlat:'+str(long)+','+str(lat)+'&zoom=12&apiKey='+API_KEY_MAP
    print(URL)
    return {'address':URL}

    # q={city name},{state code},{country code}&limit={limit}&appid={API key}'

@app.route('/weather',methods=['GET','POST'])
def hello_world():
    API_KEY_WEATHER="637512c0e47523469e20ef76357f0eef"
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
        URL = BASE_URL + "q=" + CITY + "&appid=" + API_KEY_WEATHER
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