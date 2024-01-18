// React essential
import React from 'react';
import ReactDOM from 'react-dom/client';

// Stylesheets
import './index.css';

// Components
//import App from './components/reactDefault/App';
import Background from './components/background/Background';
import WeatherInfo from './components/weather/Weather';

// Material Web componenets (See: https://m3.material.io/develop/web)


// For debug use
import reportWebVitals from './reportWebVitals';


// Component rendering goes here
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background/>
    <WeatherInfo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
