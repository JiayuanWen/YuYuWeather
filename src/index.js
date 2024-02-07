// React essential
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Stylesheets
import './index.css';

// Modules
// Material Web componenets (See: https://m3.material.io/develop/web)
import MaterialYou from './components/style_googleMaterial/MaterialYou';
import { cookies } from './components/misc_scripts/cookieHandle';

// For debug use
import reportWebVitals from './reportWebVitals';

// Site components
//import App from './components/reactDefault/App';
import Background from './components/style_background/Background';
import WeatherInfo from './components/function_weather/Weather';
import Settings from './components/function_settings/Settings';
import AppInfo from './components/function_appInfo/AppInfo';

// Component rendering goes here
function App() {
  // Global states
  // See https://dev.to/andydziabo/how-to-pass-data-between-sibling-components-in-react-2cjg
  const [color_mode, setColorMode] = useState(cookies.get('mode') ? cookies.get('mode') : 'light');
  const [unit, setUnit] = useState(cookies.get('unit') ? cookies.get('unit') : 'imperial');
  const [app_version, setAppVersion] = useState('020715.2024'); 

  // Render
  return (
    <>

      {/*Google Material You*/}
      <MaterialYou/>

      {/*Site background*/}
      <Background/>

      {/*Site contents*/}
      <WeatherInfo color_mode={color_mode} unit={unit}/>
      <Settings setColorMode={setColorMode} color_mode={color_mode} setUnit={setUnit} unit={unit} app_version={app_version}/>
      <AppInfo color_mode={color_mode} app_version={app_version}/>

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
