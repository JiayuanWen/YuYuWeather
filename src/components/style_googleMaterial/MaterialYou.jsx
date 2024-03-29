import React from 'react';

import '@material/web/elevation/elevation'
import '@material/web/ripple/ripple'
import '@material/web/divider/divider'

import './material.css';

// Import of Material Web componenets place here



function MaterialYou() {
    // Fonts
    // Uses mainly 'Poppins' font, more detail here: https://fonts.google.com/specimen/Poppins
    const fonts = (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap" rel="stylesheet"></link>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round&display=swap" rel="stylesheet"/>
        </>
    );

    // Stylesheet 
    // NOTE: `import` statement above already worked, not needed & not used.
    const style = (
        <>
            <link rel="stylesheet" href="./material.css"></link>
        </>
    );


    // Rendering //
    return (
        <>
            {fonts}
            
        </>
    );
}

export default MaterialYou;