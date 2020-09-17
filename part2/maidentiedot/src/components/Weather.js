import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState([])
    const key = process.env.REACT_APP_API_KEY
    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${key}&query=${capital}&units=m`)
            .then(response => {
                setWeather(response.data)
            }).catch(error => {
                console.log('error', error)
                return null
            })
        // eslint-disable-next-line
    }, [])

    if (weather.length !== 0) {
        console.log(weather.current)
        return (
            <div>
                <h2>Weather in {capital}</h2>
                <p><strong>temperature: </strong>{weather.current.temperature} Celsius</p>
                <img src={weather.current.weather_icons} alt='weather icon'></img>
                <p><strong>wind: </strong>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
            </div>
        )
    } else {
        return (
            <p>loading...</p>
        )
    }
}

export default Weather