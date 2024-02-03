import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import settingsIcon from './settings.svg'

import './settings.css';

import { HuePicker } from "react-color";

const cookies = new Cookies();
const debug_output = true;

export default function Settings() {
    const [app_version, setAppVersion] = useState('020317.2024');
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
    const [color, setColor] = useState(cookies.get('color'));
    const setting_color = (
        <div className="settings-color">
                    <div className="settings-subtitle">Color theme</div>
                    <HuePicker
                        color={color}
                        onChangeComplete={(c) => {
                            // Change color hue slider state
                            setColor(c.hex);

                            // Store color to cookie to remember
                            cookies.set('color',c.hex,{ path:'/'});

                            // Apply color scheme to app
                            document.documentElement.style.setProperty('--color-primary',c.hex);

                            debug_output ? console.log("Current color scheme : "+cookies.get('color')) : void(0);
                        }}
                    />
        </div>
    );
    // Apply color scheme from cookie at app launch
    useEffect(() => {
        document.documentElement.style.setProperty('--color-primary',cookies.get('color'));
    },[]);

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