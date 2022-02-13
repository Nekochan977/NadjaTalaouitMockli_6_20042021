"use strict";

import Gallery from "./Gallery.js";
import { ContactModal } from "./Contact.js";
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
    // html template for photographer info
    let info = `
            <h1 class ="photographer__name">${photographerId[0].name}</h1>
            <div class="photographer__img photographer__id">
                <img src="Medias/photoID/${photographerId[0].portrait}" alt="photo portrait">
            </div>
            <div class="photographer__info">
              <p class="photographer__location photographer__page-text" aria-label="Localisation géographique">
                ${photographerId[0].city}, ${photographerId[0].country}
              </p>
              <p class="photographer__devise photographer__page-text" aria-label="Devise photographe">
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
    const likeBtn = document.querySelectorAll(".like");
    let likesAndPrice = "";
    let totalLikes = 0;
    let likeContainer = document.querySelectorAll(".photo__likes");
    //add inner HTML in div
    likesAndPrice = `<p class="total__likes">${totalLikes}</p> <span><i class="fas fa-heart total__likes--heart"></i></span><p class="price">${photographerId[0].price}€/jour</p>`;
    likesAndPriceDiv.innerHTML += likesAndPrice;
    //functions
    function getAllLikes() {
      for (let i = 0; i < likeContainer.length; i++) {
        totalLikes += parseInt(likeContainer[i].innerHTML);
      }
    };
        
    function likesCounter() {
      likeBtn.forEach((item) => {
        //console.log(item.children);
        let total = document.querySelector(".total__likes");
        item.addEventListener("click", function (e) {
          
          console.log(e.target);
          if (e.target.classList.contains("portfolio__heart--liked")) {
            e.target.classList.replace(
              "portfolio__heart--liked",
              "portfolio__heart"
            );
            e.target.classList.replace("fas", "far");
            e.target.parentElement.previousElementSibling.innerHTML--;
            totalLikes--;
            total.innerHTML = parseInt(totalLikes);
          } else {
            e.target.classList += "--liked";
            e.target.classList.replace("far", "fas");
            e.target.parentElement.previousElementSibling.innerHTML++;
            totalLikes++;
            total.innerHTML = parseInt(totalLikes);
          }
        });
        // item.addEventListener("keydown",(e)=>{
        //   //for (e.code === "Enter")
        //   //console.log(item.childNodes[0].);
        //   if (e.code === "Enter" && item.childNodes){
        //     console.log("toto");
        //   }
        // })
      });
    }
    getAllLikes();
   
    likesCounter();

  }
}
