const path = require('path')
const express = require('express')
const hbs = require('hbs')
const weather = require('./utils/weather')
const favicon = require('serve-favicon')

const app = express()

//Define Paths for Express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const faviconPath = path.join(__dirname, '../public/img/favicon.ico')

const cities = 'Denver' //[Sacremento, Denver, Austin, Miami, London, Marrakech, Cairo, Istanbul, Mumbai, Sydney]

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicPath))
app.use(favicon(faviconPath))

app.get('/favicon.ico', (req, res) => {
    res.sendFile(faviconPath)
})

app.get('', (req, res) => {
    if (!cities) {
        return res.send({error: 'City was not provided!'})
    }
    weather(cities, (error, {time, city, country, condition, temperature, wind, pressure, humidity}) => {
        if (error) {
            return res.send({ error })
        }
        res.render('index',{
            time,
            "location": {city, country},
            condition,
            temperature,
            wind,
            humidity,
            pressure
        })
    })
})

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})
