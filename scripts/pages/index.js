import { API } from "../api/api.js";
import { Photographer } from "../models/photographer.js";

/**
 * The function `init()` is an asynchronous function that calls the function `displayData()` with the
 * result of the function `API.getAllData()` as its argument
 */
async function init() {
  displayData(await API.getAllData("homePage"));
}

/**
 * It takes an array of photographer objects, and for each photographer object, it creates a new
 * Photographer object and calls the displayHome method on it
 * @param photographers - an array of photographer objects
 */
function displayData(photographers) {
  photographers.map((photographer) =>
    new Photographer(photographer).displayHome()
  );
}

init();
