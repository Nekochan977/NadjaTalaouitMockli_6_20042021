"use strict";

//form submission
function ContactModal(photographerId) {
  //variables
  const modalBtn = document.querySelector(".contact");
  const submitBtn = document.getElementById("submit-btn");
  const modalBg = document.querySelector(".bground-contact");
  const closeModal = document.querySelector(".close-contactForm");
  const modalHeader = document.querySelector(".form-header");
  const form = document.getElementById("contact-form");
  const firstName = document.querySelector("#prenom");
  const firstnameDiv = document.querySelector("#prenom-div");
  const lastName = document.querySelector("#nom");
  const lastnameDiv = document.querySelector("#nom-div");
  const email = document.querySelector("#email");
  const emailDiv = document.querySelector("#email-div");
  const message = document.querySelector("#message");
  const messageDiv = document.querySelector("#message-div");
  //functions 
    //get focus
    function addFocus() {
      form.focus();
      firstName.tabIndex=0;
      document.querySelectorAll(".photo").forEach((elt)=>{
        elt.tabIndex=1;
      });
      document.querySelectorAll(".like").forEach((elt)=>{
        elt.tabIndex=1;
      });
    }
   //launch Modal form
  function launchModal() {
    addFocus();
    modalBg.style.display = "block";
    modalBtn.style.display = "none";
    let header = `${photographerId[0].name}</br> Contactez-moi`;
    modalHeader.innerHTML = header;
  }
  //close Modal form
  function crossClose() {
    modalBg.style.display = "none";
    modalBtn.style.display = "block";
  }
  // Event listeners
  modalBtn.addEventListener("click", launchModal);
  closeModal.addEventListener("click", crossClose);
  
  // Form validation
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    //add a counter to check if each form input is valid and if they are all completed
    let counter = 0;
    // Validation conditions
    // input values does not accept blanks
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    //define email format
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // check firstname

    if (firstNameValue.length < 2) {
      // Error message
      firstnameDiv.setAttribute(
        "data-error",
        "merci de mettre 2 caractères minimum"
      );
      firstnameDiv.setAttribute("data-error-visible", "true");
    } else {
      firstnameDiv.setAttribute("data-error-visible", "false");
      counter++;
    }
    // check lastname

    if (lastNameValue.length < 2) {
      // Error message
      lastnameDiv.setAttribute(
        "data-error",
        "merci de mettre 2 caractères minimum"
      );
      lastnameDiv.setAttribute("data-error-visible", "true");
    } else {
      lastnameDiv.setAttribute("data-error-visible", "false");
      counter++;
    }
    // check email

    if (mailFormat.test(email.value)) {
      console.log(email.value);
      emailDiv.setAttribute("data-error-visible", "false");
      counter++;
    } else {
      emailDiv.setAttribute(
        "data-error",
        "merci de donner une adresse mail valide"
      );
      emailDiv.setAttribute("data-error-visible", "true");
    }
    if (message.value == "") {
      messageDiv.setAttribute("data-error", `merci d'entrer votre message`);
      messageDiv.setAttribute("data-error-visible", "true");
    } else {
      messageDiv.setAttribute("data-error-visible", "false");
      counter++;
    }
    // reset form
    const validate = () => {
      form.reset();
    };
   
    if (counter === 4) {
      modalBg.style.display = "none";
      console.log(firstName.value, lastName.value, email.value, message.value);
      validate();
      modalBtn.style.display = "block";
    }
  });
}
export {ContactModal};
