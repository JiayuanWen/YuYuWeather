import React, { useState } from "react";

import settingsIcon from './settings.svg'

import './settings.css';

import { HuePicker } from "react-color";

export default function Settings() {
    const [app_version, setAppVersion] = useState('020301.2024');
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

    // Color theme
    const [color, setColor] = useState('#bbff00');
    const setting_color = (
        <div className="settings-color">
                    <div className="settings-subtitle">Color theme</div>
                    <HuePicker
                        color={color}
                        onChangeComplete={(c) => {setColor(c.hex)}}
                    />
        </div>
    );

    // App version
    const app_ver = (
        <div className="app-version">
            App Version: <span className="app-version-number">{app_version}</span>
        </div>
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
                {setting_color}

                {/*Measure unit*/}
                <div className="settings-unit">
                    <div className="settings-subtitle">Displayed unit</div>
                    
                </div>

                {/*Site language*/}
                <div className="settings-language">
                    <div className="settings-subtitle">Site language</div>
                    <div id="google_translate_element"></div>
                </div>

                {/*App version*/}
                {app_ver}
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