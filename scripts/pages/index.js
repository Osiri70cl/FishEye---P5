import { API } from "../api/Api.js";
import { createHeader } from "../components/header.js";

async function init() {
  // Create the main page header, then get photographers data and display them
  createHeader("mainPage");
  displayData(await API.getAllData("homePage"));
}

init();
