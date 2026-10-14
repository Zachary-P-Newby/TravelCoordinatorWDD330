export default function addBreadcrumbs(){


    //get pathname without the "/" at the begining
    let pathname = window.location.pathname.slice(1);
    
    const crumbs = pathname.split("/");
    //if we split by / then the first object in crumbs will be an empty string
    switch(crumbs[0]){

        case "weather":
            addWeatherBreadcrumb();
        break;

        case "hotel-search":
            addHotelSearchBreadcrumb();
        break;

        case "hotel-details":
            addHotelDetailsBreadcrumb();
        break;

        case "flight":
            addFlightBreadcrumb();
        break;

        default:
            const breadcrumbDiv = document.getElementById("breadcrumb");
            breadcrumbDiv.innerHTML = `<p>Home`;
        break;
        
    
    }

}




function addWeatherBreadcrumb(){
    const breadcrumbDiv = document.getElementById("breadcrumb");
    let breadcrumbInnerHTML = `<p>Home`;

    breadcrumbInnerHTML = breadcrumbInnerHTML + " -- " + `Weather</p>`;
    breadcrumbDiv.innerHTML = breadcrumbInnerHTML;

}


function addHotelSearchBreadcrumb(){
    const breadcrumbDiv = document.getElementById("breadcrumb");
    let breadcrumbInnerHTML = `<p>Home`;

    breadcrumbInnerHTML = breadcrumbInnerHTML + " -- " + `Hotels</p>`;
    breadcrumbDiv.innerHTML = breadcrumbInnerHTML;

}

function addHotelDetailsBreadcrumb(){
    const breadcrumbDiv = document.getElementById("breadcrumb");
    let breadcrumbInnerHTML = `<p>Home`;

    breadcrumbInnerHTML = breadcrumbInnerHTML + " -- " + `Hotels`+ " -- " + `Details</p>`;
    breadcrumbDiv.innerHTML = breadcrumbInnerHTML;

}

function addFlightBreadcrumb(){
    const breadcrumbDiv = document.getElementById("breadcrumb");

    let breadcrumbInnerHTML = `<p>Home`;

    breadcrumbInnerHTML = breadcrumbInnerHTML + " -- " + `Flights</p>`;
    breadcrumbDiv.innerHTML = breadcrumbInnerHTML;

}