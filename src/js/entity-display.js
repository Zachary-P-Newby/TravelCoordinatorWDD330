import { loadHeaderFooter } from "./utils";
import APIQuery from "./ApiQuery.mjs";
loadHeaderFooter();

async function populateElement() {
  const ApiQuery = new APIQuery();
  const ouputList = document.querySelector("#entity-data-ul");

  const data = await ApiQuery.getHotelData();

  let output = "";
  Object.entries(data.Items).forEach(([key, value]) => {
    output = output + `<li>${key}. ${value.Shortname}</li>`;
  });

  ouputList.innerHTML = output;
}

populateElement();
