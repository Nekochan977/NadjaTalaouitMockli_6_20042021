'use strict';

import DataReader from "./DataReader.js";
import PhotographersPage from "./photographer.js"

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
    
        //inner html for tags
        const dispTags =(tagsList, node) => {
            tagsList.forEach((tag)=>{
                node.innerHTML += `<a href="#" class="tag__link"><span class ="tag__link-tag">#${tag}</span></a>`
            })
        };
                
        //Section Photograher Cards
        data.photographers.map(photographe => {
            const photographerCard = document.createElement('article');
            const photographersContainer = document.querySelector('.photographers__container');
            const photographerCard = document.createElement('article');
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
                        <img src="Medias/photoID/${photographe.portrait}">
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
                <a class="tag__link">${photographe.tags.map(tag =>
                    `<span class="tag__link-tag">${tag}</span>`).join(" ")}</a>
            `;

            photographersContainer.appendChild(photographerCard);
            photographerCard.innerHTML += str;
            
        })//End of section photographer card
        
        
        dispTags(tagsList, document.querySelector(".nav-bar"));
        
        // Filter photographers when tag of nav-bar is clicked
        document.querySelector('.nav-bar').addEventListener("click", (e)=> {
            const filter = e.target.textContent.slice(1);
            const articles = document.querySelectorAll('article');
            articles.forEach((article)=>{
                console.log(article.lastElementChild.textContent);  
                if (article.lastElementChild.textContent.includes(filter) == true){
                    article.style.display ="";
                }else{
                    article.style.display ="none";
                }
                return article;
                
            }) 
        })
    }//End of script section for homepage
})//End of new object
.catch(() => {
    alert("Problème d'accès aux données")
});
