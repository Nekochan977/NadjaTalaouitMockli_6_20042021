// Getting JSON data

fetch("./data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    const photographers = data.photographers;
    //-------adding div on scroll event
    const mainAccess = document.querySelector('.mainContent__link');
    
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      if (window.scrollY >= 60) {
        mainAccess.style.display = "unset";
      }
    })

    //--------creation new tag objects
    let tags = {};

    //get tags elements from array photographers
    data.photographers.forEach((el) => {
      //récupérer un de chaque tag
      el.tags.forEach(function (tag) {
        tags[tag] = 1; 
      });
    });

    tags = Object.keys(tags);
    

    //---------create new html content for the nav-bar
    const dispTags = (tags, node) => {
      tags.forEach((tag) => {
        // creating html nodes
        node.innerHTML += `<a href="#" class="tag__link"><span class ="tag__link-tag">#${tag}</span></a>`;
      });
    };
    

    //--------creation of photographers cards with dynamic html elements
    const dispPhotographers = (photographers, node) => {
      let str = "";
      //-------creating photographers card images & html contents
      photographers.forEach((p) => {
        
        let srcImage = `./images/samples/pPhotos/${p.portrait}`;

        str += `
            <article class="photographer__card">
                <a href="#" class="link__photographer">
                    <div class="photographer__img">
                         <img src="${srcImage}"/>
                    </div>
                    <h2 class="photographer__name">
                        ${p.name}
                    </h2>
                </a>
                <p class="photographer__location">
                    ${p.city}, ${p.country}
                </p>
                <p class="photographer__devise">
                    ${p.tagline}
                </p>
                <p class="photographer__price">
                    ${p.price}€/jour
                </p> `;
        str += `
            <div class="photographer__tags">
                
            `;

        p.tags.forEach((el) => {
          str += `<a href="#" class="tag__link"><spanclass ="tag__link-tag">#${el}</spanclass></a>`;
        });

        str += `
                </div>
            
        
            </article>
            `;
      });
      //-----adding html nodes
      node.innerHTML = str;
    };
    
    //-----Function for filtering photographers
    function filterPhotographers (arr, filter){
      const arrayFiltered = arr.filter((el)=>{
        return el.tags.includes(filter)
      })

      return arrayFiltered;
    } 
    
    //------adding event to the nav-bar to filter the photographers with same tags
    document.querySelector('.nav-bar').addEventListener("click", (e) => {
      
      const filtre = e.target.textContent.slice(1);
      const filteredPhotographers = filterPhotographers(photographers, filtre);
      dispPhotographers(filteredPhotographers,document.querySelector('.photographers__container'))
      
    })
    
     //------adding tags into nav-bar
    dispTags(tags, document.querySelector(".nav-bar"));

     //------adding phtographers-cards into photographers__container
    dispPhotographers(
      photographers,
      document.querySelector(".photographers__container")
    );
  });
