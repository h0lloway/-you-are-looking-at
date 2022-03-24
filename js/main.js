// HEADER // HEADER // HEADER // HEADER // HEADER // HEADER 

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {


  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    // scroll down
    header.classList.add('hide');
  }
  else if (scrollPosition() < lastScroll && containHide()) {
    // scroll up
    header.classList.remove('hide');
  }


  lastScroll = scrollPosition();
});

// ПЛАВНЫЕ ЯКОРЯ

$('a[href*="#"]').on('click', function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 600);
  return false;
});

// BURGER

$(document).ready(function () {
  $('.nav__burger').click(function (event) {
    $('.nav__burger,.nav__list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// SWICH THEME


// let lightTheme = document.querySelector(".swich-theme-btn-light");
// let darkTheme = document.querySelector(".swich-theme-btn-dark");


// lightTheme.addEventListener("click", function () {
//   this.style.display = "none";
//   darkTheme.style.display = "block";


//   darkTheme.addEventListener("click", function () {
//     this.style.display = "none";
//     lightTheme.style.display = "block";
//   });
// });

// TOOLTIPS

tippy('.js-tooltip', {
  theme: 'projects-tooltip',

  animation: 'fade',
  // followCursor: true,
  delay: 300,

  placement: "top",
  allowHTML: !0,
  role: "tooltip",
  trigger: "mouseenter focus click",
  hideOnClick: !0,

  // trigger: 'click',
  // trigger: 'focus',
  maxWidth: 250
});


