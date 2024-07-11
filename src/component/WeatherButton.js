import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, variants, selectedCity, handleCityChange }) => {


    return (
        <div>
            <Button variant={`${selectedCity == null ? "outline-secondary" : "secondary"}`} onClick={() => handleCityChange("current")}>Current Location</Button>

            {cities.map((city, index) => {
                return (<Button key={city} variant={`${selectedCity == city ? `outline-${variants[index]}` : variants[index]}`} onClick={() => handleCityChange(city)}>{city}</Button>)
            })}
        </div>
    )
}

export default WeatherButton