import { loadHeaderFooter, getParam } from "./utils";
import AccomodationsAPI from "./AccomodationsAPI.mjs"
loadHeaderFooter();

async function populateElement() {
    
    const param = getParam("id");
    
    const hotelAPI = new AccomodationsAPI();
    const ouputList = document.querySelector("#entity-data-ul");


    const data = await hotelAPI.getHotelDetails(param);
    Object.entries(data).forEach(([key, value])=>{
        if(value != null){
            const listElement = document.createElement("li");

            listElement.innerHTML = `<p>${key}: ${value}</p>`;

            ouputList.appendChild(listElement);
        }
        
    })


}

populateElement();
