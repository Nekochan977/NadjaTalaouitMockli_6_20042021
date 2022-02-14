'use strict';

import DataReader from "./DataReader.js";
import PhotographersPage from "./photographer.js"
import { filterTags } from "./FilterTags.js";

// new Object
new DataReader().getData().then((data) => {
    //Script section for photographerPage
    if(window.location.pathname.includes('/photographerPage.html')){
        new PhotographersPage().displayPhotographers(data); 
    }
    //Script section for homepage
    else {
        //storing tags
        let tagsList =[];
        const mainAccess = document.querySelector('.mainContent__link');
    
        //inner html for tags
        const dispTags =(tagsList, node) => {
            tagsList.forEach((tag)=>{
                node.innerHTML += `<a href="#" class="tag__link"><span class ="tag__link-tag">#${tag}</span></a>`
            })
        };
         //-------adding div on scroll event
        window.addEventListener("scroll", () => {
        // console.log(window.scrollY);
            if (window.scrollY >= 10) {
            mainAccess.style.display = "unset";
            } else {
            mainAccess.style.display = "none";
            }
        });
                
        //Section Photograher Cards
        data.photographers.map(photographe => {
            const photographersContainer = document.querySelector('.photographers__container');
            const photographerCard = document.createElement('article');
            photographerCard.className += "photographer__card"
            //adding tags to variable x
            photographe.tags.map(el =>{
                if(tagsList.includes(el) != true){
                tagsList.push(el);
                } 
            });

            
            //html template for article
            let str =`
                <a href="./photographerPage.html?id=${photographe.id}" class="link__photographer">
                    <div class="photographer__img">
                        <img src="Medias/photoID/${photographe.portrait}" alt="">
                    </div>
                    <h2 class="photographer__name">
                        ${photographe.name}
                    </h2>
                </a>
                <p class="photographer__location">
                    ${photographe.city}, ${photographe.country}
                </p>
                <p class="photographer__devise">
                    ${photographe.tagline}
                </p>
                    
                <p class="photographer__price">
                     ${photographe.price}€/jour
                </p>
                <div class="tag_container">${photographe.tags.map(tag =>
                    `<a href="#" class="tag__link"><span class="tag__link-tag">#${tag}</span></a>`).join(" ")}
                </div>
            `;

            photographersContainer.appendChild(photographerCard);
            photographerCard.innerHTML += str;
        })//End of section photographer card
        
        // Display tags in navbar
        dispTags(tagsList, document.querySelector(".nav-bar"));
        
        // Filter photographers when tag is clicked or when keybord "Enter" is pressed in navbar
        filterTags();
        
    }//End of script section for homepage
})//End of new object
.catch(() => {
    alert("Problème d'accès aux données")
});
