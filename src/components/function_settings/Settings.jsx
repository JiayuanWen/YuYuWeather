import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import settingsIcon from './settings.svg'

import { HuePicker } from "react-color";
import { brightnessCatagory } from "../misc_scripts/brightnessLevel";

import './settings.css';


const cookies = new Cookies();
const debug_output = false;

export default function Settings() {
    const [app_version, setAppVersion] = useState('020400.2024');
    const [settings_visible, setSettingsVisible] = useState(false);
    const [color, setColor] = useState(cookies.get('color') ? cookies.get('color') : '#008cff');

    console.log(color);

    // Color theme
    const setting_color = (
        <div className="settings-color">
                    <div className="settings-subtitle">Color theme</div>
                    <HuePicker
                        color={color}
                        onChangeComplete={(c) => {
                            // Change color hue slider state
                            setColor(c.hex);

                            // Apply color scheme to app
                            document.documentElement.style.setProperty('--color-primary',c.hex);

                            debug_output ? console.log("Current color scheme : "+cookies.get('color')) : void(0);
                        }}
                    />
        </div>
    );
    // Apply color scheme from cookie at app launch
    useEffect(() => {
        document.documentElement.style.setProperty('--color-primary', color);
    },[]);

    // Button text color
    const text_dark = {
        color: "black"
    }
    const text_light = {
        color: "white"
    }
    

    // Save button
    const saveSettings = () => {

        // Store color theme to cookie to remember
        cookies.set('color',color,{ path:'/'});


    }
    const setting_save = (
        <div className="settings-save">
            <md-ripple></md-ripple>
            <span 
                className="settings-save-text" 
                style={brightnessCatagory(color) === "bright" ? text_dark : text_light}
                onClick={saveSettings}
            >Save</span>
        </div>
    );

    // Reset button
    const resetSettings = () => {

        // Remove color cookie
        cookies.remove('color');
        // Reset color to default
        setColor('#008cff');

        
    }
    const setting_reset = (
        <div className="settings-reset">
            <md-ripple></md-ripple>
            <span 
                className="settings-reset-text"
                style={brightnessCatagory(color) === "bright" ? text_dark : text_light}
                onClick={resetSettings}
            >Reset settings</span>
        </div>
    );

    // App version
    const app_ver = (
        <div className="app-version">
            App Version: <span className="app-version-number">{app_version}</span>
        </div>
    );

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
        <div 
            style={settings_visible ? settings_style_visible : settings_style_hide} 
            className="settings-overlay"
        >
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

                {/*Buttons*/}
                {setting_save} {setting_reset}

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