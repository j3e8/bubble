floorsix.controller("/", function() {
  console.log("title screen");

  var imgLoaded = false;
  var img = new Image();
  img.src = "www/assets/title.png";
  img.onload = function() {
    imgLoaded = true;
    var aspect = img.width / img.height;
  }

  function animate(elapsedMs) {

  }

  function render(canvas) {
    if (img && imgLoaded) {
      canvas.context.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
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
