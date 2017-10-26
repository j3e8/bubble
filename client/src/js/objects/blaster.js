var Blaster = {};

Blaster.TRAJECTORY_VELOCITY = 0.01;
Blaster.BUBBLE_DIAMETER = 0;
Blaster.BUBBLE_RADIUS = 0;

Blaster.createBlaster = function(canvasSize, d, r) {
  Blaster.BUBBLE_DIAMETER = d;
  Blaster.BUBBLE_RADIUS = r;

  var blasterWidth = canvasSize.width * 0.2;
  var blasterHeight = blasterWidth;
  var blaster = {
    width: blasterWidth,
    height: blasterHeight,
    x: canvasSize.width / 2,
    y: canvasSize.height * 0.95,
  }
  blaster.nextX = blaster.x + Blaster.BUBBLE_DIAMETER;
  blaster.nextY = blaster.y + Blaster.BUBBLE_RADIUS;
  blaster.trajectoryOffset = 0;

  return blaster;
}

Blaster.animateBlaster = function(elapsedMs, blaster) {
  var step = Blaster.BUBBLE_RADIUS;
  blaster.trajectoryOffset += Blaster.TRAJECTORY_VELOCITY * elapsedMs;
  if (blaster.trajectoryOffset >= step) {
    blaster.trajectoryOffset -= step;
  }
}

Blaster.renderBlaster = function(canvas, blaster, bounds) {
  if (!blaster) {
    return;
  }

  if (blaster.nextBubble) {
    Bubble.render(canvas, blaster.nextBubble);
  }
  if (blaster.currentBubble) {
    Bubble.render(canvas, blaster.currentBubble);
  }
  if (blaster.currentBubble && blaster.currentBubble.status != Bubble.FIRING) {
    renderTrajectory(canvas, blaster, bounds);
  }
}

function renderTrajectory(canvas, blaster, bounds) {
  if (!blaster.trajectory) {
    return;
  }
  var points = calculateTrajectoryPath(blaster, bounds);

  var step = Blaster.BUBBLE_RADIUS;
  var radius = step * 0.25;
  var angle = floorsix.math.atan(points[1].y - points[0].y, points[1].x - points[0].x);
  var x = points[0].x + Math.cos(angle) * blaster.trajectoryOffset;
  var y = points[0].y + Math.sin(angle) * blaster.trajectoryOffset;

  canvas.context.fillStyle = "rgba(255, 255, 255, 0.3)";

  var p = 0;
  var dx = Math.cos(angle) * step;
  var dy = Math.sin(angle) * step;

  while (y >= points[p+1].y) {
    var opacity = 1;
    if (p == 0) {
      var sqdist = (y - points[p].y)*(y - points[p].y) + (x - points[p].x)*(x - points[p].x);
      var sqstep = step * step;
      if (sqdist <= sqstep) {
        opacity = sqdist / sqstep;
      }
    }
    if (p == points.length - 2) {
      var sqdist = (y - points[p+1].y)*(y - points[p+1].y) + (x - points[p+1].x)*(x - points[p+1].x);
      var sqstep = step * step;
      if (sqdist <= sqstep) {
        opacity = sqdist / sqstep;
      }
    }
    canvas.context.globalAlpha = opacity;
    canvas.context.beginPath();
    canvas.context.arc(x, y, radius, 0, Math.PI*2);
    canvas.context.fill();

    if (y + dy <= points[p+1].y && p < points.length - 2) {
      var leftover = step - Math.sqrt((points[p+1].y - y)*(points[p+1].y - y) + (points[p+1].x - x)*(points[p+1].x - x));
      p++;
      angle = floorsix.math.atan(points[p+1].y - points[p].y, points[p+1].x - points[p].x);
      x = points[p].x + Math.cos(angle) * leftover;
      y = points[p].y + Math.sin(angle) * leftover;
      dx = Math.cos(angle) * step;
      dy = Math.sin(angle) * step;
    }
    else {
      x += dx;
      y += dy;
    }
  }
  canvas.context.globalAlpha = 1;
}

function calculateTrajectoryPath(blaster, bounds) {
  var x = blaster.x;
  var y = blaster.y;
  var slope = blaster.trajectory;
  var points = [{
    x: blaster.x,
    y: blaster.y
  }];
  while (y > bounds.top) {
    var new_x = slope < 0 ? bounds.right : bounds.left;
    var new_y = y + (new_x - x) * slope;
    points.push({ x: new_x, y: new_y });
    x = new_x;
    y = new_y;
    slope = -slope;
  }
  if (points[0].y > bounds.bottom) {
    var diff = bounds.bottom - points[0].y;
    var dist = points[1].y - points[0].y;
    var pct = diff / dist;
    points[0].y = bounds.bottom;
    points[0].x += (points[1].x - points[0].x) * pct;
  }
  if (points[points.length - 1].y < bounds.top) {
    var diff = points[points.length - 1].y - bounds.top;
    var dist = points[points.length - 1].y - points[points.length - 2].y;
    var pct = diff / dist;
    points[points.length - 1].y = bounds.top;
    points[points.length - 1].x -= (points[points.length - 1].x - points[points.length - 2].x) * pct;
  }
  return points;
}
