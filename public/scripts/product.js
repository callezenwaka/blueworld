const prod_body_cream = document.querySelector('.prod_body_cream');
const prod_body_cream_toggle = document.querySelector('.prod_body_cream_toggle');
const prod_body_cream_up = document.querySelector('.prod_body_cream_up');
const prod_body_cream_down = document.querySelector('.prod_body_cream_down');
prod_body_cream.addEventListener('click',(event) => {
    event.preventDefault();    
    prod_body_cream_toggle.classList.toggle('prod_drop_show');
    prod_lotions_toggle.classList.remove('prod_drop_show');
    prod_hair_creams_toggle.classList.remove('prod_drop_show');
    prod_shampoos_toggle.classList.remove('prod_drop_show');
    prod_conditioners_toggle.classList.remove('prod_drop_show');
    prod_soaps_toggle.classList.remove('prod_drop_show');
    prod_soaps_up.classList.remove('prod_up_show');
    prod_soaps_down.classList.remove('prod_down_hide');
    prod_conditioners_up.classList.remove('prod_up_show');
    prod_conditioners_down.classList.remove('prod_down_hide');
    prod_shampoos_up.classList.remove('prod_up_show');
    prod_shampoos_down.classList.remove('prod_down_hide');
    prod_hair_creams_up.classList.remove('prod_up_show');
    prod_hair_creams_down.classList.remove('prod_down_hide');
    prod_lotions_up.classList.remove('prod_up_show');
    prod_lotions_down.classList.remove('prod_down_hide');
    prod_body_cream_up.classList.toggle('prod_up_show');
    prod_body_cream_down.classList.toggle('prod_down_hide');
})

const prod_lotions = document.querySelector('.prod_lotions');
const prod_lotions_toggle = document.querySelector('.prod_lotions_toggle');
const prod_lotions_up = document.querySelector('.prod_lotions_up');
const prod_lotions_down = document.querySelector('.prod_lotions_down');
prod_lotions.addEventListener('click',(event) => {
    event.preventDefault();    
    prod_lotions_toggle.classList.toggle('prod_drop_show');
    prod_body_cream_toggle.classList.remove('prod_drop_show');
    prod_hair_creams_toggle.classList.remove('prod_drop_show');
    prod_shampoos_toggle.classList.remove('prod_drop_show');
    prod_conditioners_toggle.classList.remove('prod_drop_show');
    prod_soaps_toggle.classList.remove('prod_drop_show');
    prod_soaps_up.classList.remove('prod_up_show');
    prod_soaps_down.classList.remove('prod_down_hide');
    prod_conditioners_up.classList.remove('prod_up_show');
    prod_conditioners_down.classList.remove('prod_down_hide');
    prod_shampoos_up.classList.remove('prod_up_show');
    prod_shampoos_down.classList.remove('prod_down_hide');
    prod_hair_creams_up.classList.remove('prod_up_show');
    prod_hair_creams_down.classList.remove('prod_down_hide');
    prod_lotions_up.classList.toggle('prod_up_show');
    prod_lotions_down.classList.toggle('prod_down_hide');
    prod_body_cream_up.classList.remove('prod_up_show');
    prod_body_cream_down.classList.remove('prod_down_hide');
})

const prod_hair_creams = document.querySelector('.prod_hair_creams');
const prod_hair_creams_toggle = document.querySelector('.prod_hair_creams_toggle');
const prod_hair_creams_up = document.querySelector('.prod_hair_creams_up');
const prod_hair_creams_down = document.querySelector('.prod_hair_creams_down');
prod_hair_creams.addEventListener('click',(event) => {
    event.preventDefault();    
    prod_hair_creams_toggle.classList.toggle('prod_drop_show');
    prod_body_cream_toggle.classList.remove('prod_drop_show');
    prod_lotions_toggle.classList.remove('prod_drop_show');
    prod_shampoos_toggle.classList.remove('prod_drop_show');
    prod_conditioners_toggle.classList.remove('prod_drop_show');
    prod_soaps_toggle.classList.remove('prod_drop_show');
    prod_soaps_up.classList.remove('prod_up_show');
    prod_soaps_down.classList.remove('prod_down_hide');
    prod_conditioners_up.classList.remove('prod_up_show');
    prod_conditioners_down.classList.remove('prod_down_hide');
    prod_shampoos_up.classList.remove('prod_up_show');
    prod_shampoos_down.classList.remove('prod_down_hide');
    prod_hair_creams_up.classList.toggle('prod_up_show');
    prod_hair_creams_down.classList.toggle('prod_down_hide');
    prod_lotions_up.classList.remove('prod_up_show');
    prod_lotions_down.classList.remove('prod_down_hide');
    prod_body_cream_up.classList.remove('prod_up_show');
    prod_body_cream_down.classList.remove('prod_down_hide');
})

const prod_shampoos = document.querySelector('.prod_shampoos');
const prod_shampoos_toggle = document.querySelector('.prod_shampoos_toggle');
const prod_shampoos_up = document.querySelector('.prod_shampoos_up');
const prod_shampoos_down = document.querySelector('.prod_shampoos_down');
prod_shampoos.addEventListener('click',(event) => {
    event.preventDefault();    
    prod_shampoos_toggle.classList.toggle('prod_drop_show');
    prod_body_cream_toggle.classList.remove('prod_drop_show');
    prod_lotions_toggle.classList.remove('prod_drop_show');
    prod_hair_creams_toggle.classList.remove('prod_drop_show');
    prod_conditioners_toggle.classList.remove('prod_drop_show');
    prod_soaps_toggle.classList.remove('prod_drop_show');
    prod_soaps_up.classList.remove('prod_up_show');
    prod_soaps_down.classList.remove('prod_down_hide');
    prod_conditioners_up.classList.remove('prod_up_show');
    prod_conditioners_down.classList.remove('prod_down_hide');
    prod_shampoos_up.classList.toggle('prod_up_show');
    prod_shampoos_down.classList.toggle('prod_down_hide');
    prod_hair_creams_up.classList.remove('prod_up_show');
    prod_hair_creams_down.classList.remove('prod_down_hide');
    prod_lotions_up.classList.remove('prod_up_show');
    prod_lotions_down.classList.remove('prod_down_hide');
    prod_body_cream_up.classList.remove('prod_up_show');
    prod_body_cream_down.classList.remove('prod_down_hide');
})

const prod_conditioners = document.querySelector('.prod_conditioners');
const prod_conditioners_toggle = document.querySelector('.prod_conditioners_toggle');
const prod_conditioners_up = document.querySelector('.prod_conditioners_up');
const prod_conditioners_down = document.querySelector('.prod_conditioners_down');
prod_conditioners.addEventListener('click',(event) => {
    event.preventDefault();    
    prod_conditioners_toggle.classList.toggle('prod_drop_show');
    prod_body_cream_toggle.classList.remove('prod_drop_show');
    prod_lotions_toggle.classList.remove('prod_drop_show');
    prod_hair_creams_toggle.classList.remove('prod_drop_show');
    prod_shampoos_toggle.classList.remove('prod_drop_show');
    prod_soaps_toggle.classList.remove('prod_drop_show');
    prod_soaps_up.classList.remove('prod_up_show');
    prod_soaps_down.classList.remove('prod_down_hide');
    prod_conditioners_up.classList.toggle('prod_up_show');
    prod_conditioners_down.classList.toggle('prod_down_hide');
    prod_shampoos_up.classList.remove('prod_up_show');
    prod_shampoos_down.classList.remove('prod_down_hide');
    prod_hair_creams_up.classList.remove('prod_up_show');
    prod_hair_creams_down.classList.remove('prod_down_hide');
    prod_lotions_up.classList.remove('prod_up_show');
    prod_lotions_down.classList.remove('prod_down_hide');
    prod_body_cream_up.classList.remove('prod_up_show');
    prod_body_cream_down.classList.remove('prod_down_hide');
})

const prod_soaps = document.querySelector('.prod_soaps');
const prod_soaps_toggle = document.querySelector('.prod_soaps_toggle');
const prod_soaps_up = document.querySelector('.prod_soaps_up');
const prod_soaps_down = document.querySelector('.prod_soaps_down');
prod_soaps.addEventListener('click',(event) => {
    event.preventDefault();
    prod_soaps_toggle.classList.toggle('prod_drop_show');
    prod_body_cream_toggle.classList.remove('prod_drop_show');
    prod_lotions_toggle.classList.remove('prod_drop_show');
    prod_hair_creams_toggle.classList.remove('prod_drop_show');
    prod_shampoos_toggle.classList.remove('prod_drop_show');
    prod_conditioners_toggle.classList.remove('prod_drop_show');
    prod_soaps_up.classList.toggle('prod_up_show');
    prod_soaps_down.classList.toggle('prod_down_hide');
    prod_conditioners_up.classList.remove('prod_up_show');
    prod_conditioners_down.classList.remove('prod_down_hide');
    prod_shampoos_up.classList.remove('prod_up_show');
    prod_shampoos_down.classList.remove('prod_down_hide');
    prod_hair_creams_up.classList.remove('prod_up_show');
    prod_hair_creams_down.classList.remove('prod_down_hide');
    prod_lotions_up.classList.remove('prod_up_show');
    prod_lotions_down.classList.remove('prod_down_hide');
    prod_body_cream_up.classList.remove('prod_up_show');
    prod_body_cream_down.classList.remove('prod_down_hide');
})
