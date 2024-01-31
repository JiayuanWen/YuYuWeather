import React from "react";
import './invalidQuery.css';

function InvalidQueryPrompt({status}) { // Component with parameters. See https://react.dev/learn/conditional-rendering
    if (status === 404) {
        return (
            <div className="invalid-query-prompt">
                <span class="material-icons-round invalid-query-prompt-icon">landscape</span>
                <div className="invalid-query-prompt-text">Cannot find desired location<br/></div>
            </div>
        );
    }
    if (status === 400) {
        return (
            <div className="invalid-query-prompt">
                <span class="material-icons-round invalid-query-prompt-icon">landscape</span>
                <div className="invalid-query-prompt-text">Please enter a location name<br/></div>
            </div>
        );
    }
    return <></>;
}

export default InvalidQueryPrompt;