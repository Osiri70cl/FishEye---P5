import { faHeartIcon } from "./faHeartIcon.js";
import { ModalFactory } from "../factories/modalFactory.js";

export class PhotographerProfile {
  constructor(photographer) {
    this.photographer = photographer;
  }

  // Creates photographer cards displayed on main page
  createPhotographerCard() {
    const cardContainer = document.createElement("article");
    const cardLink = document.createElement("a");
    cardContainer.appendChild(cardLink);
    cardLink.href = `photographer.html?id=${this.photographer.id}`;
    cardLink.ariaLabel = this.photographer.name;
    cardLink.setAttribute("id", "photographer-" + this.photographer.id);
    this.createPhotographerPicture(cardLink);
    document
      .querySelector("main")
      .appendChild(this.createProfileMain(cardContainer, "homePage"));
    return cardContainer;
  }

  // Creates the photographer picture element on main page and in the photographer's header
  createPhotographerPicture(wrapper) {
    wrapper.innerHTML += `<img src=assets/photographers/${this.photographer.portrait} class="photographer-portrait" aria-label="photographer-${this.photographer.id}" alt="Photo de ${this.photographer.name}">
    <h2 class="photographer-name">${this.photographer.name}</h2>
    `;
  }
  createPhotographerPictureProfile(wrapper) {
    wrapper.innerHTML += `<img src=assets/photographers/${this.photographer.portrait} class="photographer-portrait"
    tabindex="0" 
    aria-label="photographer-${this.photographer.id}" alt="Photo de ${this.photographer.name}">
    `;
  }

  /**
   * It creates a profile for a photographer
   * @param wrapper - the element that will contain the profile
   * @param page - the page where the profile is displayed.
   * @returns The wrapper with the photographer's profile.
   */
  createProfileMain(wrapper) {
    wrapper.setAttribute("aria-label", this.photographer.name);
    wrapper.innerHTML += `
    <a href="photographer.html?id=${this.photographer.id}"" class="photographer-profile">
      <p aria-label="${this.photographer.location}" class="photographer-location">${this.photographer.location}</p>
      <p class="photographer-tagline">${this.photographer.tagline}</p>
      <p class="photographer-price">${this.photographer.price}€/jour</p>
    </a>`;
    return wrapper;
  }
  createProfile(wrapper) {
    wrapper.setAttribute("aria-label", this.photographer.name);
    wrapper.innerHTML += `
    <div  class="photographer-profile">
    <h1 tabindex="0" class="photographer-name">${this.photographer.name}</h1>
      <h2 tabindex="0" aria-label="${this.photographer.location}" class="photographer-location">${this.photographer.location}</h2>
      <p tabindex="0" class="photographer-tagline">${this.photographer.tagline}</p>
      <p tabindex="0" class="photographer-price">${this.photographer.price}€/jour</p>
    </div>`;
    return wrapper;
  }

  // Creates header on the photographer page
  createPhotographerHeader() {
    const wrapper = document.querySelector(".photograph-header");
    this.createProfile(wrapper, "profilePage");
    const openModalButton = document.createElement("button");
    openModalButton.textContent = "Contactez-moi";
    openModalButton.classList = "open_modal_button";
    openModalButton.id = "profile_contact-button";
    wrapper.appendChild(openModalButton);
    const body = document.querySelector("body");
    body.addEventListener("click", (event) => {
      if (event.target.classList == "open_modal_button") {
        new ModalFactory("contact", this.photographer).displayModal(event);
      }
    });
    this.createPhotographerPictureProfile(wrapper);
    return wrapper;
  }

  // Creates the fixed insert found at the bottom, containing the total likes and daily price
  createprofilePageInsert() {
    const wrapper = document.querySelector("#main");
    wrapper.innerHTML += `<aside class="insert"><div class="total-likes-container"><data aria-label="Total likes" value='${this.photographer.totalLikes}' class="total-likes">${this.photographer.totalLikes}</data> ${faHeartIcon}</div><div><data class="price" aria-label="Daily price" value='${this.photographer.price}'>${this.photographer.price}</data>€ / jour</div></aside>`;
    return wrapper;
  }
}
