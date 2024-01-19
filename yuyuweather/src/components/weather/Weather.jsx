import React, {useState} from 'react';
import axios from 'axios';
import { openweather_url } from './api';
import './weather.css'

function WeatherInfo() {
    // API source: https://openweathermap.org/
    const url = openweather_url;

    // City/Town name
    const city_name = (
        <div className="city-name">
            <p>New York</p>
        </div>
    );

    // Temperature reading
    const temperature = (
        <div className="temperature">
            <h1>
                <span className="temperature-read">22</span><span className="temperature-unit"> °F</span>
            </h1>
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
            <div className="weather-info-sub">
                {weather}
                {temperature}
            </div>  
        </div>
    );
}

export default WeatherInfo;