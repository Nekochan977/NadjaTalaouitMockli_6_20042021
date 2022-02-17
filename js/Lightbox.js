"use stric";

export function showLightbox(title) {
  //lightbox
  //queryselectors & variables
  const totalLikesDiv = document.querySelector(".likesAndPrice");
  const header = document.getElementById("main-header");
  const idSection = document.querySelector(".photographer__id__section");
  const listbox = document.querySelector(".listbox_container");
  const images = document.querySelectorAll(".photo"); //Returns nodeList of images
  const lightboxContainer = document.getElementById("lightbox");
  const slides = document.querySelector(".slides");
  const closeLibobxBtn = document.querySelector(".close-lightbox");
  const lightboxBtns = document.querySelectorAll(".lightbox-btn");
  const gallerySection = document.querySelector(".gallery");
  const lightbox = [];
  const lastImage = lightbox.length -1;
  let id = [];
  let activeImage;
  console.log(lastImage);

  //CSS modification when lightbox is open
  lightboxContainer.classList.add("active");
  gallerySection.style.display = "none";
  header.style.display = "none";
  idSection.style.display = "none";
  totalLikesDiv.style.display = "none";
  listbox.style.display = "none";

  images.forEach(function (element) {
    lightbox.push({ title: element.title, src: element.src });
  });

  id = lightbox.findIndex((element) => element.title == title);
  
  let slideHTML = "";
  while (slides.firstChild) {
    slides.removeChild(slides.firstChild);
  }
  
  if (lightbox[id].src.includes("mp4")) {
    slideHTML = `<video controls class="lightbox-photo" title="${lightbox[id].title}" type="video/mp4" src="${lightbox[id].src}"></video>
    <p class="photo__title">${lightbox[id].title}</p>`;
  } else {
    slideHTML = `<img class="lightbox-photo" title="${lightbox[id].title}" src="${lightbox[id].src}">
    <p class="photo__title">${lightbox[id].title}</p>`;
  }
  slides.innerHTML += slideHTML;

  const transitionSlidesLeft = () => {
    id--;
    while (slides.firstChild) {
      slides.removeChild(slides.firstChild);
    }
    if (lightbox[id].src.includes("mp4")) {
      slideHTML = `<video controls class="lightbox-photo" title="${lightbox[id].title}" type="video/mp4" src="${lightbox[id].src}"></video>
      <p class="photo__title">${lightbox[id].title}</p>`;
    } else {
      slideHTML = `<img class="lightbox-photo" title="${lightbox[id].title}" src="${lightbox[id].src}">
      <p class="photo__title">${lightbox[id].title}</p>`;
    }

    slides.innerHTML += slideHTML;
  };
  const transitionSlidesRight = () => {
    id++;
    while (slides.firstChild) {
      slides.removeChild(slides.firstChild);
    }
    if (lightbox[id].src.includes("mp4")) {
      slideHTML = `<video controls class="lightbox-photo" title="${lightbox[id].title}" src="${lightbox[id].src}" type="video/mp4"></video>
      <p class="photo__title">${lightbox[id].title}</p>`;
    } else {
      slideHTML = `<img class="lightbox-photo" title="${lightbox[id].title}" src="${lightbox[id].src}">
      <p class="photo__title">${lightbox[id].title}</p>`;
    }

    slides.innerHTML += slideHTML;
  };

  const transitionSlidesHandler = (moveItem) => {
    moveItem.includes("prev")
      ? transitionSlidesLeft()
      : transitionSlidesRight();
  };
  lightboxBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      transitionSlidesHandler(e.currentTarget.id);
    });
  });

  // close lightbox
  closeLibobxBtn.addEventListener("click", () => {
    lightboxContainer.classList.remove("active");
    header.style.display = "block";
    idSection.style.display = "flex";
    gallerySection.style.display = "flex";
    totalLikesDiv.style.display = "flex"
    listbox.style.display = "flex";
  });
}
