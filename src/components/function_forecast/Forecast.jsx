import React, {useState} from "react";

import forecastIcon from './forecast.svg'

import './forecast.css'

export default function Forecast({color_mode}) {

    // Forecast icon
    const forecast_icon = (
        <div 
            className={`forecast-icon material-container${color_mode === "light" ? "" : "-dark"}`}
        >
            <md-ripple></md-ripple>
            <img 
                src={forecastIcon} 
                alt="Forecast icon" 
                className={`forecast-icon-logo icon-${color_mode === "light" ? "dark" : "light"}`}
            ></img>
        </div>
    );

    return (
        <>
            {forecast_icon}


        </>
    );
}