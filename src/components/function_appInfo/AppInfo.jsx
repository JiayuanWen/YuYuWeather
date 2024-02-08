import React, { useState } from "react";

import appInfoIcon from './info.svg';
import appInfoClose from '../function_settings/close.svg'
import githubLogo from './logo-github.svg'
import openNewTabIcon from './open-new-tab.svg'

import './appinfo.css';


export default function AppInfo({color_mode, app_version}) {


    // App info icon
    const [app_info_visible, setAppInfoVisible] = useState(false);
    const appInfoIconClick = (event) => {
        app_info_visible ?
        setAppInfoVisible(false)
        :
        setAppInfoVisible(true)

    }
    const info_icon = (
        <button 
            className={`app-info-icon icon${color_mode === "light" ? "-dark" : "-light"}`}
            onClick={function(e) {appInfoIconClick(e);}}
        >
            <img src={appInfoIcon} alt="App info icon"></img>
        </button>
    );

    // Close window
    const app_info_close = (
        <>
            <img 
                className={`app-info-close icon${color_mode === "light" ? "-dark" : "-light"}`}
                src={appInfoClose}
                alt="Close App Info window"
                onClick={function(e) {appInfoIconClick(e);}}
            />
        </>
    );

    // App Version
    const app_info_version = (
        <div 
            className={`app-info-version`}
        >
            App Version: <>{app_version}</>
        </div>
    );

    // Developer info
    const app_info_developer = (
        <div 
            className={`app-info-developer`}
        >
                    <div className="app-info-subtitle">Developed by</div>
                    <a 
                        className={`notranslate material-text${color_mode === "light" ? "-dark" : "-light"}`} 
                        href="https://github.com/JiayuanWen"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Jiayuan Wen
                    </a> 
                    
        </div>
    );

    // Powered by
    const app_info_powerby = (
        <div 
            className={`app-info-powerby`}
        >
                    <div className="app-info-subtitle">Powered by</div>
                    <a 
                        className={`notranslate material-text${color_mode === "light" ? "-dark" : "-light"}`} 
                        href="https://openweathermap.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        OpenWeatherMap.org
                    </a> 
                    
        </div>
    );

    // Visual design
    const app_info_visual = (
        <div 
            className={`app-info-visual`}
        >
                    <div className="app-info-subtitle">Visual design</div>
                    <a 
                        className={`notranslate material-text${color_mode === "light" ? "-dark" : "-light"}`} 
                        href="https://m3.material.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Google Material
                    </a> 
                    
        </div>
    );

    // Source code
    const app_info_source = (
        /*
        <div 
            className={`app-info-source`}
        >
                    <div className="app-info-subtitle">Source code</div>
                    <a 
                        className={`material-text${color_mode === "light" ? "-dark" : "-light"}`} 
                        href="https://github.com/JiayuanWen/YuYuWeather"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={githubLogo} 
                            className={`icon${color_mode === "light" ? "-dark" : "-light"}`}
                            alt="Github logo">
                        </img>
                    </a> 
                    
        </div>
        */
        <div 
        className={`app-info-source`}
    >
        <a 
            className={`material-text${color_mode === "light" ? "-dark" : "-light"}`} 
            href="https://github.com/JiayuanWen/YuYuWeather"
            target="_blank"
            rel="noopener noreferrer"
        >
            Source code <img 
                            src={openNewTabIcon} 
                            className={`icon${color_mode === "light" ? "-dark" : "-light"}`}
                            alt="Github logo">
                        </img>
        </a> 
                
    </div>
    );

    // Full credit
    const app_info_credit = (
        <div 
            className={`app-info-credit`}
        >
            <a 
                className={`material-text${color_mode === "light" ? "-dark" : "-light"}`} 
                href="https://github.com/JiayuanWen/YuYuWeather?tab=readme-ov-file#credits"
                target="_blank"
                rel="noopener noreferrer"
            >
                Full credit <img 
                                src={openNewTabIcon} 
                                className={`icon${color_mode === "light" ? "-dark" : "-light"}`}
                                alt="Github logo">
                            </img>
            </a> 
                    
        </div>
    );


    // App info window
    const app_info_style_visible = {
        opacity: "1",
        pointerEvents: "all"
    }
    const app_info_style_hide = {
        opacity: "0",
        pointerEvents: "none"
    }
    const info_window = (
        <div 
            style={app_info_visible ? app_info_style_visible : app_info_style_hide} 
            className={`app-info-overlay${color_mode === "light" ? "" : "-dark"}`}
        >
            <div 
                className={`app-info-window material-container${color_mode === "light" ? "":"-dark"} ${color_mode === "light" ? "material-text-dark" : "material-text-light"}`}
            >

                {/*Close window button*/}
                {app_info_close}

                <div className="app-info-title notranslate">YuYu Weather</div>
                <md-divider 
                    class={`app-info-title-divider material-text${color_mode === "light" ? "-dark":"-light"}`}
                    inset
                ></md-divider>

                {/*App version*/}
                {app_info_version}

                {/*Developer info*/}
                {app_info_developer}
                {/*Powered by*/}
                {app_info_powerby}
                {/*Visual design*/}
                {app_info_visual}
                {/*Source code*/} {/*Full credit*/}
                {app_info_source} {app_info_credit}

            </div>
        </div>
    );

    

    // Final output //
    return (
        <>

        {info_icon} 

        {info_window}

        </>
    );
}