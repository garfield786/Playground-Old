const request = require('postman-request')

const weather = (city, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?appid=aad3676e75b8b052285b8b4fe88287fb&units=imperial&q=' + city

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to get data', undefined)
        }
        else {
            callback(undefined, {
                condition: {
                    main: body.weather[0].main,
                    description: body.weather[0].description,
                    icon: body.weather[0].icon
                },
                temperature: {
                    current: body.main.temp,
                    max: body.main.temp_max,
                    min: body.main.temp_min
                },
                wind: body.wind.speed,
                pressure: body.main.pressure,
                humidity: body.main.humidity,
                country: body.sys.country,
                city: body.name,
                time: body.dt
            })
        }
    })
}

module.exports = weather