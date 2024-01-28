# YuYu Weather
A simple weather app built with React and Axios

## Run the project
<details>
<summary>Project execution instruction</summary>
1. Be sure you have `nodejs` and `git` installed on your system.
2. If you are on Linux, open the terminal; If you are on Windows, open either command prompt (cmd) or PowerShell. 
3. Use the `cd` command to navigate to a location of your choice:
    ``` bash
    # Linux
    cd /path/to/location/of/choice

    # Windows
    cd "C:\path\to\location\of\choice\"

    ```
4. Clone this repository with this command:
    ``` bash
    git clone https://github.com/JiayuanWen/YuYuWeather.git
    ```
5. Go inside the app folder:
    ``` bash
    # Linux
    cd ./YuYuWeather/yuyuweather/

    # Windows
    cd .\YuYuWeather\yuyuweather\
    ```
6. Install dependencies:
    ``` bash
    npm install
    ```
7. On a internet browser, go to https://openweathermap.org/, and register for an account.
8. Go to https://openweathermap.org/api, click *Subscribe* for **Current Weather Data**, then choose Free tier.
9. Follow any additional steps on-screen. You should then be able to see your API key at https://home.openweathermap.org/api_keys.
10. Back to your terminal, use a text editor of your choice (`vim`,`nano`,`kim`, etc...) to add a `api.js` file:
    ``` bash
    sudo <text-editor> ./src/components/weather/api.js
    ```
11. Copy this script into `api.js`:
    ``` javascript
    const openweather_url = (location) => {
    const temp_unit = '&units=imperial';

        return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=(API)${temp_unit}`
    }
    
    export {openweather_url};

    ```
12. For the URL, replace `(API)` after `appid=` with the API key you got from https://home.openweathermap.org/api_keys. Your final URL should look something like this:
    ```
    https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=xxxxxxxxxxxxxxxxxxxxxx${temp_unit}
    ```
13. Save the file after making your changes. On your terminal, run the following command to start the project:
    ``` bash
    npm start
    ```
14. The app should start with your default browser after a while. If not, on your browser, type in `localhost:3000` for URL.
    >[!Note]
    >
    > Your port may differ if you changed it following the *For devs* section.

</details>

## For devs
### To change port

1. Open `package.json` inside `yuyuweather`.
2. Locate the following line:
    ``` json
    "start": "react-scripts start"
    ```
    Change it to:
    ``` json
    # For Linux & MacOS
    "start": "PORT=desire_port react-scripts start"

    # For Windows
    "start": "set PORT=desire_port && react-scripts start"
    ```
    And replace `desire_port` to your desire port number.

## Credits
### Modules used
* [React.js](https://react.dev/)
* [Axios](https://axios-http.com/)

### Data/API source
* Weather data obtained from [Open Weather Map](https://openweathermap.org/)

### Visual/Design
* App visual style mimics [Material You Design by Google](https://design.google/library/making-material-you); Also used componenets from [Material Web](https://m3.material.io/develop/web).
* Feature icons from [Ionicons](https://ionic.io/ionicons) and [Google Material Icons](https://fonts.google.com/icons).

### Special thanks
* [Code Commerce (YouTube)](https://www.youtube.com/@codecommerce) for his amazing React instructions.