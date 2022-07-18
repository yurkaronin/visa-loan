// Глобальные переменные
let slider = document.getElementById('slider');
let sumInput = document.querySelector('.price-value');

let header = document.querySelector('.js-header');
let headerHeight = header.clientHeight;

// функция подключения файлов со скриптами
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

include("./js/parts/range-slider.js");
include("./js/parts/header.js");
