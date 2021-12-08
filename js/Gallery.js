"use strict";
import { filterBy } from "./Filter.js";
import { showLightbox } from "./Lightbox.js";

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
      // if media contains video then add html with video element;
      let card = "";
      if ("video" in media) {
        card = `
          <div class="open__lightbox">
            <div class="gallery__photo">
            <video class="photo" title="${ media.title}" src="Medias/${photographerId[0].name.split(" ")[0].replace("-", " ")}/${media.video}" type="video/mp4"></video>
            </div>
          </div>
          <div class="photo__description">
            <p class="photo__title">${media.title}</p>
            <p class="photo__date">${media.date}</p>
            <div class="likes">
            <p class="photo__likes">${media.likes}</p>
            <button class="like" aria-label="click to like"><i class="fas fa-heart"></i></button>
            </div>
          </div>
          `;
      }
      //else add html with img element
      else {
        card = `
          <div class="open__lightbox">
            <div class="gallery__photo">
              <img class="photo" title="${
                media.title
              }" src="Medias/${photographerId[0].name
          .split(" ")[0]
          .replace("-", " ")}/${media.image}"></img>
            </div>
          </a>
          <div class="photo__description">
            <p class="photo__title">${media.title}</p>
            <p class="photo__date">${media.date}</p>
            <div class="likes">
            <p class="photo__likes">${media.likes}</p>
            <button class="like" aria-label="click to like"><i class="fas fa-heart"></i></button>
            </div>
          </div>
          `;
      }

      photoArticle.className += "photo__card";
      photoArticle.id += media.id;
      //links each media id to an article

      //html template for the photos

      photoArticle.innerHTML += card;
      gallerySection.appendChild(photoArticle);

      //event listerner to launch lightbox
      const openModal = document.querySelectorAll(".open__lightbox");
      //console.log(openModal);
      photoArticle.addEventListener("click", (e) => {
        console.log(e.target);
        showLightbox(media.title, media.src);
      });
    });
    // End of gallery

    //Filter Gallery
    const select = document.getElementById("listbox"); //select html
    select.addEventListener("change", filterBy);

    //get all likes 
    //queryslectors
    const likesAndPriceDiv = document.querySelector(".likesAndPrice");
    const photoLikes = document.querySelectorAll(".photo__likes");
    const likeBtn = document.querySelector('.like');
    let likesArray = [];
    
    let likesAndPrice = "";
    photoLikes.forEach((element)=>{
      likesArray.push(parseInt(element.firstChild.data))
    });
    // console.log(likesArray);
    likeBtn.addEventListener("click", (e)=> {
      
      //photoLikes++
      console.log(e.target);
    })
    const totalLikes = likesArray.reduce((a,b)=>{return a+b});
    likesAndPrice = `<p class="total__likes">${totalLikes}<i class="fas fa-heart"></i></p> <p class="price"></p>`;
  
    likesAndPriceDiv.innerHTML += likesAndPrice;

   
  }
  
}
