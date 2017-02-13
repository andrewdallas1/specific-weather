var express = require('express');
var router = express.Router();
var axios = require('axios');

require('dotenv').config();

/* GET users listing. */
router.get('/', (req, res, next) => {
  axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=' + `${process.env.GEO_API}`)
  .then((geoRes) => {
    res.locals.lat = geoRes.data.location.lat,
    res.locals.long = geoRes.data.location.lng
  }).then(() => {
    return next();
  })
})



router.get('/', (req, res, next) => {
  axios.get('https://api.darksky.net/forecast/' + `${process.env.API_KEY}` + '/' + `${res.locals.lat}` + ',' + `${res.locals.long}`)
  .then((weatherResults) => {
    res.render('user/weather', {
     summary: weatherResults.data.minutely.summary,
     temp: weatherResults.data.currently.temperature,
     icon: weatherResults.data.currently.icon,
     city: weatherResults.data.timezone
    })
  }).catch((err) => {console.log(err)})
});



module.exports = router;
