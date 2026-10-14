import apiQueryFactory from "./APIQuery.mjs";

const weatherAPI_BaseURL = import.meta.env.VITE_WEATHER_API_BASE_URL;
const weatherAPI_Key = import.meta.env.VITE_WEATHER_API_API_KEY;

export default class WeatherAPI {
    constructor(){
        this.queryAPI = apiQueryFactory(weatherAPI_BaseURL + "forecast.json");

        this.key = weatherAPI_Key
    }


    async getCityWeather(city){
        let params = [`key=${this.key}`,`q=${city}`]
        const result = await this.queryAPI(params);
        return result;

    }

}