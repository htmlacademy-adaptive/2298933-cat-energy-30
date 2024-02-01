/* в этот файл добавляет скрипты*/
const siteList = document.querySelector('.site-list');
const navToggle = document.querySelector('.main-nav__toggle');

siteList.classList.remove('site-list--nojs');
navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.onclick = function() {
  if (siteList.classList.contains('site-list--open')) {
    siteList.classList.remove('site-list--open');
    siteList.classList.add('site-list--close"');
  } else {
    siteList.classList.add('site-list--open');
    siteList.classList.remove('site-list--close');
  }
};
