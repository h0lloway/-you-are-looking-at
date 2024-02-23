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

// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 600,
  framesCount = 80;

anchors.forEach(function (item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function (e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    // запускаем интервал, в котором
    let scroller = setInterval(function () {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
      // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});

// BURGER

$(document).ready(function () {
  $('.nav__burger').click(function (event) {
    $('.nav__burger,.nav__list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// SWICH THEME

const toggleThemeBtn = document.getElementById('theme-btn');
const toggleThemeImg = document.getElementById('theme-img');


function setDarkTheme() {
  document.body.classList.add('dark')
  toggleThemeImg.src = 'img/moon.png'
  localStorage.theme = 'dark'
}

function setLightTheme() {
  document.body.classList.remove('dark')
  toggleThemeImg.src = 'img/sun.png'
  localStorage.theme = 'light'
}

toggleThemeBtn.addEventListener('click', () => {

  if (document.body.classList.contains('dark')) setLightTheme()
  else setDarkTheme()
})

if (localStorage.theme === 'dark') setDarkTheme()



// работы в портфолио

const showMore = document.querySelector('.more-item-btn');
const productsLength = document.querySelectorAll('.item-portf').length;
let items = 6;

showMore.addEventListener('click', () => {
  items += 3
  const array = Array.from(document.querySelector('.portfolio__list').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-visible'));


  if (visItems.length === productsLength) {
    showMore.style.display = 'none';
  }
});



jQuery(document).ready(function () {
  var btn = $('#up-arrow');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});

// Приветствие по времени

const hours = new Date().getHours();
let message;

if (hours > 16 && hours < 22) message = 'Добрый вечер!'
else message = 'Доброй ночи!'

if (hours > 6 && hours < 12) message = 'Доброе утро!'
else message = 'Добрый день!'

hi.innerText = message;