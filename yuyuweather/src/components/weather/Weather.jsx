import React, {useState} from 'react';
import axios from 'axios';

import './weather.css'

function WeatherInfo() {
    // API source: https://openweathermap.org/
    //const url =

    // City/Town name
    const city_name = (
        <div className="city-name">
            <p>New York</p>
        </div>
    );

    // Temperature reading
    const temperature = (
        <div className="temperature">
            <h1>22</h1>
        </div>
    );

    // Weather description
    const weather = (
        <div className="weather-desc">
            <p>Cloud</p>
        </div>
    );



    // Final output //
    return (
        <div className="weather-info material-common" style={{zIndex:2}}>
            {city_name}
            {temperature}
            {weather}
        </div>
    );
}

export default WeatherInfo;