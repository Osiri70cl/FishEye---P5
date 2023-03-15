export class PhotographerProfile {
  /**
   * The constructor function is a special function that is called when a new instance of the class is
   * created
   * @param photographer - The photographer's name.
   */
  constructor(photographer) {
    this.photographer = photographer;
  }

  /**
   * It creates a card for each photographer and appends it to the main element
   * @returns The cardContainer is being returned.
   */
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
      .appendChild(this.createProfile(cardContainer, "homePage"));
    return cardContainer;
  }

  /**
   * This function creates an image element and appends it to the wrapper element
   * @param wrapper - the wrapper element that the photographer picture will be appended to
   */
  createPhotographerPicture(wrapper) {
    wrapper.innerHTML += `<img src=assets/photographers/${this.photographer.portrait} class="photographer-portrait" aria-labelledby="photographer-${this.photographer.id}" alt="${this.photographer.name}">`;
  }

  /**
   * It creates a profile for a photographer
   * @param wrapper - the element that will contain the profile
   * @param page - the page where the profile is displayed.
   * @returns The wrapper with the photographer's profile.
   */
  createProfile(wrapper, page) {
    wrapper.setAttribute("aria-label", this.photographer.name);
    wrapper.innerHTML += `<article class="photographer-profile">${
      page == "homePage"
        ? `<h2 class="photographer-name">${this.photographer.name}</h2>`
        : `<h1 class="photographer-name" id="photographer-${this.photographer.id}">${this.photographer.name}</h1>`
    }<p class="photographer-location">${
      this.photographer.location
    }</p><p class="photographer-tagline">${this.photographer.tagline}</p>
    ${
      page == "homePage"
        ? `<p class="photographer-price">${this.photographer.price}€/jour</p>`
        : ""
    }</article>`;
    return wrapper;
  }
}
