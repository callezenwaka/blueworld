//Open and closes the menu icon in mobile mode
const nav_menu_toggle = document.querySelector('#nav_menu_toggle');
nav_menu_toggle.addEventListener('click',() => {
    const nav_menu = document.querySelector('#nav_menu');
    const search_form_active = document.querySelector('.search_form_active');
    const page_overlay = document.querySelector('#page_overlay');
    //const page_to_the_top = document.querySelector('#page_to_the_top');
    if(search_form_active) {
        search_form_active.classList.toggle('search_form_active');
        search_icon.classList.remove('close_search');
    }
    nav_menu.classList.toggle('nav_menu_show');
    nav_menu_toggle.classList.toggle('change');
    page_overlay.classList.toggle("page_overlay_active");
    //page_to_the_top.classList.toggle('page_to_the_top_active')
})

// Hides and shows search bar when search icon is touch in mobile mode
const search_icon = document.querySelector('#search_icon');
search_icon.addEventListener('click',() => {
    const nav_menu_show = document.querySelector('.nav_menu_show');
    const nav_menu_toggle = document.querySelector('#nav_menu_toggle');
    const search_form = document.querySelector('#search_form');
    const page_overlay = document.querySelector('#page_overlay');
    if(nav_menu_show) {
        nav_menu_show.classList.toggle('nav_menu_show');
        nav_menu_toggle.classList.toggle('change');
        page_overlay.classList.toggle("page_overlay_active");
    }
    search_icon.classList.toggle('close_search');
    search_form.classList.toggle('search_form_active');
    search_form.classList.remove('close_search');
})

// Toggle search bar
const cancel_search = document.querySelector('.cancel_search');
cancel_search.addEventListener('click',() => {
    search_form.classList.toggle('close_search');
    search_form.classList.remove('search_form_active');
    search_icon.classList.remove('close_search');
})


// search_icon.addEventListener('click',() => {
//     const search_form = document.querySelector('#search_form');
//     search_form.classList.toggle('search_form_active');
// })
// Removes the hero spinner after 300msec
// setTimeout( () => {
//     const hero_section = document.querySelector('.hero_section');
//     hero_section.classList.remove('spinner_3');
// },300);

// Toggles an overlay on the screen in mobile mode
window.addEventListener('touchend', function(event) {
    const nav_menu_toggle = document.querySelector('#nav_menu_toggle');
    const nav_menu = document.querySelector('#nav_menu');
    const page_overlay = document.querySelector('#page_overlay');
    if (event.target === page_overlay) {
        nav_menu.classList.toggle("nav_menu_show");
        nav_menu_toggle.classList.toggle("change");
        page_overlay.classList.toggle("page_overlay_active");
    }
});

// Display a 'TOP' button in full screen mode document.documentElement.scrollHeight
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    const page_to_the_top = document.querySelector('#page_to_the_top');
    const page_overlay = document.querySelector('#page_overlay');
    const nav_menu_toggle = document.querySelector('#nav_menu_toggle');
    const nav_menu = document.querySelector('#nav_menu');
    const search_form_active = document.querySelector('.search_form_active');
    if (search_form_active) {
        header.classList.add('header_fixed');
    }
    else if (window.pageYOffset > 350) {
        header.classList.add('header_fixed');
        page_to_the_top.classList.add('page_to_the_top_active');
    }  else { 
        header.classList.remove('header_fixed');
        page_to_the_top.classList.remove('page_to_the_top_active')
        page_overlay.classList.remove("page_overlay_active");
        nav_menu_toggle.classList.remove('change');
        nav_menu.classList.remove('nav_menu_show');
    }
});

// Delays 500msec when to the top button is clicked
const page_to_the_top = document.querySelector('#page_to_the_top')
    .addEventListener('click', (event) => {
        event.preventDefault();
        setTimeout( () => {
            window.scrollTo(0, 0)
        },500);
    })

// Add copyright year dynamically to the page footer
const d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();

// Toggle search bar
const see_all = document.querySelector('.see_all');
see_all.addEventListener('click',() => {
    const see_all_products = document.querySelector('.products');
    see_all_products.classList.remove('hide_all_products');
    see_all_products.classList.add('see_all_products');
    see_all.classList.add('hide_all_products');
})