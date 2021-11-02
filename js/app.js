'use strict';

import DataReader from "./DataReader.js";

// new Object
new DataReader().getData().then((data) => {
    //Script section for photographerPage
    if(window.location.pathname.includes('/photographerPage.html')){
        const id = window.location.search.split("id=")[1];
        const x = data.photographers.filter(photographer => photographer.id == id);
        const photographerInfo = document.querySelector('.photographer__info');
        const photographeHeader = document.createElement('div');
        photographeHeader.className += "photographer__header";
        // html template for photographer info
        let info = `
            <h1>${x[0].name}</h1>
            <div class="photographer__img">
                <img src="Medias/photoID/${x[0].portrait}">
            </div>
            <p class="photographer__location">
                    ${x[0].city}, ${x[0].country}
                </p>
                <p class="photographer__devise">
                    ${x[0].tagline}
                </p>
                    
                <p class="photographer__price">
                     ${x[0].price}€/jour
                </p>
                <button class="contact">Contactez-moi</button> 
            `;
            photographerInfo.appendChild(photographeHeader);
            photographeHeader.innerHTML = info;
    }
    //Script section for homepage
    else {
        //storing tags
        let x =[];
        
        //Section Photograher Cards
        data.photographers.map(photographe => {
            const photographersContainer = document.querySelector('.photographers__container');
            const photographerCard = document.createElement('article');
            //adding tags to variable x
            photographe.tags.map(el =>{
                if(x.includes(el) != true){
                x.push(el);
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
        })
        const dispTags =(x, node) => {
            x.forEach((tag)=>{
                node.innerHTML += `<a href="#" class="tag__link"><span class ="tag__link-tag">#${tag}</span></a>`
            })
        };
        dispTags(x, document.querySelector(".nav-bar"));
    }
})
.catch(() => {
    alert("Problème d'accès aux données")
}
);
