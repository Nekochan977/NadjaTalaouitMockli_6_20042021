// HTML nodes

// const header = document.querySelector('#main-header');
// const logo = document.querySelector('.logo');

// Getting JSON data

fetch('./data.json')
.then(function(res){
    return res.json();
})
.then(function(data){
    // console.log(data);
    
    //creation new objects
    let tags = {};


    //récupérer les éléments tags dans data de l'array photographers
    data.photographers.forEach(el => {
        //récupérer un de chaque tag
        el.tags.forEach(function(tag){
            tags[tag]=1; //revoir avec Nissim cette partie
        })
    });
    
    tags = Object.keys(tags);
    console.log(tags);
    
    // créer un nouveau content html pour les tags
    const dispTags = (tags, node) => {
        tags.forEach(tag => {
            node.innerHTML += `<a href="#" class="tag-link"><span class ="tag-link__tag">#${tag}</span></a>`;
        })  
    }
    // faire apparaître les tags dans la nav-barre
    dispTags(tags, document.querySelector('.nav-bar'));

    //récupérer les éléments name dans data de l'array photographers

    const photographerName = data.photographers.map(photographer => `${photographer.name}`)
    console.log(photographerName);

    const dispNames = (photographerName, node) => {
        photographerName.forEach(photographer => {
            node.innerHTML += `<article class="photographer-card"> <h2 class="photographer-name">${photographer}</h2></article>`
        })
    }

    dispNames(photographerName, document.querySelector('.photographers-container'))
    
  
})