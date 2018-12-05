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