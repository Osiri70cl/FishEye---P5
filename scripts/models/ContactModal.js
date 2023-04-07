import { Modal } from "./Modal.js";

export class ContactModal extends Modal {
  constructor(photographer) {
    super(photographer);
    this.photographer = photographer;
  }

  // Creates the contact modal
  displayModal(event) {
    event.preventDefault();
    const modalContainer = new Modal(this.photographer).createModalContainer(
      event
    );
    modalContainer.classList.add("contact-modal");
    modalContainer.setAttribute(
      "aria-label",
      `Contact me ${this.photographer.name}`
    );
    modalContainer.setAttribute(
      "labelled-by",
      "#contact_modal-photographer-header"
    );
    const contactContainer = document.querySelector(".modal-container > div");
    contactContainer.classList = "contact-modal_container";
    contactContainer.innerHTML += `
    <h2 id="contact_modal-photographer-header" tabindex="0" class="contact-modal_header">Contactez-moi <br>${this.photographer.name}</h2>
    <form>
    <label>Prénom<input type="text"  name="firstname" pattern="^[a-zA-ZÀ-ÿ]+$"></label>
    <label>Nom<input type="text"  name="lastname" pattern="^[a-zA-ZÀ-ÿ]+$" ></label>
      <label>Email<input type="email"  name="email"pattern="[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}></label>
      <label>Votre message<input type="text"  class="contact-modal_message" name="message" pattern="^[^<>]+$"></label>
    <button class="contact_button contact-modal_submit-button" id="submit_button"  aria-label="Send" >Envoyer</button>
  </form>`;
    document
      .querySelector("body")
      .addEventListener("submit", (event) => this.getFormContent(event));
  }

  // Displays the content of the form inputs in the console log on submit.
  getFormContent(event) {
    event.preventDefault();
    const formInputs = document.querySelectorAll("input");
    for (let field of formInputs) {
      console.log(field.value);
    }
  }
}
