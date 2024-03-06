// Приветствие по времени

const time = new Date().getHours();
let greet;

if (time >= 0 && time < 6) {
  greet = 'Доброй ночи!';
}

else if (time >= 6 && time < 12) {
  greet = 'Доброе утро!';
}

else if (time >= 12 && time < 17) {
  greet = 'Добрый день!';
}

else if (time >= 17 && time <= 23) {
  greet = 'Добрый вечер!';
}

hi.innerText = greet;

// BURGER

const hamb = document.querySelector("#hamb");
const menuWrap = document.querySelector("#menuwrap");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  menuWrap.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("lock");
  renderMenuWrap();
}

function renderMenuWrap() {
  menuWrap.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  menuWrap.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("lock");
}

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
    header.setAttribute('style', 'animation: none;');
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

// ====== // ====== // ====== // ====== // // ====== // ====== // 

// const { matches: userPrefersDark } = window.matchMedia('(prefers-color-scheme: dark)');

// const toggle = document.querySelector('.toggle-input');
// toggle.checked = userPrefersDark;

// toggle.addEventListener('change', (e) => {
//   const theme = e.target.checked ? 'dark' : 'light';
//   document.documentElement.dataset.theme = theme;
// });



// фильтр для портфолио

const listFilter = document.querySelector('.list-filter');
items = document.querySelectorAll('.item-portf')
listItems = document.querySelectorAll('.list-filter__item')


function filter() {
  listFilter.addEventListener('click', event => {
    const targetId = event.target.dataset.id
    const target = event.target

    if (target.classList.contains('list-filter__item')) {
      listItems.forEach(listItem => listItem.classList.remove('active'))
      target.classList.add('active')
    }


    switch (targetId) {
      case 'all':
        getItems('portfolio__list-item')
        break
      case 'html':
        getItems(targetId)
        break
      case 'email':
        getItems(targetId)
        break
      case 'vue':
        getItems(targetId)
        break
      case 'js':
        getItems(targetId)
        break
    }
  })
}

filter()

function getItems(className) {
  items.forEach(item => {
    if (item.classList.contains(className)) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })
}

// работы в портфолио

// const showMore = document.querySelector('.more-item-btn');
// const productsLength = document.querySelectorAll('.item-portf').length;
// let items = 6;

// showMore.addEventListener('click', () => {
//   items += 3
//   const array = Array.from(document.querySelector('.portfolio__list').children);
//   const visItems = array.slice(0, items);

//   visItems.forEach(el => el.classList.add('is-visible'));


//   if (visItems.length === productsLength) {
//     showMore.style.display = 'none';
//   }
// });


// animation

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

// (function () {
//   var elementShow = document.querySelectorAll('.element-show');

//   var observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
//         return;
//       }

//       if (entry.isIntersecting) {
//         entry.target.classList.add('element-animation');
//       }
//     });
//   });

//   observer.observe(elementShow);
// })();