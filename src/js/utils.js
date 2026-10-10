export async function convertToJson(response) {
  if (response.ok) {
    try {
      const result = await response.json();
      return result;
    } catch (err) {
      //console.log(err);
    }
  } else {
    throw { name: "serviceError", message: await response.json() };
  }
}

/* I borrowed these from the sleep outside so I could have consistent headers and footers */
export function renderListWithTemplate(
  template,
  parentElement,
  list,
  position = "afterbegin",
  clear = false,
) {
  const htmlStrings = list.map(template);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if (callback) {
    callback(data);
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

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}

//borrowed this as well
export function getParam(param) {
  //get the query string part of the URL
  const queryString = window.location.search;
  //get the parmemters of the url
  const urlParams = new URLSearchParams(queryString);
  //get the desired parmeter
  const output = urlParams.get(param);
  return output;
}
