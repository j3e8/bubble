floorsix.controller("/", function() {
  console.log('home');
  function animate(elapsedMs) {

  }

  function render(canvas) {
    var ctx = canvas.getContext("2d");
  }

  return {
    'animate': animate,
    'render': render
  }
});
