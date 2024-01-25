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
            <h1 className="temperature-read">
                <span className="temperature-read-value">22</span><span className="temperature-unit"> °F</span>
            </h1>
            <div className="temperature-feel">
                <span>Feels like </span><span className="temperature-feel-value">25</span><span className="temperature-unit"> °F</span>
            </div>
        </div>
    );

    // Weather description/icon
    const weather_icon = (
        <div className="weather-desc">
            <h3>Cloud</h3>
        </div>
    );

    // Final output //
    return (
        <div className="weather-info material-common" style={{zIndex:2}}>
            {city_name}
            <div className="weather-info-sub">
                {weather_icon}
                {temperature}
            </div>  
        </div>
    );
}

export default WeatherInfo;