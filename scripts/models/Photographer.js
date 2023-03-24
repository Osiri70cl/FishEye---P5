import { PhotographerMedia } from "../components/PhotographerMedia.js"
import { PhotographerProfile } from "../components/PhotographerProfile.js";
import { displayedPhotographerData } from "../store/store.js"

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

   // Creates the photographer's profile page, and sorts media by popularity by default
   displayProfile() {
    const template = new PhotographerProfile(this)
    document
      .querySelector("#main")
      .appendChild(template.createPhotographerHeader())
    template.createprofilePageInsert()
    PhotographerMedia.createMediaSection()
    displayedPhotographerData.media.forEach((element) => {
      const mediaCard = new PhotographerMedia(element)
      document
        .querySelector(".photographer-media")
        .appendChild(mediaCard.createMediaCard())
      mediaCard.addLikes()
      mediaCard.addLightboxEventListener()
    })
    PhotographerMedia.sortMedia()
  }
}

