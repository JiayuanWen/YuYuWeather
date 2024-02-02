import React from "react";
import './noConnection.css';
import wifiOffLogo from './wifi_off.svg';


function NoConnectionPrompt({status}) { // Component with parameters. See https://react.dev/learn/conditional-rendering
    console.log(status)
    if (status.indexOf("Network Error") !== -1 || status.indexOf("Network error") !== -1) {
        return (
            <div className="no-connection-prompt">
                <img className="no-connection-prompt-icon" src={wifiOffLogo} alt="no-wifi"/>
                <div className="no-connection-prompt-text">Network issue<br/>Check your connection</div>
            </div>
        );
    }
    return <></>;
}

export default NoConnectionPrompt;