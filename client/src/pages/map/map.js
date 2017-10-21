floorsix.controller("/map", function() {
  var CLICK_TOLERANCE = 3;
  var map = Map.create(floorsix.getCanvas());
  var originalPoint = undefined;
  var lastPoint = undefined;

  function animate(elapsedMs) {
    Map.animate(elapsedMs, map);
  }

  function render(canvas) {
    Map.render(canvas, map);
  }

  function handleTouchStart(x, y) {
    originalPoint = { x: x, y: y };
    lastPoint = { x: x, y: y };
  }

  function handleTouchMove(x, y) {
    if (!map || !lastPoint) {
      return;
    }
    Map.move(map, x - lastPoint.x, y - lastPoint.y);
    lastPoint = { x: x, y: y };
  }

  function handleTouchEnd(x, y) {
    if (originalPoint && lastPoint) {
      var diff = floorsix.geometry.subtractPoints(originalPoint, lastPoint);
      if (diff.x <= CLICK_TOLERANCE && diff.y <= CLICK_TOLERANCE) {
        handleClick(x, y);
      }
    }
    originalPoint = undefined;
    lastPoint = undefined;
  }

  function handleClick(x, y) {
    console.log('click', x, y);
    for (var i=0; i < map.levels.length; i++) {
      if (Map.hitTest(map, map.levels[i], x, y)) {
        transitionToLevel(map.levels[i]);
        break;
      }
    }
  }

  function transitionToLevel(level) {
    console.log('transitionToLevel', level);
  }

  return {
    'animate': animate,
    'render': render,
    'touchstart': handleTouchStart,
    'touchmove': handleTouchMove,
    'touchend': handleTouchEnd
  }
});
