import React from "react";
import './settings.css';

export default function Settings() {

    const setting_icon = (
        <button className="settings-icon">
            <ion-icon name="settings"></ion-icon>
        </button>
    );
    return (
        <>
            {setting_icon}
        </>
    );

} 