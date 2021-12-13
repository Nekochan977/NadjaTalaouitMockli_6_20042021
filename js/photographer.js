"use strict";

import Gallery from "./Gallery.js";
import { ContactModal } from "./Contact.js";
export default class PhotographersPage {
  displayPhotographers(data) {
    const id = window.location.search.split("id=")[1];
    const photographerId = data.photographers.filter(
      (photographer) => photographer.id == id
    );
    console.log(data.photographers);
    const photographerInfo = document.querySelector(
      ".photographer__id__section"
    );
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
            <button class="btn contact">Contactez-moi</button>
            `;
    photographerInfo.appendChild(photographeHeader);
    photographeHeader.innerHTML = info;

    ContactModal(photographerId);
    new Gallery().displayGallery(data.medias, photographerId);
         //get all likes
    //queryslectors & variables
    //console.log(photographerId[0].price);
    const likesAndPriceDiv = document.querySelector(".likesAndPrice");
    const likeBtn = document.querySelectorAll(".like");
    let likesAndPrice = "";
    let mediaLikes = [];
    let totalLikes = [];
    
    function getAllLikes(){
      for(let i = 0; i < document.querySelectorAll(".photo__likes").length; i++){
        mediaLikes.push(parseInt(document.querySelectorAll(".photo__likes")[i].firstChild.data))
        totalLikes = mediaLikes.reduce((a,b)=>{return a + b});
        }
      }
      
    getAllLikes()

    console.log(totalLikes);

    function incrementLike(e) {
      //console.log(document.querySelectorAll(".photo__likes"));
      for(let i = 0; i < document.querySelectorAll(".photo__likes").length; i++){
        mediaLikes = parseInt(document.querySelectorAll(".photo__likes")[i].firstChild.data);
        mediaLikes = isNaN(mediaLikes) ? 0 : mediaLikes;
        if(e.curentTarget=="click") {
          mediaLikes++
        }
        document.querySelectorAll(".photo__likes")[i].firstChild.data = mediaLikes;
        totalLikes = mediaLikes;
        console.log(totalLikes);
      }
    }
    likeBtn.forEach((btn)=>{
      btn.addEventListener("click", (e)=>{
        incrementLike(e);
        e.currentTarget.previousElementSibling.firstChild.data++;
        console.log(totalLikes)
      })
    });
    
    likesAndPrice = `<p class="total__likes">${totalLikes}<i class="fas fa-heart"></i></p> <p class="price">${photographerId[0].price}€/jour</p>`;
    likesAndPriceDiv.innerHTML += likesAndPrice;
  }
}
