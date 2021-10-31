'use strict';

import DataReader from "./DataReader.js";

// new Object
new DataReader().getData().then((data) => {
    //Script section for photographerPage
    if(window.location.pathname.includes('/photographerPage.html')){
        const id = window.location.search.split("id=")[1];
        const x = data.photographers.filter(photographer => photographer.id == id);
        const photographer__info = document.querySelector('.photographer__info');
        const photographe__header = document.createElement('div');
        // html template for photographer info
        let info = `
            <h1>${x[0].name}</h1>`;
            photographer__info.appendChild(photographe__header);
            photographe__header.innerHTML = info;
    }
    //Script section for homepage
    else {
        data.photographers.map(photographe => {
            const photographersContainer = document.querySelector('.photographers__container');
            const photographerCard = document.createElement('article');
            
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
            photographerCard.innerHTML= str;
        })
    }
})
.catch(() => {
    alert("Problème d'accès aux données")
}
);

