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
    
    let tags = {}
    data.photographers.forEach(el => {
        el.tags.forEach(function(tag){
            tags[tag]=1;
        
        })
    });
    
    tags = Object.keys(tags);
    console.log(tags);
   
    const dispTags = (tags, node) => {
        tags.forEach(tag => {
            node.innerHTML += `<span>${tag}</span>`;
        })
        
        
    }
    dispTags(tags, document.querySelector('.nav-bar'));
   
    console.log(tags);
})