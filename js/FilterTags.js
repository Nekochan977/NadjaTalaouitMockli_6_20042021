"use stric";

export function filterTags() {
    document.querySelectorAll(".tag__link-tag").forEach((tagLink)=>{
        const articles = document.querySelectorAll('article');
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
                const articles = document.querySelectorAll('article');
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