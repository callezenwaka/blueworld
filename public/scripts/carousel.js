var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_dot", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active_dot";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//Product script
var productIndex = 0;
showProductSlides();

function showProductSlides() {
    var i;
    var slides = document.getElementsByClassName("product_slides");
    var dots = document.getElementsByClassName("product_dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    productIndex++;
    if (productIndex > slides.length) {productIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_product_dot", "");
    }
    slides[productIndex-1].style.display = "block";  
    dots[productIndex-1].className += " active_product_dot";
    setTimeout(showProductSlides, 2000); // Change image every 2 seconds
}