// React essential
import React from 'react';
import ReactDOM from 'react-dom/client';

// Stylesheets
import './index.css';

// Components
// Material Web componenets (See: https://m3.material.io/develop/web)
import MaterialYou from './components/style_googleMaterial/MaterialYou';

// For debug use
import reportWebVitals from './reportWebVitals';

// Site components
//import App from './components/reactDefault/App';
import Background from './components/style_background/Background';
import WeatherInfo from './components/function_weather/Weather';
import Settings from './components/function_settings/Settings';

// Component rendering goes here
function App() {
  return (
    <>

      {/*Google Material You*/}
      <MaterialYou/>

      {/*Site background*/}
      <Background/>

      {/*Site contents*/}
      <WeatherInfo/>
      <Settings/>

    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App/>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
