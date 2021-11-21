"use strict";
import {filterBy} from './Filter.js';

export default class Gallery {
  displayGallery(medias, photographerId) {
    //medias returns an array containing all medias objects
    //photographerId returns an array with 1 object containing the selected photographer info.
    const gallerySection = document.querySelector(".gallery");
    gallerySection.id += "photos-list";

    const photographerMedias = medias.filter(
      (media) => media.photographerId == photographerId[0].id
    );
    //creates an array that contains objects with the selected photographer medias

    //photographer's gallery
    photographerMedias.map((media) => {
      //media returns each of the photographer's medias in separated objects
      //creating dynamically the selected photographer's gallery
      const photoArticle = document.createElement("article");

      photoArticle.className += "photo__card";
      photoArticle.id += media.id;
      //links each media id to an article

      //html template for the photos
      let card = `
          <a class="open__lightbox">
            <div class="gallery__photo">
              <img class="photo" title="${
                media.title
              }" src="Medias/${photographerId[0].name
        .split(" ")[0]
        .replace("-", " ")}/${media.image || media.video}"></img>
            </div>
          </a>
          <div class="photo__description">
            <p class="photo__title">${media.title}</p>
            <p class="photo__date">${media.date}</p>
            <p class="total__likes">${media.likes}</p>
            
            <button class="like"><i class="fas fa-heart"></i></button>
          </div>
          `;
      gallerySection.appendChild(photoArticle);
      photoArticle.innerHTML += card;
    });
    // End of gallery

    const select = document.getElementById("listbox"); //select html
    select.addEventListener("change", filterBy);
  }
}
