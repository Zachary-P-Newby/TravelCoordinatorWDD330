import addBreadcrumbs from "./BreadCrumbs.mjs";

export function removeWhitespace(input) {
  let splitInput = input.split(" ");

  return splitInput.join("_");
}

/*
These were copied from the SleepOutside project because I needed them here and would have just ended up recreating them.
I do not know if that is an issue, but these are pretty basic utility functions. That I would use on mutliple sites. Though I made some adjustments as needed
*/

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export async function convertToJson(response) {
  if (response.ok) {
    try {
      const result = await response.json();
      return result;
    } catch (err) {
      throw { name: "ERROR", message: err };
    }
  } else {
    throw { name: "serviceError", message: await response.json() };
  }
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("/partials/header.html"); //
  const footerTemplate = await loadTemplate("/partials/footer.html");

  const headerElement = document.querySelector("header");
  const footerElement = document.querySelector("footer");

  headerElement.innerHTML = headerTemplate;
  footerElement.innerHTML = footerTemplate;

  //now I run this in here instead of each page with a header and footer.
  addBreadcrumbs();
}

export function getParam(param) {
  //get the query string part of the URL
  const queryString = window.location.search;
  //get the parmemters of the url
  const urlParams = new URLSearchParams(queryString);
  //get the desired parmeter
  const output = urlParams.get(param);
  return output;
}
