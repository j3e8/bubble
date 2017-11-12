floorsix.controller("/", function() {
  console.log("title screen");
  function animate(elapsedMs) {

  }

  function render(canvas) {
    canvas.context.fillStyle = "#ffffff";
    canvas.context.fontFamily = "30px Avenir-Light";
    canvas.context.fillText('Zoo Rescue', 20, 20);
  }

  function handleTouchStart(x, y) {

  }

  function handleTouchMove(x, y) {

  }

  function handleTouchEnd(x, y) {
    floorsix.navigate('/map?level=1');
  }

  return {
    'animate': animate,
    'render': render,
    'touchstart': handleTouchStart,
    'touchmove': handleTouchMove,
    'touchend': handleTouchEnd
  }
});
