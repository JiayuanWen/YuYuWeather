import React from 'react';
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

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
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