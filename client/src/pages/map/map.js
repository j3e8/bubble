floorsix.controller("/map", function() {
  var CLICK_TOLERANCE = 3;
  var map = Map.create(floorsix.getCanvas());
  var originalPoint = undefined;
  var prevPoint = undefined;
  var prevTouchTime = undefined;
  var lastPoint = undefined;
  var lastTouchTime = undefined;

  function animate(elapsedMs) {
    Map.animate(elapsedMs, map);
  }

  function render(canvas) {
    Map.render(canvas, map);
  }

  function handleTouchStart(x, y) {
    originalPoint = { x: x, y: y };
    prevPoint = lastPoint;
    lastPoint = { x: x, y: y };
    prevTouchTime = lastTouchTime;
    lastTouchTime = new Date().getTime();
  }

  function handleTouchMove(x, y) {
    if (!map || !lastPoint) {
      return;
    }
    Map.move(map, x - lastPoint.x, y - lastPoint.y);
    prevPoint = lastPoint;
    lastPoint = { x: x, y: y };
    prevTouchTime = lastTouchTime;
    lastTouchTime = new Date().getTime();
  }

  function handleTouchEnd(x, y) {
    if (originalPoint && lastPoint) {
      var diff = floorsix.geometry.subtractPoints(originalPoint, lastPoint);
      if (diff.x <= CLICK_TOLERANCE && diff.y <= CLICK_TOLERANCE) {
        handleClick(x, y);
      }
      if (prevTouchTime && prevPoint) {
        var now = new Date().getTime();
        var elapsedMs = now - prevTouchTime;
        var vx = (x - prevPoint.x) / elapsedMs;
        var vy = (y - prevPoint.y) / elapsedMs;
        Map.setVelocity(map, vx, vy);
      }
    }
    originalPoint = undefined;
    lastPoint = undefined;
  }

  function handleClick(x, y) {
    for (var i=0; i < Level.levels.length; i++) {
      if (Map.hitTest(map, Level.levels[i], x, y)) {
        floorsix.navigate('/play?level=' + i);
        break;
      }
    }
  }

  return {
    'animate': animate,
    'render': render,
    'touchstart': handleTouchStart,
    'touchmove': handleTouchMove,
    'touchend': handleTouchEnd
  }
});
