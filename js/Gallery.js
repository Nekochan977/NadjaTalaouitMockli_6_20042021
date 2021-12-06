"use strict";
import { filterBy } from "./Filter.js";

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
          <a class="open__lightbox">
            <div class="gallery__photo">
            <video controls class="photo" title="${
              media.title
            }"><source src="Medias/${photographerId[0].name
          .split(" ")[0]
          .replace("-", " ")}/${media.video}" type="video/mp4"></video></div>
          </a>
          <div class="photo__description">
            <p class="photo__title">${media.title}</p>
            <p class="photo__date">${media.date}</p>
            <div class="likes">
            <p class="total__likes">${media.likes}</p>
            <button class="like"><i class="fas fa-heart"></i></button>
            </div>
          </div>
          `;
      }
      //else add html with img element
      else {
        card = `
          <a class="open__lightbox">
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
            <p class="total__likes">${media.likes}</p>
            <button class="like"><i class="fas fa-heart"></i></button>
            </div>
          </div>
          `;
      }

      photoArticle.className += "photo__card";
      photoArticle.id += media.id;
      //links each media id to an article

      //html template for the photos

      gallerySection.appendChild(photoArticle);
      photoArticle.innerHTML += card;
      photoArticle.addEventListener("click", (e) => {
        showLightbox(media.title);
      });
    });
    // End of gallery

    const select = document.getElementById("listbox"); //select html
    select.addEventListener("change", filterBy);

    //lightbox
    //queryselectors
    const header = document.getElementById("main-header");
    const idSection = document.querySelector(".photographer__id__section");
    const listbox = document.querySelector(".listbox_container");
    const images = document.querySelectorAll(".photo"); //Returns nodeList of images
    const lightboxContainer = document.getElementById("lightbox");
    const slides = document.querySelector(".slides");
    const closeLibobxBtn = document.querySelector(".close-lightbox");
    const lightboxBtns = document.querySelectorAll(".lightbox-btn");
    //const lightboxBtnRight = document.querySelector("next");
    //const lightboxBtnLeft = document.querySelector("prev");

    const lightbox = [];

    //functions
    function showLightbox(title) {
      let id = [];

      lightboxContainer.classList.add("active");
      gallerySection.style.display = "none";
      header.style.display = "none";
      idSection.style.display = "none";
      listbox.style.display = "none";

      images.forEach(function (element) {
        console.log(element);
        lightbox.push({ title: element.title, src: element.src });
      });

      id = lightbox.findIndex((element) => element.title == title);

      console.log(lightbox);
      let slideHTML = "";
      while (slides.firstChild) {
        slides.removeChild(slides.firstChild);
      }

      console.log(lightbox[id].src);

      if (lightbox[id].src.includes("mp4")) {
        slideHTML = `<div><video controls width="320" height="240" class="photo" title="${lightbox[id].title}"><source src="${lightbox[id].src} type="video/mp4"></video></div>`;
      } else {
        slideHTML = `<img class="photo" title="${lightbox[id].title}" src="${lightbox[id].src}">`;
      }
      slides.innerHTML += slideHTML;

      const transitionSlidesLeft = () => {
        id--;
        //console.log("left"+id);
        while (slides.firstChild) {
          slides.removeChild(slides.firstChild);
        }
        if (lightbox[id].src.includes("mp4")) {
          slideHTML = `<video controls width="320" height="240" class="photo" title="${lightbox[id].title}"><source src="${lightbox[id].src} type="video/mp4"></video>`;
        } else {
          slideHTML = `<img class="photo" title="${lightbox[id].title}" src="${lightbox[id].src}">`;
        }

        slides.innerHTML += slideHTML;
      };
      const transitionSlidesRight = () => {
        id++;

        while (slides.firstChild) {
          slides.removeChild(slides.firstChild);
        }
        if (lightbox[id].src.includes("mp4")) {
          slideHTML = `<video controls width="320" height="240" class="photo" title="${lightbox[id].title}"><source src="${lightbox[id].src} type="video/mp4"></video>`;
        } else {
          slideHTML = `<img class="photo" title="${lightbox[id].title}" src="${lightbox[id].src}">`;
        }

        slides.innerHTML += slideHTML;
      };

      const transitionSlidesHandler = (moveItem) => {
        moveItem.includes("prev")
          ? transitionSlidesLeft()
          : transitionSlidesRight();
      };
      lightboxBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          transitionSlidesHandler(e.currentTarget.id);
        });
      });

      // close lightbox
      closeLibobxBtn.addEventListener("click", () => {
        lightboxContainer.classList.remove("active");
        header.style.display = "block";
        idSection.style.display = "flex";
        listbox.style.display = "flex";
        gallerySection.style.display = "grid";
      });
    }
  }
}
