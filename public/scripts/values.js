var carouselIndexx = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("my_values");
    var value_dots = document.getElementsByClassName("value_dot");
    for (i = 0; i < x.length; i++) {
        if (window.innerWidth > 690
            || document.documentElement.clientWidth > 690
            || document.body.clientWidth > 690) {
            x[i].style.display = "block"; 
            // value_dots.style.display = "none"; 
        } else {
            x[i].style.display = "none";
            // value_dots.style.display = "block"; 
        }
      
    }
    carouselIndexx++;
    if (carouselIndexx > x.length) {carouselIndexx = 1}
    for (i = 0; i < value_dots.length; i++) {
         if (window.innerWidth > 690
            || document.documentElement.clientWidth > 690
            || document.body.clientWidth > 690) {
            value_dots[i].style.display = "none";
            value_dots[i].className = value_dots[i].className.replace(" value_dot_active", "");
        } else {
            value_dots[i].style.display = "inline-block";
            value_dots[i].className = value_dots[i].className.replace(" value_dot_active", "");
        }

        // value_dots[i].className = value_dots[i].className.replace(" value_dot_active", "");
    }
    x[carouselIndexx-1].style.display = "block"; 
    value_dots[carouselIndexx-1].className += " value_dot_active";
    setTimeout(carousel, 2000); 
}