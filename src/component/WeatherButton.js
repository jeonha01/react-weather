import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, variants }) => {
    console.log(cities)
    console.log(variants)

    return (
        <div>
            <Button variant="secondary">Current Location</Button>
            {/* <Button variant="primary">Paris</Button>
            <Button variant="danger">München</Button>
            <Button variant="light">London</Button>
            <Button variant="warning">Madrid</Button> */}
            {cities.map((item, index) => {
                return (<Button key={item} variant={variants[index]}>{item}</Button>)
            })}
        </div>
    )
}

export default WeatherButton