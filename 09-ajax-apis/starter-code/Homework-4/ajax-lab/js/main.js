/*
    1. Sign up for openweathermap.org and generate an API key.
    2. User either $.ajax or $.get to pull current weather data for San Francisco.
       (hint: http://api.openweathermap.org/data/2.5/weather?q=...)
    3. Log the temperature to the console. Note that the temperature will be in Kelvin.
    4. Incorporate the following code into your app to log a Fahrenheit value for the temperature to the console:
         // calculate and store Fahrenheit temperature
         const degF = (temp - 273.15) * 1.8 + 32;
         // round calculated temperature down to the nearest whole number
         const degFInt = Math.floor(degF);
    5. Use DOM manipulation to add the returned temperature to the span element with the id 'temp'.
    6. Sign up for developer.weatherunlocked.com and obtain your application ID and application key.
    7. Update your code to obtain the current temperature from this data source instead of openweathermap, log it to the console, and then add it to the DOM. 
    8. Refactor your code as necessary to separate the code for DOM manipulation from the code for sending an HTTP request.

    BONUS 1: Refactor your code to use a fetch request instead of jQuery to pull current weather data.
    BONUS 2: Implement a form that prompts users for a city and state and returns data for the location they specify. (Uncomment out the existing form code in index.html as marked).
    BONUS 3: The response data for each request includes the name of an image file that illustrates current weather conditions. Use the documention to figure out the URL for these files on the server, and then incorporate this image into the DOM.
*/

'use strict';

const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const weatherUrl2 = 'http://api.weatherunlocked.com/api/current/';

