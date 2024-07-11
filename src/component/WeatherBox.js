import React from 'react'

const WeatherBox = ({ weather }) => {
    

    return (
        <div className='weather-box'>
            <div>{weather?.name}</div>
            <h2>{Math.ceil(weather?.main.temp)}도 / {Math.ceil(1.8 * (weather?.main.temp) + 32)}화씨</h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    )
}

export default WeatherBox