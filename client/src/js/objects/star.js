var Star = {};

Star.MIN_OPACITY_VELOCITY = 0.0006;
Star.MAX_OPACITY_VELOCITY = 0.0008;

Star.MIN_ROTATION_VELOCITY = 0.001;
Star.MAX_ROTATION_VELOCITY = 0.003;

Star.MIN_STAR_SIZE_PCT = 0.1;
Star.MAX_STAR_SIZE_PCT = 0.3;

Star.MIN_STARS_IN_STARBURST = 15;
Star.MAX_STARS_IN_STARBURST = 25;

Star.MIN_VELOCITY = 0.02;
Star.MAX_VELOCITY = 0.05;

Star.create = function(x, y, size) {
  var star = {
    alive: true,
    x: x,
    y: y,
    opacity: Math.random() * 0.3 + 0.5,
    opacityVelocity: Math.random() * (Star.MAX_OPACITY_VELOCITY - Star.MIN_OPACITY_VELOCITY) + Star.MIN_OPACITY_VELOCITY,
    rotation: Math.random() * Math.PI * 2,
    rotationVelocity: Math.random() * (Star.MAX_ROTATION_VELOCITY - Star.MIN_ROTATION_VELOCITY) + Star.MIN_ROTATION_VELOCITY,
    url: 'www/assets/star.svg'
  }
  star.img = new Image();
  star.img.src = star.url;
  star.img.onload = function() {
    var aspect = star.img.width / star.img.height;
    star.width = size;
    star.height = star.width / aspect;
    star.loaded = true;
  }
  return star;
}

Star.createStarburst = function(cx, cy, diameter) {
  var radius = diameter / 2;
  var stars = [];
  var numberOfStars = Math.random() * (Star.MAX_STARS_IN_STARBURST - Star.MIN_STARS_IN_STARBURST) + Star.MIN_STARS_IN_STARBURST;
  for (var i=0; i < numberOfStars; i++) {
    var size = (Math.random() * (Star.MAX_STAR_SIZE_PCT - Star.MIN_STAR_SIZE_PCT) + Star.MIN_STAR_SIZE_PCT) * diameter;
    var angle = Math.random() * Math.PI * 2;
    var x = cx + Math.cos(angle) * radius;
    var y = cy + Math.sin(angle) * radius;
    var star = Star.create(x, y, size);
    var v =  Math.random() * (Star.MAX_VELOCITY - Star.MIN_VELOCITY) + Star.MIN_VELOCITY;
    star.v = {
      x: Math.cos(angle) * v,
      y: Math.sin(angle) * v
    }
    stars.push(star);
  }
  return stars;
}

Star.animate = function(elapsedMs, star) {
  if (!star.alive) {
    return;
  }
  if (star.v) {
    star.x += star.v.x * elapsedMs;
    star.y += star.v.y * elapsedMs;
  }
  star.rotation += star.rotationVelocity * elapsedMs;
  if (star.rotation >= Math.PI * 2) {
    star.rotation -= Math.PI * 2;
  }
  star.opacity -= star.opacityVelocity * elapsedMs;
  if (star.opacity <= 0) {
    star.opacity = 0;
    star.alive = false;
  }
}

Star.render = function(ctx, star) {
  if (star.img && star.loaded) {
    ctx.globalAlpha = star.opacity;
    ctx.save();
    ctx.translate(star.x, star.y);
    ctx.rotate(star.rotation);
    ctx.drawImage(star.img, -star.width/2, -star.height/2, star.width, star.height);
    ctx.restore();
    // ctx.drawImage(star.img, star.x, star.y, star.width, star.height);
    ctx.globalAlpha = 1;
  }
}
