'use strict'

export default class Gallery{
    displayGallery(medias,photographerId){
        console.log(photographerId[0].name);
        const photographerMedias = medias.filter(
            (media) => media.photographerId == photographerId[0].id
          );
          // Photographer's gallery
          photographerMedias.map((media) => {
            const gallerySection = document.querySelector(".gallery");
            const photoArticle = document.createElement("article");
            photoArticle.className += "photo__card";
            //html template for the photos
            let card = `
              <a class="open__lightbox">
                <div class="gallery__photo">
                  <img class="photo" title="${media.title}" src="Medias/${photographerId[0].name.split(" ")[0].replace("-", " ")}/${media.image || media.video}"></img>
              </div>
              </a>
              <div class="photo__description">
                <p class="photo__title">${media.title}</p>
                <p class="total__likes">${media.likes}</p>
                <button class="like"><i class="fas fa-heart"></i></button>
              </div>
              
              `;
            gallerySection.appendChild(photoArticle);
            photoArticle.innerHTML += card;
          });

    }
}