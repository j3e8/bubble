var Bubble = {};

Bubble.RED = 5;
Bubble.GREEN = 1;
Bubble.BLUE = 2;
Bubble.PURPLE = 3;
Bubble.YELLOW = 4;
Bubble.ANIMAL = 10;

Bubble.Images = {};
Bubble.Images[Bubble.RED] = 'www/assets/bubbles/red.svg';
Bubble.Images[Bubble.GREEN] = 'www/assets/bubbles/green.svg';
Bubble.Images[Bubble.BLUE] = 'www/assets/bubbles/blue.svg';
Bubble.Images[Bubble.PURPLE] = 'www/assets/bubbles/purple.svg';
Bubble.Images[Bubble.YELLOW] = 'www/assets/bubbles/yellow.svg';
Bubble.Images[Bubble.ANIMAL] = 'www/assets/bubbles/clear.svg';

Bubble.BUBBLE_VELOCITY = 0.7;
Bubble.BUBBLE_HIT_PCT = 0.8;
Bubble.BOUNCE_RATE = 0.01;

Bubble.MIN_FALLING_X_VELOCITY = -0.1;
Bubble.MAX_FALLING_X_VELOCITY = 0.1;

Bubble.BUBBLE_SHIFT_VELOCITY = 0.15;

Bubble.IDLE = 0;
Bubble.MOVING = 1;
Bubble.FALLING = 2;
Bubble.FIRING = 3;
Bubble.DEAD = 4;
Bubble.RESCUED = 5;

Bubble.create = function(x, y, r, color, animal) {
  var bubble = {
    x: x,
    y: y,
    r: r,
    d: r * 2,
    color: color,
    animal: animal,
    bounce: 0,
    status: Bubble.IDLE
  }
  bubble.img = new Image();
  bubble.img.src = Bubble.Images[color];
  bubble.img.onload = function() {
    bubble.loaded = true;
  }
  if (animal) {
    bubble.animalImg = new Image();
    bubble.animalImg.src = Animal.Bubbles[bubble.animal];
    bubble.animalImg.onload = function() {
      bubble.animalImgLoaded = true;
      var aspect = bubble.animalImg.width / bubble.animalImg.height;
      var maxside = r * 2;
      bubble.animalWidth = aspect >= 1 ? maxside : maxside * aspect;
      bubble.animalHeight = aspect >= 1 ? maxside / aspect : maxside;
    }
  }
  return bubble;
}

Bubble.animate = function(elapsedMs, bubble, canvasSize) {
  if (bubble.status == Bubble.DEAD) {
    return;
  }
  if (bubble.status == Bubble.IDLE && !bubble.animal) {
    return;
  }
  if (bubble.status == Bubble.IDLE && bubble.animal) {
    bubble.bounce += Bubble.BOUNCE_RATE * elapsedMs;
    if (bubble.bounce >= Math.PI*16) {
      bubble.bounce -= Math.PI*16;
    }
    return;
  }
  if (bubble.target) {
    if (Math.abs(bubble.target.x - bubble.x) <= Math.abs(bubble.v.x * elapsedMs) && Math.abs(bubble.target.y - bubble.y) <= Math.abs(bubble.v.y * elapsedMs)) {
      bubble.x = bubble.target.x;
      bubble.y = bubble.target.y;
      bubble.v = null;
      bubble.target = null;
      if (bubble.status != Bubble.RESCUED) {
        bubble.status = Bubble.IDLE;
      }
      if (bubble.ontarget) {
        bubble.ontarget();
      }
      return;
    }
  }
  if (bubble.v) {
    bubble.x += bubble.v.x * elapsedMs;
    bubble.y += bubble.v.y * elapsedMs;
    if (bubble.x > canvasSize.width - bubble.r) {
      bubble.x = canvasSize.width - bubble.r;
      bubble.v.x = -bubble.v.x;
    }
    if (bubble.x < bubble.r) {
      bubble.x = bubble.r;
      bubble.v.x = -bubble.v.x;
    }
    if (bubble.y > canvasSize.height + bubble.height / 2) {
      bubble.status = Bubble.DEAD;
    }
  }
  if (bubble.status == Bubble.FALLING) {
    var vy = floorsix.physics.gravity * elapsedMs;
    bubble.v.y += vy;
  }
}

Bubble.render = function(canvas, bubble) {
  if (bubble.animal && bubble.animalImg && bubble.animalImgLoaded) {
    var pi = bubble.bounce > Math.PI * 2 ? 0 : bubble.bounce;
    var stretch = Math.abs(Math.sin(pi)) * 0.15 + 1;
    canvas.context.save();
    canvas.context.translate(bubble.x, bubble.y);
    canvas.context.scale(stretch, stretch);
    canvas.context.drawImage(bubble.animalImg, -bubble.animalWidth / 2, -bubble.animalHeight / 2, bubble.animalWidth, bubble.animalHeight);
    canvas.context.restore();
    if (bubble.status == Bubble.RESCUED) {
      return;
    }
  }
  else if (bubble.img && bubble.loaded) {
    canvas.context.drawImage(bubble.img, bubble.x - bubble.r, bubble.y - bubble.r, bubble.d, bubble.d);
  }
}

Bubble.setTarget = function(bubble, pt, ontarget) {
  bubble.target = pt;
  bubble.ontarget = ontarget;
  var angle = floorsix.math.atan(pt.y - bubble.y, pt.x - bubble.x);
  var bub = { x: bubble.x, y: bubble.y };
  var tar = { x: pt.x, y: pt.y };
  bubble.v = {
    x: Math.cos(angle) * Bubble.BUBBLE_VELOCITY,
    y: Math.sin(angle) * Bubble.BUBBLE_VELOCITY
  }
  if (bubble.status != Bubble.RESCUED) {
    bubble.status = Bubble.MOVING;
  }
}

Bubble.hitTest = function(a, b) {
  var sqThreshold = (a.d * Bubble.BUBBLE_HIT_PCT) * (b.d * Bubble.BUBBLE_HIT_PCT);
  var sqdist = (a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y);
  if (sqdist <= sqThreshold) {
    return true;
  }
  return false;
}

Bubble.pointHitTest = function(bubble, pt) {
  if (!bubble || !pt) {
    return false;
  }
  var sqdist = (bubble.x - pt.x)*(bubble.x - pt.x) + (bubble.y - pt.y)*(bubble.y - pt.y);
  if (sqdist <= bubble.r * bubble.r) {
    return true;
  }
  return false;
}

Bubble.fall = function(bubble) {
  bubble.status = Bubble.FALLING;
  bubble.v = {
    x: Math.random() * (Bubble.MAX_FALLING_X_VELOCITY - Bubble.MIN_FALLING_X_VELOCITY) + Bubble.MIN_FALLING_X_VELOCITY,
    y: 0
  }
}

Bubble.rescue = function(bubble) {
  bubble.status = Bubble.RESCUED;
}

Bubble.move = function(bubble, x, y) {
  bubble.x += x;
  bubble.y += y;
}
