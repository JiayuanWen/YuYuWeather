import React from "react";

function weatherIcon(description) {
    switch(description) {
        case "Thunderstorm":
            return <ion-icon name="thunderstorm"></ion-icon>;
            break;
        case "Clouds":
            return <ion-icon name="cloudy"></ion-icon>;
            break;
        default:
            //return <ion-icon name="help"></ion-icon>;
            return;
    }
}

export {weatherIcon};