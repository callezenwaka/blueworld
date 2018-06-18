const nav_menu_toggle = document.querySelector('#nav_menu_toggle');
nav_menu_toggle.addEventListener('touchend',() => {
    const nav_slide_out = document.querySelector('#nav_slide_out');
    const page_overlay = document.querySelector('#page_overlay');
    const search_form_active = document.querySelector('.search_form_active');
    if(search_form_active) {
        search_form_active.classList.toggle('search_form_active');
    }
    nav_slide_out.classList.toggle('nav_slide_in');
    page_overlay.classList.toggle("page_overlay_active");
    nav_menu_toggle.classList.toggle('change');
})

const search_icon = document.querySelector('#search_icon');
search_icon.addEventListener('touchend',() => {
    const nav_slide_in = document.querySelector('.nav_slide_in');
    const page_overlay = document.querySelector('#page_overlay');
    const nav_menu_toggle = document.querySelector('#nav_menu_toggle');
    const search_form = document.querySelector('#search_form');
    if(nav_slide_in) {
        nav_slide_in.classList.toggle('nav_slide_in');
        nav_menu_toggle.classList.toggle('change');
        page_overlay.classList.toggle("page_overlay_active");
    }
    search_form.classList.toggle('search_form_active');
})
search_icon.addEventListener('click',() => {
    const search_form = document.querySelector('#search_form')
    search_form.classList.toggle('search_form_active')
})

// setTimeout( () => {
//     const nav_slide_out = document.querySelector('.nav_slide_in');
//     nav_slide_out.classList.remove('spinner_3');
// },100);
window.addEventListener('touchend', function(event) {
    const nav_menu_toggle = document.querySelector('#nav_menu_toggle');
    const nav_slide_out = document.querySelector('#nav_slide_out');
    const page_overlay = document.querySelector('#page_overlay');
    if (event.target === page_overlay) {
        nav_slide_out.classList.toggle("nav_slide_in");
        nav_menu_toggle.classList.toggle("change");
        page_overlay.classList.toggle("page_overlay_active");
    }
});
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    const page_to_the_top = document.querySelector('#page_to_the_top');
    if (window.pageYOffset > 350) {
        header.classList.add('header_fixed');
        page_to_the_top.classList.add('page_to_the_top_active');
    } else {
        header.classList.remove('header_fixed');
        page_to_the_top.classList.remove('page_to_the_top_active')
    }
});
const page_to_the_top = document.querySelector('#page_to_the_top')
    .addEventListener('click', (event) => {
        event.preventDefault();
        setTimeout( () => {
            window.scrollTo(0, 0)
        },500);
    })