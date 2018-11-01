//Open and closes the menu icon in mobile mode
const nav_menu_toggle = document.querySelector('#nav_menu_toggle');
nav_menu_toggle.addEventListener('click',() => {
    const nav_menu = document.querySelector('#nav_menu');
    const search_form_active = document.querySelector('.search_form_active');
    const page_overlay = document.querySelector('#page_overlay');
    //const page_to_the_top = document.querySelector('#page_to_the_top');
    if(search_form_active) {
        search_form_active.classList.toggle('search_form_active');
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
    search_form.classList.toggle('search_form_active');
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
    if (window.pageYOffset > 350) {
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
// Toggle footer main content
const footer_main_company = document.querySelector('.footer_main_company')
const footer_main_support = document.querySelector('.footer_main_support')
const footer_main_connect = document.querySelector('.footer_main_connect')
const footer_main_content_company = document.querySelector('.footer_main_content_company');
const footer_main_content_support = document.querySelector('.footer_main_content_support');
const footer_main_content_connect = document.querySelector('.footer_main_content_connect');
const footer_menu_item_company_minus = document.querySelector('.company_minus');
const footer_menu_item_company_plus = document.querySelector('.company_plus');
const footer_menu_item_support_minus = document.querySelector('.support_minus');
const footer_menu_item_support_plus = document.querySelector('.support_plus');
const footer_menu_item_connect_minus = document.querySelector('.connect_minus');
const footer_menu_item_connect_plus = document.querySelector('.connect_plus');
footer_main_company.addEventListener('click',() => {
    footer_main_content_company.classList.toggle('footer_main_content_show')
    footer_main_content_support.classList.remove('footer_main_content_show')
    footer_main_content_connect.classList.remove('footer_main_content_show')
    footer_menu_item_company_minus.classList.toggle('minus_show')
    footer_menu_item_company_plus.classList.toggle('plus_hide')
    footer_menu_item_support_minus.classList.remove('minus_show')
    footer_menu_item_support_plus.classList.remove('plus_hide')
    footer_menu_item_connect_minus.classList.remove('minus_show')
    footer_menu_item_connect_plus.classList.remove('plus_hide')
})
footer_main_support.addEventListener('click',() => {
    footer_main_content_support.classList.toggle('footer_main_content_show')
    footer_main_content_company.classList.remove('footer_main_content_show')
    footer_main_content_connect.classList.remove('footer_main_content_show')
    footer_menu_item_support_minus.classList.toggle('minus_show')
    footer_menu_item_support_plus.classList.toggle('plus_hide')
    footer_menu_item_company_minus.classList.remove('minus_show')
    footer_menu_item_company_plus.classList.remove('plus_hide')
    footer_menu_item_connect_minus.classList.remove('minus_show')
    footer_menu_item_connect_plus.classList.remove('plus_hide')
})
footer_main_connect.addEventListener('click',() => {
    footer_main_content_connect.classList.toggle('footer_main_content_show')
    footer_main_content_company.classList.remove('footer_main_content_show')
    footer_main_content_support.classList.remove('footer_main_content_show')
    footer_menu_item_connect_minus.classList.toggle('minus_show')
    footer_menu_item_connect_plus.classList.toggle('plus_hide')
    footer_menu_item_company_minus.classList.remove('minus_show')
    footer_menu_item_company_plus.classList.remove('plus_hide')
    footer_menu_item_support_minus.classList.remove('minus_show')
    footer_menu_item_support_plus.classList.remove('plus_hide')
})
// // Toggles the mission and vision content
// const mission = document.querySelector('#mission')
// const vision = document.querySelector('#vision')
// mission.addEventListener('click',() => {
//     const mission_content = document.querySelector('.mission_content')
//     const vision_content = document.querySelector('.vision_content')
//     mission_content.style.display = 'block'
//     vision_content.style.display = 'none'
// })
// vision.addEventListener('click',() => {
//     const mission_content = document.querySelector('.mission_content')
//     const vision_content = document.querySelector('.vision_content')
//     mission_content.style.display = 'none'
//     vision_content.style.display = 'block'
// })

