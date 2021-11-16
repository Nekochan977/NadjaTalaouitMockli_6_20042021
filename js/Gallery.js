'use strict'

export default class Gallery{
    displayGallery(medias,photographerId){
      //medias returns an array containing all medias objects
      //photographerId returns an array with 1 object containing the selected photographer info.

      const popularity = document.getElementById("filter_by_pop");
      const date = document.getElementById("filter_by_date");
      const title = document.getElementById("filter_by_title");

      const photographerMedias = medias.filter(
        (media) => media.photographerId == photographerId[0].id
      );
        //creates an array that contains objects with the selected photographer medias
      const purge = ()=>{
        photographerMedias.forEach((element)=>{
        document.getElementById(element.id).remove();
        })
      }
        //purges the page to be replaced by one of the dropdown menu filter
      const filteredGallery = ()=>{
        if (popularity) {
          popularity.addEventListener("click", () =>{
            purge();    
            this.displayGallery(photographerMedias.sort((a, b) => {return b.likes - a.likes}), photographerId);
          })
        }
        if (date) {
          date.addEventListener("click", () => {
            purge();
            this.displayGallery(photographerMedias.sort((a, b) => {return b.date >= a.date}), photographerId);
          })
        }
        if (title) {
          title.addEventListener("click", () => {
            purge();
            this.displayGallery(photographerMedias.sort((a, b) => {return b.title >= a.title}), photographerId);
          })
        }
      }
        //Filters the selected photographer's gallery 
      //photographer's gallery
      photographerMedias.map((media) => {
        //media returns each of the photographer's medias in separated objects
        //creating dynamically the selected photographer's gallery
        const gallerySection = document.querySelector(".gallery");
        const photoArticle = document.createElement("article");
            
        photoArticle.className += "photo__card";
        photoArticle.id += media.id;
          //links each media id to an article

        //html template for the photos
        let card = `
          <a class="open__lightbox">
            <div class="gallery__photo">
              <img class="photo" title="${media.title}" src="Medias/${photographerId[0].name.split(" ")[0].replace("-", " ")}/${media.image || media.video}"></img>
            </div>
          </a>
          <div class="photo__description">
            <p class="photo__title">${media.title}</p>
            <p class="total__likes">${media.date}</p>
            <p class="total__likes">${media.likes}</p>
            
            <button class="like"><i class="fas fa-heart"></i></button>
          </div>
          `;
        gallerySection.appendChild(photoArticle);
        photoArticle.innerHTML += card;

        //dropdown menu
        const openDropdown = document.querySelector(".fa-chevron-down");
        const closeDropdown = document.querySelector(".fa-chevron-up");
        const filterListbox = document.getElementById("filter_listbox");
        const filterOptions = document.querySelectorAll(".hidden");

        if (openDropdown) {
          openDropdown.addEventListener("click", () => {
            openDropdown.style.display = 'none';
            filterOptions.forEach((option)=>{
              option.style.display = 'block';
              closeDropdown.style.display ="inline-block"
              filterListbox.style.display = 'block';
            })
          });
        }
        if (closeDropdown) {
          closeDropdown.addEventListener("click", () => {
            openDropdown.style.display = 'block';
            filterOptions.forEach((option)=>{
              option.style.display = 'none';
              filterListbox.style.display = 'none';
            })
          });
        }

      });
    
    filteredGallery()
  
    }
}