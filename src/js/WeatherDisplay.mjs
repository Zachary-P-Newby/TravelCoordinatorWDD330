import WeatherAPI from "./WeatherAPI.mjs";

const weatherAPI = new WeatherAPI();

const currentWeatherDataDisplay = document.querySelector("#current-conditions-display");


function renderCurrentConditionData(data){
    currentWeatherDataDisplay.innerHTML = "";
    if(data.error){
        if(data.error.code == "1006"){
            currentWeatherDataDisplay.innerHTML = `<h2>Destination Not Found</h2>
            <p>Input: <span id="bad-input">"${cityName}"</span> is invalid. Did you mispell something?</p>
            `
        }
        else{
        currentWeatherDataDisplay.innerHTML = `<h2>ERROR</h2>
        <p>Error code: ${data.error.code}</p>
        <p>Message: ${data.error.message}</p>`
        }
    }
    else{
        //°
        const location =data.location;
        const currentCondition = data.current
        currentWeatherDataDisplay.innerHTML = `
        <h2>${location.name}:</h2>
        
        <img src="${currentCondition.condition.icon}" alt="${currentCondition.condition.text}" class="weather-image">
        <h3>${currentCondition.condition.text}</h3>
        <div class="weather-conditions">
        <h4>${currentCondition.temp_f}°F/${currentCondition.temp_c}°C</h4>
            <ul>
                <li>Windspeed: ${currentCondition.wind_mph} mph</li>
                <li>Humidity: ${currentCondition.humidity}%</li>
                <li>Heat Index: ${currentCondition.heatindex_f}°F/${currentCondition.heatindex_c}°C</li>
                <li>Chance of Rain: ${currentCondition.chance_of_rain}%</li>
                <li>Feels Like: ${currentCondition.feelslike_f}°F/${currentCondition.feelslike_c}°C</li>
                <li>UV Index: ${currentCondition.uv}</li>
            </ul>

        </div>
        `;
    }

}



export async function renderWeatherData(cityName) {

    const weatherData = await weatherAPI.getCityWeather(cityName);
    renderCurrentConditionData(weatherData);
}

