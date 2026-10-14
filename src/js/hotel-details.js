import { loadHeaderFooter, getParam } from "./utils";
import AccomodationsAPI from "./AccomodationsAPI.mjs";
loadHeaderFooter();

async function renderHotelDetails() {
  const param = getParam("id");

  const hotelAPI = new AccomodationsAPI();
  const hotelDetailsDiv = document.querySelector("#hotel-details");
  const data = await hotelAPI.getHotelByID(param);

  const englishDetails = data.AccoDetail.en;
  const accoType = await hotelAPI.getAccomadationType(data.AccoType.Id);

  let vacancyMessage;

  if (data.HasRoom) {
    vacancyMessage = "Room(s) Availible";
  } else {
    vacancyMessage = "No Vacancies";
  }

  let innerHTML = `
    <article>
      <h2>${englishDetails.Name}</h2>
      <p>${accoType} - ${vacancyMessage}</p>
      <p>Phone Number: ${englishDetails.Phone}</p>
      <p>Address: ${englishDetails.Street}, ${englishDetails.City}, ${englishDetails.CountryCode}, ${englishDetails.Zip}</p>
      <p>Source: ${data.Source}</p>
      </article>`;

  let imageURL = null;
  let imageAltText;

  let photoDiv = "<div id=photo-div>";
  if (data.ImageGallery != null && data.ImageGallery[0] != null) {
    let photo_count = 0;
    data.ImageGallery.forEach((photo) => {
      photoDiv = addPhoto(
        photo.ImageUrl,
        data.Shortname + `_${photo_count}`,
        photoDiv,
      );
      photo_count += 1;
    });

    photoDiv = photoDiv + "</div";
  } else {
    imageURL = "/images/placeholder.png";
    imageAltText = "No Image Availible";
    photoDiv =
      photoDiv +
      `
    <img src="${imageURL}" alt="${imageAltText}" class="hotel-image" />`;

    photoDiv = photoDiv + "</div";
  }

  innerHTML = innerHTML + photoDiv;
  hotelDetailsDiv.innerHTML = innerHTML;
}

function addPhoto(url, altText, htmlString) {
  let imageURL = url;
  let imageAltText = altText;
  let output = htmlString;
  output =
    output +
    `
    <img src="${imageURL}" alt="${imageAltText}" class="hotel-image" loading="lazy"/>`;

  return output;
}

renderHotelDetails();
