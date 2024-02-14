// Essentials
import React, {useEffect, useState} from "react";
import axios from 'axios';

// Images
import forecastIcon from './forecast.svg'
import closeIcon from '../function_settings/close.svg'

// Functions
import { openweather_api } from "../function_weather/api";
import { dataExtraction } from "./dateExtraction";

// Stylesheets
import './forecast.css'

const debug_output = true;

export default function Forecast({color_mode, unit, location, setLocation}) {
    const [windowVisible, setWindowVisible] = useState(false);
    const [forecastData, setForecastData] = useState({});

    // Get Forecast info
    // Weather data & API source: https://openweathermap.org/
    const getForecastData = (event, this_location) => {

        // Determine which location and unit variable to use
        var url;
        if (this_location) { // If coming from setInterval, in which case location and unit will be blank, use passed variables this_* instead.
            console.log("App: Current location is "+this_location);
            url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${openweather_api()}&units=${unit}`;
        } else { // If coming from app function calls itself, in which case location and unit will be intact, use those as normal.
            console.log("App: Current location is "+location);
            url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${openweather_api()}&units=${unit}`;
        }

        axios.get(url)
            // Get responses fron OpenWeather URL with location set
            .then((response) => {
                debug_output ? console.log("OpenWeather URL:"+url) : void(0);
                debug_output ? (() => {console.log(`OpenWeather Response:`);console.log(response.data);console.log("")})() : void(0);

                setForecastData(response.data);
            })
            // In case OpenWeather respond with error
            .catch((error) => {
                debug_output ? (() => {console.log(`OpenWeather error: ${error.message}`);console.log("")})() : void(0);

                setForecastData({});
            })

    }
    // Refresh forecast data whenever location or unit changed.
    useEffect((e) => {
        getForecastData(e);
    },[location, unit]);

    // Forecast icon
    const icon_show = {
        opacity: "1"
    }
    const icon_hide = {

    }
    const forecast_icon = (
        <div 
            className={`forecast-icon material-container${color_mode === "light" ? "" : "-dark"}`}
            style={windowVisible ? icon_hide : icon_show}
            onClick={() => setWindowVisible(true)}
        >
            <md-ripple></md-ripple>
            <img 
                src={forecastIcon} 
                alt="Forecast icon" 
                className={`forecast-icon-logo icon${color_mode === "light" ? "-dark" : "-light"}`}
            ></img>
        </div>
    );

    // Forecast data
    const forecast_list = (
        forecastData.list ?

            forecastData.list.map((item) => {
                console.log(item)
                return <div
                    className={`forecast-entry material-text${color_mode === "light" ? "-dark" : "-light"} ${item.dt_txt}`}
                    key={item.dt_txt}
                >
    
                </div>
            })

        :
            void(0)
    )
    const forecasts = (
        <div 
            className={`forecast-container material-text${color_mode === "light" ? "-dark" : "-light"}`}
        >
            {forecast_list}
        </div>
    )

    // Forecast window
    const window_show = {
        
    }
    const window_hide = {
        height: '0px',
        width: '0px',

        opacity: '0',

        pointerEvents: 'none'
    }
    const forecast_window = (
        <div
            className={`forecast-window material-container${color_mode === "light" ? "" : "-dark"} material-text${color_mode === "light" ? "-dark" : "-light"}`}
            style={windowVisible ? window_show : window_hide} 
        >
            {/*Forecast data*/}
            {forecasts}

            {/*Close button*/}
            <img
                className={`forecast-close icon${color_mode === "light" ? "-dark" : "-light"}`}
                src={closeIcon}
                alt="Close forecast button"
                onClick={() => setWindowVisible(false)}
            >
            </img>
        </div>
    );

    return (
        <>
            {forecast_icon}

            {forecast_window}
        </>
    );
}