import React from 'react'
import './WeatherBox.css';

const WeatherBox = ({ weather, icon }) => {

    return (
        <div className='weather-box'>
            <div className='weather-container'>
                <div>{weather?.name}</div>
                <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
                <h1>{Math.ceil(weather?.main.temp)}°C / {Math.ceil(1.8 * (weather?.main.temp) + 32)}°F</h1>
                <h2>{weather?.weather[0].description}</h2>
                <h3>최고:{Math.ceil(weather?.main.temp_max)}° 최저:{Math.floor(weather?.main.temp_min)}°</h3>
            </div>
        </div>
    )
}

export default WeatherBox