import React, { useState } from "react";

import settingsIcon from './settings.svg'

import './settings.css';

import { HuePicker } from "react-color";

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
        <div style={settings_visible ? settings_style_visible : settings_style_hide} className="settings-overlay">
            <div className="settings-menu">
                <div className="settings-title">Settings</div>

                {/*Color theme*/}
                <div className="settings-color">
                    <div>App color theme</div>
                    <HuePicker/>
                </div>

                {/*Measure unit*/}
                <div className="settings-unit">
                    <div>Display unit</div>
                    
                </div>

                {/*Site language*/}
                <div className="settings-language">
                    <div>Site language</div>
                    <div id="google_translate_element"></div>
                </div>

                {/*App version*/}
                <div className="app-version">
                    App Version: <span className="app-version-number">02021900.2024</span>
                </div>
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