// Mobile menu toggle
document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }
}

// Slider
const swiper = new Swiper('.portfolio__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 56,
    speed: 800,
     
    navigation: {
        prevEl: '.portfolio__arrow--left',
        nextEl: '.portfolio__arrow--right ',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            autoheight: true,
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 56,
        },
    },
});

// Tabs
const tabNavItems = document.querySelectorAll('.navigation-experience__title');
const tabItems = document.querySelectorAll('.content-experience__body');
document.addEventListener('click', function (e){
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest('.navigation-experience__title')) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains('active')) {
        currentActiveIndex = index;
         tabNavItem.classList.remove('active');
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index;
     }
    });
    targetElement.classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active');
  }
});
    