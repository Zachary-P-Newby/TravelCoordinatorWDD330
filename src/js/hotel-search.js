import { loadHeaderFooter } from "./utils";
import AccomodationsAPI from "./AccomodationsAPI.mjs";
loadHeaderFooter();

const hotelAPI = new AccomodationsAPI();
const ouputList = document.querySelector(".entity-data-ul");

const hotelSearchForm = document.getElementById("hotel-search-form");

function renderHotels(data) {
  ouputList.innerHTML = "";
  Object.values(data.Items).forEach((value) => {
    //base URL to hotel details page =  ""

    //This code is base upon the results of my asking duck.ai: "How do I add URL query parameter to an href value in an <a> element"
    const url = new URL("/hotel-details/index.html", window.location);
    url.searchParams.set("id", value.Id);
    //end of ai assistance

    const listElement = document.createElement("li");
    const link = document.createElement("a");
    link.innerHTML = `${value.AccoDetail.en.Name}`;
    link.href = url;

    listElement.appendChild(link);

    ouputList.appendChild(listElement);
  });
}

async function searchForHotel() {
  const param = document.getElementById("hotel-searchbar").value;
  const data = await hotelAPI.searchByName(param);

  renderHotels(data);
}

hotelSearchForm.addEventListener("submit", searchForHotel);

async function onPageLoad() {
  renderHotels(await hotelAPI.getHotels());
}

onPageLoad();
