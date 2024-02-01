import React from "react";
import './noConnection.css';


function NoConnectionPrompt({status}) { // Component with parameters. See https://react.dev/learn/conditional-rendering
    if (status === 'Network Error') {
        return (
            <div className="no-connection-prompt">
                <span class="material-icons-round no-connection-prompt-icon">signal_wifi_statusbar_connected_no_internet_4</span>
                <div className="no-connection-prompt-text">Network issue<br/>Check your connection</div>
            </div>
        );
    }
    return <></>;
}

export default NoConnectionPrompt;