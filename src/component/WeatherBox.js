import React from 'react'

const WeatherBox = ({ weather }) => {
    

    return (
        <div className='weather-box'>
            <div className='d-flex flex-column justify-content-center text-center'>
                <div>{weather?.name}</div>
                <h1>{Math.ceil(weather?.main.temp)}°C / {Math.ceil(1.8 * (weather?.main.temp) + 32)}°F</h1>
                <h2>{weather?.weather[0].description}</h2>
                <h3>최고:{Math.ceil(weather?.main.temp_max)}° 최저:{Math.floor(weather?.main.temp_min)}°</h3>
            </div>
        </div>
    )
}

export default WeatherBox