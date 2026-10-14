import { loadHeaderFooter, setLocalStorage } from "./utils";

loadHeaderFooter();

const weatherSearchbar = document.getElementById("weather-searchbar");

const weatherForm = document.querySelector(".weather-search");

weatherForm.addEventListener("submit", onWeatherFormSubmit);

function onWeatherFormSubmit() {
  setLocalStorage("weather-city-name", weatherSearchbar.value);
  window.location.assign("/weather/index.html");
}
