import React, {createElement, useState} from 'react';
import axios from 'axios';
import { openweather_url } from './api';
import './weather.css';
import { weatherIcon } from './weatherIcon';

const debug_output = true;

function WeatherInfo() {
    const [weather_data, setWeatherData] = useState({});
    const [location, setLocation] = useState('');
    const [search_button_state, setSearchButtonState] = useState('false');

    // API source: https://openweathermap.org/
    const url = openweather_url(location);
    //debug_output ? console.log("OpenWeather URL:"+url) : void(0);

    // Location search bar & handle
    const searchLocation = (event) => {
        debug_output ? console.log("Searching weather info from location...") : void(0);
        
        // Some user may execute this function by pressing the search icon, we make sure the function
        // don't check for key press (event.key) since there is none. 

        // Since this function executes on every key the user presses (onKeyPress in <input/>),
        // we only truly execute this if user pressed the enter key.
        if (!event) {
            void(0);
            debug_output ? console.log("Searching weather info from location...") : void(0);
        }
        else if (event.key === "Enter") {
            void(0);
        }
        else {
            return null;
        }

        axios.get(url)
            // Get responses fron OpenWeather URL with location set
            .then((response) => {
                setWeatherData(response.data)
                debug_output ? console.log("OpenWeather URL:"+url) : void(0);
                debug_output ? (() => {console.log(`OpenWeather Response:`);console.log(response.data)})() : void(0);
            })
            // In case OpenWeather respond with error 400 or 404
            .catch((error) => {
                setWeatherData({})
            })
    }
    const search_bar = (
        <div className="location-search">
            <search-bar class="location-search-bar">
                <input 
                    id="location-search-input" 
                    type="text" 
                    placeholder="Enter city name..." 
                    value={location}
                    // Set location first, this will then modify the location query/parameter in OpenWeather URL
                    onChange={(event) => {
                        setLocation(event.target.value); 
                        debug_output ? console.log(event.target.value) : void(0);
                    }} 
                    // Use the modified OpenWeather URL to get data
                    onKeyPress={searchLocation} 
                />
                <span onClick={function(e) {searchLocation();}} id="search-icon" class="material-icons">search</span>
            </search-bar>
        </div>
    );
    

    // City/Town name
    const city_name = (
        <div className="city-name">
            {weather_data.main ? <p>{weather_data.name}</p> : <p></p>}
            
        </div>
    );

    // Temperature reading
    const temperature = (
        weather_data.main ? 
            <div className="temperature">
                <h1 className="temperature-read">
                    <span className="temperature-read-value">{Math.round(weather_data.main.temp)}</span><span className="temperature-unit"> °F</span>
                </h1>
                
            </div>
        :
            <div className="temperature">
                <h1 className="temperature-read">
                    {/*<span className="temperature-read-value"></span><span className="temperature-unit"> °F</span>*/}
                </h1>
            </div>
    );
    // Weather description/icon
    if (weather_data.weather) {
        debug_output ? console.log(weatherIcon(weather_data.weather[0].main)) : void(0);
    }
    const weather_icon = (
        weather_data.weather ?
            <div className="weather-desc">
                {/*Weather description is stored in an element of the array[size 1] named `weather`, so we have `[0]`*/}
                <span>{weatherIcon(weather_data.weather[0].main)}</span>
            </div>
        :
            <div className="weather-desc">
                <span>{weatherIcon("None")}</span>
            </div>
    );

    // Other weather readings
    const info_extra = (
        weather_data.main ?
            <div className="weather-info-extra material-common" style={{zIndex:2}}>
                <div className="temperature-feel">
                    
                    <span className="weather-info-extra-value">{Math.round(weather_data.main.feels_like)} <span className="temperature-unit"> °F</span></span>
                    <div>Feels like </div>
                </div>
                <div className="wind">
                     
                    <span className="weather-info-extra-value">{weather_data.wind.speed}  <span className="wind-unit"> m/s</span></span>
                    <div>Wind</div>
                </div>
                <div className="gust">
                    
                    <span className="weather-info-extra-value">{weather_data.wind.gust}  <span className="wind-unit"> m/s</span></span>
                    <div>Gust</div> 
                </div>
                <div className="humidity">
                    
                    <span className="weather-info-extra-value">{weather_data.main.humidity} %</span>
                    <div>Humidity</div>
                </div>
                <div className="pressure">
                    
                    <span className="weather-info-extra-value">{weather_data.main.pressure} hPa</span>
                    <div>Pressure</div>
                </div>
            </div>
        :
            <>
            </>

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

        
        {info_extra}
        

        </>
    );
}

export default WeatherInfo;