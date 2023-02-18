from flask import Flask, render_template, request
import requests
app = Flask(__name__)

@app.route('/weather',methods=['GET','POST'])
def hello_world():
    CITY = 'Delhi'
    if request.method == 'POST':
        new_city = request.form.get('value')
        CITY=new_city
        print(CITY)
    API_KEY="637512c0e47523469e20ef76357f0eef"
    BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"
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
    return weather1

if __name__ == '__main__':
    app.run(debug=True)