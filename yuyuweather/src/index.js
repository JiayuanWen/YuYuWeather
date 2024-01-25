// React essential
import React from 'react';
import ReactDOM from 'react-dom/client';

// Stylesheets
import './index.css';

// Components
// Material Web componenets (See: https://m3.material.io/develop/web)
import MaterialYou from './components/googleMaterial/MaterialYou';

// For debug use
import reportWebVitals from './reportWebVitals';

// Site components
//import App from './components/reactDefault/App';
import Background from './components/background/Background';
import WeatherInfo from './components/weather/Weather';


// Component rendering goes here
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*Ionicons import*/}
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    {/*Google Material You*/}
    <MaterialYou/>

    {/*Site background*/}
    <Background/>

    {/*Site contents*/}
    <WeatherInfo/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
