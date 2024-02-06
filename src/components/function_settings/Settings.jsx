import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import settingsIcon from './settings.svg';
import settingsClose from './close.svg';

import { HuePicker } from "react-color";
import { delay } from "../misc_scripts/delay";
import { cookies } from "../misc_scripts/cookieHandle";

import './settings.css';


const debug_output = false;

export default function Settings({setColorMode, color_mode}) {
    const [app_version, setAppVersion] = useState('020610.2024');

    // Settings icon
    const [settings_visible, setSettingsVisible] = useState(false);
    const settingsIconClick = () => {
        settings_visible ?
            setSettingsVisible(false)
        :
            setSettingsVisible(true)

    }
    const setting_icon = (
        <button 
            className={`settings-icon icon${color_mode === "light" ? "-dark" : "-light"}`}
            onClick={function(e) {settingsIconClick(e);}}
        >
            <img src={settingsIcon} alt="settings-icon"></img>
        </button>
    );

    // Color theme
    const [color, setColor] = useState(cookies.get('color') ? cookies.get('color') : '#008cff');
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
    // Apply color from cookie (or default) at app launch
    useEffect(() => {
        document.documentElement.style.setProperty('--color-primary', color);
    },[]);

    // Site Color mode
    //const [color_mode, setColorMode] = useState(cookies.get('mode') ? cookies.get('mode') : 'light');
    const toLightMode = () => {
        setColorMode('light');
        document.documentElement.style.setProperty('--color-mode', color_mode);
        document.documentElement.style.setProperty('--bg-color-accent', '#fff');
    }
    const toDarkMode = () => {
        setColorMode('dark');
        document.documentElement.style.setProperty('--color-mode', color_mode);
        document.documentElement.style.setProperty('--bg-color-accent', '#000');
    }
    const setting_theme = (
        <div className="settings-mode">
            <div className="settings-subtitle">Color mode</div>
            <div className="settings-mode-options">
                <div 
                    className={`settings-mode-light material-button${color_mode === "light" ? "" : "-outline"}${color_mode === "light" ? "" : "-dark"} `}
                    onClick={toLightMode}
                >
                    <md-ripple></md-ripple>Light
                </div>
                <div 
                    className={`settings-mode-dark material-button${color_mode === "light" ? "-outline" : ""}${color_mode === "light" ? "" : "-dark"}`}
                    onClick={toDarkMode}
                >
                    <md-ripple></md-ripple>Dark
                </div>
            </div>
        </div>
    );
    // Apply color mode from cookie (or default) at app launch
    useEffect(() => {
        document.documentElement.style.setProperty('--color-mode', color_mode);

        color_mode === "light" ? 
            document.documentElement.style.setProperty('--bg-color-accent', '#fff')
        :
            document.documentElement.style.setProperty('--bg-color-accent', '#000')
 
    },[]);

    // Close window
    const setting_close = (
        <>
            <img 
                className={`settings-close ${color_mode === "light" ? "icon-dark" : "icon-light"}`}
                src={settingsClose}
                alt="Close Settings window"
                onClick={function(e) {settingsIconClick(e);}}
            />
        </>
    );

    // Site unit
    const [unit, setUnit] = useState(cookies.get('unit') ? cookies.get('unit') : 'Metric');
    const toImperial = () => {
        setUnit('Imperial');
        
    }
    const toMetric = () => {
        setUnit('Metric');
    }
    const setting_unit = (
        <div className="settings-unit">
            <div className="settings-subtitle">Displayed unit</div>
            <div className="settings-unit-options">
                <div 
                    className={`settings-unit-metric material-button${unit === "Metric" ? "" : "-outline"}${color_mode === "light" ? "" : "-dark"}`}
                    onClick={toMetric}
                >
                    <md-ripple></md-ripple>Metric
                </div>
                <div 
                    className={`settings-unit-imperial material-button${unit === "Metric" ? "-outline" : ""}${color_mode === "light" ? "" : "-dark"}`}
                    onClick={toImperial}
                >
                    <md-ripple></md-ripple>Imperial
                </div>
            </div>
        </div>
    );

    // Site language
    const setting_language = (
        <div className="settings-language">
            <div className="settings-subtitle">Site language</div>
            <div id="google_translate_element"></div>
        </div>
    );

    // Save button
    const [save_clicked, setSaveClicked] = useState(false);
    const saveSettings = async () => {

        // Store color theme as cookie 
        cookies.set('color',color,{ path:'/'});

        // Store prefered unit as cookie
        cookies.set('unit',unit,{ path:'/'});

        // Store color mode as cookie
        cookies.set('mode',color_mode,{ path:'/'});

        // Set save_clicked state to true so save indicator shows
        setSaveClicked(true);
        await delay(100);
        setSaveClicked(false);
        
    }
    const notice_show = {
        opacity: "1",
        transition: "0s"
    };
    const notice_hide = {
        opacity: "0",
        transition: "1s"
    };
    const setting_save = (
        <>
        <div className="settings-save-indicator settings-indicator" style={save_clicked ? notice_show : notice_hide}><ion-icon name="alert-circle-outline"></ion-icon> Settings saved. </div>
        <div 
            className={`settings-save material-button ${color_mode === "light" ? "" : "material-button-dark" }`}
        
        >
            <md-ripple></md-ripple>
            <span 
                className={`settings-save-text ${color_mode === "light" ? "" : "material-text-dark"}`}
                onClick={saveSettings}
            >Save</span>
        </div>
        </>
    );

    // Reset button
    const [reset_clicked, setResetClicked] = useState(false);
    const resetSettings = async () => {

        // Color
        // Remove color cookie and reset color to default (light blue #008cff)
        cookies.remove('color'); setColor('#008cff');
        // Apply default color
        document.documentElement.style.setProperty('--color-primary','#008cff');

        // Color mode
        // Remove color cookie and reset mode to default (light)
        cookies.remove('mode'); setColorMode('light');

        // Unit
        // Remove unit cookie and reset unit to default (Base on location)
        cookies.remove('unit'); setUnit('Metric');

        // Set reset_clicked state to true so reset indicator shows
        setResetClicked(true);
        await delay(100);
        setResetClicked(false);
    }
    const setting_reset = (
        <>
        <div 
            className="settings-reset-indicator settings-indicator" 
            style={reset_clicked ? notice_show : notice_hide}
        >
            <ion-icon name="alert-circle-outline"></ion-icon> Settings reset. 
        </div>
        <div 
            className={`settings-reset material-button ${color_mode === "light" ? "" : "material-button-dark" }`}
        >
            <md-ripple></md-ripple>
            <span 
                className={`settings-reset-text ${color_mode === "light" ? "" : "material-text-dark"}`}
                onClick={resetSettings}
            >Reset settings</span>
        </div>
        </>
    );

    // Settings disclaimer
    const setting_disclaimer = (
        <div 
            className={`settings-disclaimer`}
        >
            <ion-icon name="alert-circle-outline"></ion-icon> This app uses cookies to remember settings. Whitelist this app from cookie deletion plugins to ensure settings get saved.
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
        <div 
            style={settings_visible ? settings_style_visible : settings_style_hide} 
            className={`settings-overlay${color_mode === "light" ? "" : "-dark"}`}
        >
            <div 
                className={`settings-menu material-container${color_mode === "light" ? "":"-dark"} ${color_mode === "light" ? "material-text-dark" : "material-text-light"}`}
            >

                {/*Close window button*/}
                {setting_close}

                <div className="settings-title">Settings</div>

                {/*Color theme*/}
                {setting_color}

                {/*Measure unit*/}
                {setting_unit}

                {/*Site theme*/}
                {setting_theme}

                {/*Site language*/}
                {setting_language}

                {/*Buttons*/}
                {setting_save} {setting_reset}

                {/*Disclaimer*/}
                {setting_disclaimer}

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