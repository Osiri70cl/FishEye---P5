import { Photographer } from "../models/photographer.js";
import { API } from "../api/api.js";

// Get data from API, find the photographer with the same id as the param in search bar
async function init() {
  displayData(await API.getPhotographersByID());
}

function displayData(photographer) {
  new Photographer(photographer).displayProfile();
}

init();
