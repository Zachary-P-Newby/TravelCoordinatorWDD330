import AviationStackAPI from "./AviationStackAPI.mjs";
import { loadHeaderFooter } from "./utils";
loadHeaderFooter();

const ouputList = document.querySelector("#entity-data-ul");
const aviationAPI = new AviationStackAPI();
const flightForm = document.querySelector("#flight-search-form");

//called when page is loaded
async function displayFlightData(params = null) {
  console.log(params);

  params.push("limit=10");
  const result = await aviationAPI.queryFlightData(params);
  console.log(result.data);
  Object.values(result.data).forEach((item) => {
    Object.entries(item).forEach(([key, value]) => {
      const li = document.createElement("li");
      li.innerHTML = `<p>${key}:${value}</p>`;
      ouputList.appendChild(li);
    });
  });
}

//called by form
async function searchFlightData() {
  //get params
  const searchParam = document.getElementById("search-by-dropdown").value;
  const searchTerm = document.getElementById("flight-searchbar").value;

  await displayFlightData([`${searchParam}=${searchTerm}`]);
}

flightForm.addEventListener("submit", searchFlightData);
