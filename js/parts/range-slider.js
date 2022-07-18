noUiSlider.create(slider, {
  start: [1000],
  connect: [true, false],
  step: 500,
  range: {
    'min': 1000,
    'max': 500000
  }

});

slider.noUiSlider.set(30500);

slider.noUiSlider.on('update', function (values, handle) {
  sumInput.value = values[handle];
});
