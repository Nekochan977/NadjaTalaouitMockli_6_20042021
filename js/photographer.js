"use strict";

export default class PhotographersPage {
  displayPhotographers(data) {
    const id = window.location.search.split("id=")[1];
    const photographerId = data.photographers.filter(
      (photographer) => photographer.id == id
    );
    const photographerInfo = document.querySelector(".photographer__info");
    const photographeHeader = document.createElement("div");
    photographeHeader.className += "photographer__header";

    // html template for photographer info
    let info = `
            <h1>${photographerId[0].name}</h1>
            <div class="photographer__img photographer__id">
                <img src="Medias/photoID/${photographerId[0].portrait}">
            </div>
            <p class="photographer__location photographer__page-text">
                    ${photographerId[0].city}, ${photographerId[0].country}
                </p>
                <p class="photographer__devise photographer__page-text">
                    ${photographerId[0].tagline}
                </p>
                    
                <p class="photographer__price photographer__page-text">
                     ${photographerId[0].price}€/jour
                </p>
                <a class="tag__link">${photographerId[0].tags
                  .map((tag) => `<span class="tag__link-tag">${tag}</span>`)
                  .join(" ")}</a>
                <button class="contact">Contactez-moi</button> 
            `;
    photographerInfo.appendChild(photographeHeader);
    photographeHeader.innerHTML = info;

    const photographerMedias = data.medias.filter(
      (media) => media.photographerId == id
    );
    // Photographer's gallery
    photographerMedias.map((media) => {
      const gallerySection = document.querySelector(".gallery");
      const photoArticle = document.createElement("article");
      photoArticle.className += "photo__card";
      //html template for the photos
      let card = `
            <img src="Medias/${photographerId[0].name
              .split(" ")[0]
              .replace("-", " ")}/${media.image || media.video}"</img>
            `;
      gallerySection.appendChild(photoArticle);
      photoArticle.innerHTML += card;
    });

  }
}
