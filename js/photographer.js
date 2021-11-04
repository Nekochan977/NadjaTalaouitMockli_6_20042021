'use strict'

export default class PhotographersPage{
    displayPhotographers(data){
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
}