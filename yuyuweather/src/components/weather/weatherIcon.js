import React from "react";

// See full list of weather descriptions supported by OpenWeather: https://openweathermap.org/weather-conditions
//
// Icon sources:
// Ionicon: https://ionic.io/ionicons
// Google Material icons: https://fonts.google.com/icons?icon.platform=web

function weatherIcon(description) {
    switch(description) {
        case "Thunderstorm":
            return <ion-icon name="thunderstorm"></ion-icon>;
            break;
        case "Drizzle":
            return <ion-icon name="umbrella"></ion-icon>;
            break;
        case "Rain":
            return <ion-icon name="rainy"></ion-icon>;
            break;
        case "Snow":
            return <ion-icon name="snow"></ion-icon>;
            break;
        case "Clear":
            return <ion-icon name="sunny"></ion-icon>;
            break;
        case "Mist":
            return <span class="material-icons">foggy</span>;
            break;
        case "Fog":
            return <span class="material-icons">foggy</span>;
            break;
        case "Smoke":
            return <span class="material-icons">foggy</span>;
            break;
        case "Haze":
            return <span class="material-icons">foggy</span>;
            break;
        case "Dust":
            return <span class="material-icons">foggy</span>;
            break;
        case "Sand":
            return <span class="material-icons">foggy</span>;
            break;
        case "Squall":
            return <span class="material-icons">foggy</span>;
            break;
        case "Ash":
            return <span class="material-icons">volcano</span>;
            break;
        case "Clouds":
            return <ion-icon name="cloudy"></ion-icon>;
            break;
        default:
            //return <ion-icon name="help"></ion-icon>;
            return;
    }

    return;
}

export {weatherIcon};