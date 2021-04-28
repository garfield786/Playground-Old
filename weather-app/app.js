const weather = require('./web/src/utils/weather')
const city = process.argv[2]

if (!city) {
    return console.log('Please enter the city')
}

weather(city, (error, {city, country, temp, pressure, humidity}) => {
    if (error) {
        return console.log('Error', error)
    }

    else {
        console.log('City/Country:', city, country)
        console.log('Temperature:', temp)
        console.log('Pressure:', pressure)
        console.log('Humidity:', humidity)
    }
})