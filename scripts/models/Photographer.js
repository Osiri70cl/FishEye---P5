import { PhotographerProfile } from "../components/PhotographerProfile.js";

/* The Photographer class is a class that creates a photographer object and has a method that displays
the photographer's card on the home page */
export class Photographer {
  constructor(photographer) {
    this.city = photographer.city;
    this.country = photographer.country;
    this.location = `${this.city}, ${this.country}`;
    this.id = photographer.id;
    this.name = photographer.name;
    this.portrait = photographer.portrait;
    this.price = photographer.price;
    this.tagline = photographer.tagline;
  }

  /**
   * The function creates a new instance of the PhotographerProfile class, and then appends the result
   * of the createPhotographerCard() function to the DOM
   */
  displayHome() {
    const template = new PhotographerProfile(this);
    document
      .querySelector(".photographer_section")
      .appendChild(template.createPhotographerCard());
  }
}
