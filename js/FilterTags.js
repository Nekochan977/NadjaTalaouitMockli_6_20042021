"use stric";

export function filterTags() {
    const articles = document.querySelectorAll('article');
    document.querySelectorAll(".tag__link-tag").forEach((tagLink)=>{
        tagLink.addEventListener("click", (e)=>{
            const tag = e.currentTarget.textContent.slice(1); 
            articles.forEach((elt)=>{
                if(elt.lastElementChild.textContent.includes(tag) ==true){
                    elt.style.display ="";
                }else{
                    elt.style.display ="none";
                }
                return elt;
            })     
        });
    });
    document.querySelector(".nav-bar").childNodes.forEach((elt)=>{
        elt.addEventListener("keydown",(evt)=>{
            if(evt.code==="Enter"){
                const tag = evt.currentTarget.textContent;
                articles.forEach((elt)=>{
                if(elt.lastElementChild.textContent.includes(tag) ==true){
                    elt.style.display ="";
                }else{
                    elt.style.display ="none";
                }
                return elt;
            })
            } 
        })
    });
    
}