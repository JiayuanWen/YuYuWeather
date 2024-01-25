import React from "react";
import './search.css'

function Search() {
    const search_bar = (
        <div className="location-search-bar">
            <input id="location-search-input" type="search" placeholder="London" />
        </div>
    );

    return (
        <div className="location-search">
            {search_bar}
        </div>
    );
    
}

export default Search;