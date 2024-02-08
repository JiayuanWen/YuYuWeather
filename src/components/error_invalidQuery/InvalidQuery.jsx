import React from "react";

import earthSearchIcon from './earth_search.svg';
import earthNoIcon from './earth_no.svg';

import './invalidQuery.css';

function InvalidQueryPrompt({status, color_mode}) { // Component with parameters. See https://react.dev/learn/conditional-rendering
    if (String(status).indexOf("404") !== -1) {
        return (
            <div 
                className={`invalid-query-prompt material-container${color_mode === "light" ? "":"-dark"} material-text${color_mode === "light" ? "-dark-pure":"-light"}`}
            >
                {/*<span class="material-icons-round invalid-query-prompt-icon notranslate">landscape</span>*/}
                <img src={earthNoIcon} alt="Earth off icon" className={`invalid-query-prompt-icon icon-${color_mode === "light" ? "dark" : "light"}`}></img>
                <div className="invalid-query-prompt-text">Cannot find desired location<br/></div>
            </div>
        );
    }
    if (String(status).indexOf("400") !== -1) {
        return (
            <div 
                className={`invalid-query-prompt material-container${color_mode === "light" ? "":"-dark"} material-text${color_mode === "light" ? "-dark-pure":"-light"}`}
            >
                {/*<span class="material-icons-round invalid-query-prompt-icon notranslate">landscape</span>*/}
                <img src={earthSearchIcon} alt="Earth off icon" className={`invalid-query-prompt-icon icon-${color_mode === "light" ? "dark" : "light"}`}></img>
                <div className="invalid-query-prompt-text">Please enter a location name<br/></div>
            </div>
        );
    }
    return <></>;
}

export default InvalidQueryPrompt;