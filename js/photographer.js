"use strict";

import Gallery from "./Gallery.js";
import { ContactModal } from "./Contact.js";
import { AddOrRemLikes } from "./Likes.js";
export default class PhotographersPage {
  displayPhotographers(data) {
    const id = window.location.search.split("id=")[1];
    const photographerId = data.photographers.filter(
      (photographer) => photographer.id == id
    );
    const photographerInfo = document.querySelector(
      ".photographer__id__section"
    );
    const photographeHeader = document.createElement("article");
    photographeHeader.className += "photographer__header";
    photographeHeader.ariaLabel += "Informations photographe"
    // html template for photographer info
    let info = `
            <h1 aria-label="${photographerId[0].name}" tabindex="0" role="information" class ="photographer__name">${photographerId[0].name}</h1>
            <div aria-label="photo portrait ${photographerId[0].name}"  class="photographer__id">
                <img src="Medias/photoID/${photographerId[0].portrait}" alt="photo portrait">
            </div>
            <div class="photographer__info">
              <p class="photographer__location photographer__page-text" aria-label="Localisation géographique ${photographerId[0].city} , ${photographerId[0].country}" role="information" tabindex="0">
                ${photographerId[0].city} , ${photographerId[0].country}
              </p>
              <p class="photographer__devise photographer__page-text" aria-label="Devise photographe, ${photographerId[0].tagline}" role="information" tabindex="0">
                ${photographerId[0].tagline}
              </p>
            </div>
            <a class="tag__link">${photographerId[0].tags
              .map((tag) => `<span class="tag__link-tag">#${tag}</span>`)
              .join(" ")}
            </a>
            <button class="btn contact">Contactez-moi</button>
            `;
    photographerInfo.appendChild(photographeHeader);
    photographeHeader.innerHTML = info;

    ContactModal(photographerId);
    new Gallery().displayGallery(data.medias, photographerId);
    //--------get all likes-------------
    //queryslectors & variables
    const likesAndPriceDiv = document.querySelector(".likesAndPrice");
    
    let likesAndPrice = "";
    let totalLikes = 0;
    let likeContainer = document.querySelectorAll(".photo__likes");
    
    //functions
    function getAllLikes() {
      for (let i = 0; i < likeContainer.length; i++) {
        totalLikes += parseInt(likeContainer[i].innerHTML);
      }
    };
    function AddOrRemLikes() {
      const likeBtn = document.querySelectorAll(".like");
      likeBtn.forEach((item) => {
        let total = document.querySelector(".total__likes");
        let photoLikes = item.previousElementSibling;
        let icon = item.firstChild;
        item.addEventListener("click",(e) => {
          if (icon.classList.contains("portfolio__heart--liked")) {
            icon.classList.replace("portfolio__heart--liked","portfolio__heart");
            icon.classList.replace("fas", "far");
            photoLikes.innerHTML--;
            totalLikes--;
            total.innerHTML = parseInt(totalLikes);
          } else {
            icon.classList.replace("portfolio__heart", "portfolio__heart--liked") ;
            icon.classList.replace("far", "fas");
            photoLikes.innerHTML++;
            totalLikes++;
            total.innerHTML = parseInt(totalLikes);
          }
        });
      });
    }
    getAllLikes();
    //add inner HTML in div
    likesAndPrice = `<p class="total__likes">${totalLikes}</p> <span><i class="fas fa-heart total__likes--heart"></i></span><p class="price">${photographerId[0].price}€/jour</p>`;
    likesAndPriceDiv.innerHTML += likesAndPrice;
    AddOrRemLikes();

  }
}
