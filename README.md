#Specific Weather
##A geolocation based weather application

Specific Weather is simple weather app which uses googles geolocation services and dark sky's weather api to get real time temperature and weather description. Built on express.js, Specific Weather uses two apis to first get location and then get that location's forecast.

###Technologies used
* Express.js
* HTML
* CSS

###Installation
1. Clone this repository`$ git clone https://github.com/andrewdallas1/specific-weather.git`
2. Install dependencies `$ npm install`
3. You will need your own dark sky and google geolocation api keys found here: [Dark Sky](https://darksky.net/dev/) [Google geolocation](https://developers.google.com/maps/documentation/geolocation/intro) Note that you will need to create a .env file and include your api keys in environment variables like this `API_KEY = "Your Dark Sky Key"` and `GEO_API = "Your Google Geolocation Key`
4. Run `$ npm run dev` and visit http://localhost:3000
5. That's it! You are up and running


###Challenges

The biggest challenge for this project was getting the information from the first api to be used in the call to second. I implemented `res.locals` variables to solve this challenge like so:
```javascript```
router.get('/', (req, res, next) => {
  axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=' + `${process.env.GEO_API}`)
  .then((geoRes) => {
    res.locals.lat = geoRes.data.location.lat,
    res.locals.long = geoRes.data.location.lng
  }).then(() => {
    return next();
  })
})
```
As you can see, I am using the axios node package to make the api request and the promise structure that axios provides to create the longitude and latitude variables.

####Authored by: Andrew Dallas



