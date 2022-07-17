
function fun1() {
  let rangeInput = document.querySelector('.range');
  let sumInput = document.querySelector('.price-value');
	sumInput.value = rangeInput.value;
}

function fun2() {
  let rangeInput = document.querySelector('.range');
  let sumInput = document.querySelector('.price-value');
	rangeInput.value = sumInput.value;
}
