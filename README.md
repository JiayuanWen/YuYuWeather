# YuYu Weather
A simple weather app built with React and Axios

## Run the project
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
5. wip

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
