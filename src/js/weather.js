import { renderWeatherData } from "./WeatherDisplay.mjs";
import {
  getLocalStorage,
  setLocalStorage,
  loadHeaderFooter,
  removeWhitespace,
} from "./utils";
loadHeaderFooter();

const weatherSearchForm = document.querySelector(".weather-search");
const destinationNameInput = document.querySelector("#city-name");

weatherSearchForm.addEventListener("submit", enterNewDestination);

function enterNewDestination() {
  let cityName = removeWhitespace(destinationNameInput.value);
  setLocalStorage("destination-city-name", cityName);
  renderWeatherData(cityName);
}

function onPageLoad() {
  const cityName = getLocalStorage("weather-city-name");
  if (cityName != null) {
    renderWeatherData(removeWhitespace(cityName));
  } else {
    renderWeatherData("New_York");
  }
}

onPageLoad();
