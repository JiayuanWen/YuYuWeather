import React from "react";
import './search.css';
//import '@material/web/textfield/filled-text-field.js';

function Search() {
    const search_bar = (
        <div className="location-search">
            <search-bar className="location-search-bar">
                <input id="location-search-input" type="search" placeholder="Seach city name..." />
                {/*<md-filled-text-field label="Filled" value="Value"></md-filled-text-field>*/}
            </search-bar>
        </div>
    );

    return (
        <>
            {search_bar}
        </>
    );
    
}

export default Search;