let slideIndex = 0;
let slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
let timer = null;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    timer = setTimeout(showSlides, 2000); 
}

function changeSlide(n) {
    clearTimeout(timer); 
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

window.onload = showSlides; 
