// HTML nodes

// const header = document.querySelector('#main-header');
// const logo = document.querySelector('.logo');

// Getting JSON data

fetch('./data.json')
.then(function(res){
    return res.json();
})
.then(function(data){
    const photographers = data.photographers;
    
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

    

    const dispPhotographers = (photographers, node)=>{

        
        
        let str = '';
        photographers.forEach((p) =>{
            let srcImage = `./images/samples/pPhotos${p.portrait}`
            str += `
        <article class="photographer__card">
            <div class="photographer__img">
                <img src=${srcImage}/>
            </div>
            <h2 class="photographer__name">
                ${p.name}
            </h2>
            <p class="photographer__location">
                ${p.city}, ${p.country}
            </p>
            <p class="photographer__devise">
                ${p.tagline}
            </p>
            <p class="photographer__price">
                ${p.price}€
            </p>
            <div class="photographer__tags">
                ${p.tags}
            </div>
            
        
        </article>
        `
        })
        
        node.innerHTML = str;

        
    }

    dispPhotographers(photographers, document.querySelector('.photographers__container'));
    
})