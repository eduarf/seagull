const navButton = document.querySelector('.navigation__button');
const navBottom = document.querySelector('.nav-bottom');


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

document.querySelectorAll('.nav-top__link').forEach(function(el){
  el.addEventListener('click',function(e){
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(`${id}`).scrollIntoView({behavior: 'smooth'});
  });
});
