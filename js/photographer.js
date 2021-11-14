"use strict";

import Gallery from "./Gallery.js";

export default class PhotographersPage {
  displayPhotographers(data) {
    const id = window.location.search.split("id=")[1];
    const photographerId = data.photographers.filter(
      (photographer) => photographer.id == id
    );
    const photographerInfo = document.querySelector(".photographer__id__section");
    const photographeHeader = document.createElement("div");
    photographeHeader.className += "photographer__header";

    // html template for photographer info
    let info = `
            <h1 class ="photographer__name">${photographerId[0].name}</h1>
            <div class="photographer__img photographer__id">
                <img src="Medias/photoID/${photographerId[0].portrait}">
            </div>
            <div class="photographer__info">
              <p class="photographer__location photographer__page-text">
                ${photographerId[0].city}, ${photographerId[0].country}
              </p>
              <p class="photographer__devise photographer__page-text">
                ${photographerId[0].tagline}
              </p>
            </div>
            <a class="tag__link">${photographerId[0].tags
              .map((tag) => `<span class="tag__link-tag">#${tag}</span>`)
              .join(" ")}
            </a>
            <button class="contact">Contactez-moi</button>
            `;
    photographerInfo.appendChild(photographeHeader);
    photographeHeader.innerHTML = info;


    new Gallery().displayGallery(data.medias, photographerId);
  }
}
