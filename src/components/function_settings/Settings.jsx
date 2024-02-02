import React from "react";
import './settings.css';

export default function Settings() {

    const setting_icon = (
        <button className="settings-icon">
            <ion-icon name="settings"></ion-icon>
        </button>
    );

    const settings = (
        <div className="settings-menu">
            
        </div>
    );

    // Final output //
    return (
        <>
            {setting_icon}
        </>
    );

} 