import AviationStackAPI from "./AviationStackAPI.mjs";
import { loadHeaderFooter } from "./utils";
loadHeaderFooter();

const ouputList = document.querySelector(".entity-data-ul");
const aviationAPI = new AviationStackAPI();
const flightSearchForm = document.querySelector("#flight-search-form");
const browseAllFlightsForm = document.querySelector("#browse-all-flights-form");

//called when page is loaded
async function displayFlightData(params = []) {
  //reset inner html
  ouputList.innerHTML = ``;

  const result = await aviationAPI.queryFlightData(params);

  result.data.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${item.airline.name} Flight ${item.flight.number}</h3>
    <ul>
      <li>IATA Code: ${item.flight.iata}</li>
      <li>Status: ${item.flight_status}</li>
      <li>Departure:${item.departure.airport} - ${item.departure.scheduled} - Timezone: ${item.departure.timezone}</li>
      <li>Arrival: ${item.arrival.airport} - ${item.arrival.scheduled} - Timezone: ${item.arrival.timezone}</li>
    </ul>
    `;

    ouputList.appendChild(li);

    ouputList.scrollIntoView();
  });
}

//called by form
async function searchFlightData() {
  //get params
  const searchParam = document.getElementById("search-by-dropdown").value;
  const searchTerm = document.getElementById("flight-searchbar").value;

  await displayFlightData([
    `${searchParam}=${searchTerm}`,
    "limit=20",
    "offset=0",
  ]);
}

async function browseAllFlights() {
  await displayFlightData(["limit=100", "offset=0"]);
}

flightSearchForm.addEventListener("submit", searchFlightData);
browseAllFlightsForm.addEventListener("submit", browseAllFlights);
