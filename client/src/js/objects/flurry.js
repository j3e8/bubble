var Flurry = {};

Flurry.WIDTH_TO_CANVAS_RATIO = 0.015;
Flurry.MAX_TIME_TO_SPAWN = 5000;
Flurry.OPACITY_VELOCITY = 0.001;
Flurry.MIN_VELOCITY = 0.12;
Flurry.MAX_VELOCITY = 0.16;
Flurry.MIN_ROTATION_VELOCITY = -0.002;
Flurry.MAX_ROTATION_VELOCITY = 0.002;
Flurry.MIN_PHASE_DURATION = 500;
Flurry.MAX_PHASE_DURATION = 1500;

Flurry.loadFlurry = function(canvas, flurry, callback) {
  flurry.img = new Image();
  flurry.img.src = flurry.url;
  flurry.img.onload = function() {
    flurry.loaded = true;
    var aspect = flurry.img.width / flurry.img.height;
    flurry.width = Flurry.WIDTH_TO_CANVAS_RATIO * canvas.width;
    flurry.height = flurry.width / aspect;
    callback();
  }
}

Flurry.initializeSpawn = function(flurry) {
  flurry.alive = false;
  flurry.spawnTime = new Date().getTime() + Math.random() * Flurry.MAX_TIME_TO_SPAWN;
}

Flurry.renderFlurry = function(ctx, canvas, flurry) {
  ctx.globalAlpha = flurry.opacity;
  ctx.drawImage(flurry.img, flurry.x, flurry.y, flurry.width, flurry.height);
}

Flurry.animateFlurry = function(elapsedMs, flurry, canvas) {
  var now = new Date().getTime();
  if (flurry.spawnTime && now > flurry.spawnTime) {
    Flurry.spawnFlurry(flurry, canvas);
  }
  if (flurry.alive) {
    flurry.angle += flurry.rotationVelocity * elapsedMs;
    flurry.x += Math.cos(flurry.angle) * flurry.velocity;
    flurry.y += Math.sin(flurry.angle) * flurry.velocity;
    if (now > flurry.phaseTime) {
      Flurry.setNextFlurryPhase(flurry);
    }
    if (flurry.opacity < 1) {
      var op = flurry.opacity + flurry.opacityVelocity * elapsedMs;
      if (op > 1) op = 1;
      flurry.opacity = op;
    }
    if (flurry.x > canvas.width + flurry.width
      || flurry.x < -flurry.width
      || flurry.y > canvas.height + flurry.height
      || flurry.y < -flurry.height)
    {
      flurry.alive = false;
    }
  }
  else {
    if (flurry.opacity > 0) {
      var op = flurry.opacity - flurry.opacityVelocity * elapsedMs;
      if (op < 0) {
        op = 0;
        flurry.spawnTime = new Date().getTime() + Math.random() * Flurry.MAX_TIME_TO_SPAWN;
      }
      flurry.opacity = op;
    }
  }
}

Flurry.spawnFlurry = function(flurry, canvas) {
  flurry.opacity = 0;
  flurry.opacityVelocity = Flurry.OPACITY_VELOCITY;
  flurry.velocity = Math.random() * (Flurry.MAX_VELOCITY - Flurry.MIN_VELOCITY) + Flurry.MIN_VELOCITY;
  flurry.angle = Math.random() * Math.PI * 2;
  flurry.x = Math.random() * canvas.width * 0.90 + canvas.width * 0.05;
  flurry.y = Math.random() * canvas.height * 0.70 + canvas.height * 0.30;
  flurry.alive = true;
  flurry.spawnTime = null;
  Flurry.setNextFlurryPhase(flurry);
}

Flurry.setNextFlurryPhase = function(flurry) {
  flurry.rotationVelocity = Math.random() * (Flurry.MAX_ROTATION_VELOCITY - Flurry.MIN_ROTATION_VELOCITY) + Flurry.MIN_ROTATION_VELOCITY;
  flurry.phaseTime = new Date().getTime() + Math.random() * (Flurry.MAX_PHASE_DURATION - Flurry.MIN_PHASE_DURATION) + Flurry.MIN_PHASE_DURATION;
}
