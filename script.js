const navButton = document.querySelector('.navigation__button');
const navBottom = document.querySelector('.nav-bottom');
const sec_info = document.querySelector('.sec-info');
const sec_products = document.querySelector('.sec-products');
const sec_counter = document.querySelector('.sec-counter');
const sec_card = document.querySelector('.sec-card');
const sec_download = document.querySelector('.sec-download');
const sec_looking_for = document.querySelector('.sec-looking-for');
const sec_form = document.querySelector('.sec-form');
const nav_home = document.getElementById('home');
const nav_about = document.getElementById('about');
const nav_products = document.getElementById('products');
const nav_references = document.getElementById('references');
const nav_hire = document.getElementById('hire');
const nav_contact = document.getElementById('contact');
const top_button = document.getElementById('top-button');

window.onresize = reportWindowSize;

navButton.addEventListener('click', function(){
    navBottom.classList.toggle("nav-bottom-show");
});

const body = document.querySelector('#width');

function reportWindowSize() {
  var bodyWidth = window.innerWidth;
  if(bodyWidth > 900) {
    navButton.style.display = "none";
  }
  else {
    navButton.style.display = "block";
  }
}

nav_products.addEventListener('click',function(e){
  e.preventDefault();
  sec_card.scrollIntoView({behavior: 'smooth'});
});

nav_references.addEventListener('click',function(e){
  e.preventDefault();
  sec_counter.scrollIntoView({behavior: 'smooth'});
});

nav_contact.addEventListener('click',function(e){
  e.preventDefault();
  sec_form.scrollIntoView({behavior: 'smooth'});
});

top_button.addEventListener('click', function(e){
  e.preventDefault();
  sec_products.scrollIntoView({behavior: 'smooth'});
});

nav_hire.addEventListener('click', function(e){
  e.preventDefault();
  sec_looking_for.scrollIntoView({behavior: 'smooth'});
});
