import React, {useState} from 'react';
import axios from 'axios';
import { openweather_url } from './api';
import './weather.css'

function WeatherInfo() {
    const [weather_data, setWweatherData] = useState({});
    const [location, setLocation] = useState('');

    // API source: https://openweathermap.org/
    // 
    const url = openweather_url(location);
    console.log(weather_data);

    // Location search bar & handle
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url)
            // Get responses fron OpenWeather URL with location set
            .then((response) => {
                setWweatherData(response.data)
                console.log(response.data)
            })
            // In case it returns nothing
            .catch((error) => {
                setWweatherData({})
            })
        }
    }
    const search_bar = (
        <div className="location-search">
            <search-bar className="location-search-bar">
                <input 
                    id="location-search-input" 
                    type="text" 
                    placeholder="Enter city name..." 
                    value={location}
                    onChange={event => setLocation(event.target.value)} // Set location first, this will also modify the location query/parameter in OpenWeather URL
                    onKeyPress={searchLocation} // Use the modified OpenWeather URL to get data
                />
                {/*<md-filled-text-field label="Filled" value="Value"></md-filled-text-field>*/}
            </search-bar>
        </div>
    );
    

    // City/Town name
    const city_name = (
        <div className="city-name">
            {weather_data.main ? <p>{weather_data.name}</p> : <p>...</p>}
            
        </div>
    );

    // Temperature reading
    const temperature = (
        weather_data.main ? 
            <div className="temperature">
                <h1 className="temperature-read">
                    <span className="temperature-read-value">{Math.round(weather_data.main.temp)}</span><span className="temperature-unit"> °F</span>
                </h1>
                <div className="temperature-feel">
                    <span>Feels like </span><span className="temperature-feel-value">{Math.round(weather_data.main.feels_like)}</span><span className="temperature-unit"> °F</span>
                </div>
            </div>
        :
            <div className="temperature">
                <h1 className="temperature-read">
                    <span className="temperature-read-value">--</span><span className="temperature-unit"> °F</span>
                </h1>
                <div className="temperature-feel">
                    <span></span>
                </div>
            </div>
    );

    // Weather description/icon
    const weather_icon = (
        weather_data.main ?
            <div className="weather-desc">
                <h3>{weather_data.weather.main}</h3>
            </div>
        :
            <div className="weather-desc">
                <h3></h3>
            </div>
    );

    // Final output //
    return (
        <>
        
        {search_bar}

        <div className="weather-info material-common" style={{zIndex:2}}>
            {city_name}
            <div className="weather-info-sub">
                {weather_icon}
                {temperature}
            </div>  
        </div>

        </>
    );
}

export default WeatherInfo;