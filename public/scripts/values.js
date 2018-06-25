var carouselIndexx = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("my_values");
    for (i = 0; i < x.length; i++) {
        if (window.innerWidth > 690
            || document.documentElement.clientWidth > 690
            || document.body.clientWidth > 690) {
            x[i].style.display = "block"; 
        } else {
            x[i].style.display = "none"; 
        }
      
    }
    carouselIndexx++;
    if (carouselIndexx > x.length) {carouselIndexx = 1} 
    x[carouselIndexx-1].style.display = "block"; 
    setTimeout(carousel, 2000); 
}