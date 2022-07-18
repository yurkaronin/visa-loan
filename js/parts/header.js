// прилипающая шапка
window.onscroll = function showHeader() {

  if (window.pageYOffset > 200) {
    header.classList.add('header--sticky');


  } else {
    header.classList.remove('header--sticky');

  }

}
