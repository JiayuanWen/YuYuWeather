import React, { useState } from "react";

import settingsIcon from './settings.svg'

import './settings.css';

export default function Settings() {
    const [settings_visible, setSettingsVisible] = useState(false);

    // Settings icon
    const settingsIconClick = (event) => {
        settings_visible ?
            setSettingsVisible(false)
        :
            setSettingsVisible(true)

    }
    const setting_icon = (
        <button className="settings-icon" onClick={function(e) {settingsIconClick(e);}}>
            <img src={settingsIcon} alt="settings-icon"></img>
        </button>
    );
    
    // Settings menu
    const settings_style_visible = {
        opacity: "1",
        pointerEvents: "all"
    }
    const settings_style_hide = {
        opacity: "0",
        pointerEvents: "none"
    }
    const settings = (
        settings_visible ?
            <div style={settings_style_visible} className="settings-overlay">
                <div className="settings-menu">
                
                </div>
            </div>
        :
            <div style={settings_style_hide} className="settings-overlay">
                <div className="settings-menu">
                
                </div>
            </div>
    );

    // Final output //
    return (
        <>
            {setting_icon}

            {settings}
        </>
    );

} 