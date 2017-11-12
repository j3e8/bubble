floorsix.app({
  aspect: 0.563,
  backgroundColor: '#000000'
});

window.addEventListener("load", function() {
  Level.init();
});

var Level = {
  levels: []
};

Level.get = function(level) {
  return Level.levels[level];
}

Level.init = function() {
  var R = Bubble.RED;
  var B = Bubble.BLUE;
  var G = Bubble.GREEN;
  var Y = Bubble.YELLOW;
  var P = Bubble.PURPLE;
  var _ = null;
  var o = Bubble.ANIMAL

  // WOODLAND
  Level.levels[1] = {
    number: 1,
    map: [
      [R,R,R,B,B,G,B,B,R,R,R],
       [R,R,B,o,G,G,B,B,R,R],
      [G,G,G,B,B,G,B,B,G,G,G],
       [R,R,G,B,G,G,B,G,R,R],
      [G,R,R,R,R,R,R,o,R,R,G],
       [G,G,G,B,B,B,B,G,G,G],
      [G,G,B,B,R,R,R,B,B,G,G],
       [R,B,R,G,G,G,G,R,B,R],
      [R,R,R,G,G,B,G,G,R,R,R],
       [G,G,B,B,B,B,B,B,G,G],
      [G,R,G,R,o,R,G,R,G,R,G],
       [R,G,R,R,G,G,R,R,G,R],
      [G,B,B,B,G,G,G,B,B,B,G],
       [G,B,R,R,R,R,R,R,B,G],
      [G,B,B,B,G,G,G,B,B,B,G],
       [B,B,R,R,R,R,R,R,B,B],
    ],
    bubbles: 30,
    animal: Animal.RACCOON,
    theme: Theme.WOODLAND,
    x: 0.3969,
    y: 0.825
  }

  Level.levels[2] = {
    number: 2,
    map: [
      [R,R,G,B,_,_,B,G,R,_,_],
       [G,R,_,B,G,B,_,G,R,_],
      [_,G,R,_,B,o,B,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.CHIPMUNK,
    theme: Theme.WOODLAND,
    x: 0.377,
    y: 0.718
  }

  Level.levels[3] = {
    number: 3,
    map: [
      [_,_,G,B,B,_,B,B,G,_,_],
       [_,G,_,B,G,G,B,_,G,_],
      [_,G,R,_,B,o,B,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.SKUNK,
    theme: Theme.WOODLAND,
    x: 0.399, // 10996
    y: 0.698 // 3858
  }

  Level.levels[4] = {
    number: 4,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.FOX,
    theme: Theme.WOODLAND,
    x: 0.417,
    y: 0.729
  }

  Level.levels[5] = {
    number: 5,
    map: [
      [R,R,_,B,B,_,B,B,_,R,R],
       [G,R,_,B,G,G,B,_,R,G],
      [G,_,R,_,B,G,B,_,R,_,G],
       [R,R,_,B,_,_,B,_,R,R],
      [_,R,_,B,B,R,B,B,_,R,_],
       [G,G,R,R,R,R,R,R,G,G],
      [G,_,B,_,B,o,B,_,B,_,G],
       [G,B,_,B,G,G,B,_,B,G],
      [G,_,R,R,B,B,B,R,R,_,G],
       [R,R,_,B,_,_,B,_,R,R],
      [_,R,_,B,B,R,B,B,_,R,_],
       [G,G,R,R,R,R,R,R,G,G],
      [G,_,B,_,B,G,B,_,B,_,G],
       [G,B,_,B,G,G,B,_,B,G],
      [G,_,R,R,B,B,B,R,R,_,G],
       [B,B,R,_,B,o,_,R,B,B],
    ],
    bubbles: 30,
    animal: Animal.RABBIT,
    theme: Theme.WOODLAND
  }

  // MOUNTAIN


  // PRAIRIE
  Level.levels[26] = {
    number: 26,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.BUFFALO,
    theme: Theme.PRAIRIE,
    x: 0.308,
    y: 0.667
  }

  Level.levels[27] = {
    number: 27,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.BUFFALO,
    theme: Theme.PRAIRIE,
    x: 0.302,
    y: 0.613
  }


}

Animal = {};

Animal.Images = {};
Animal.Bubbles = {};
Animal.Names = {};

// WOODLAND
Animal.RACCOON = 1;
Animal.Images[Animal.RACCOON] = 'www/assets/themes/woodland/animals/racoon.svg';
Animal.Bubbles[Animal.RACCOON] = 'www/assets/themes/woodland/animals/racoon-bubble.svg';
Animal.Names[Animal.RACCOON] = 'Raccoon';

Animal.CHIPMUNK = 2;
Animal.Images[Animal.CHIPMUNK] = 'www/assets/themes/woodland/animals/chipmunk.svg';
Animal.Bubbles[Animal.CHIPMUNK] = 'www/assets/themes/woodland/animals/chipmunk-bubble.svg';
Animal.Names[Animal.CHIPMUNK] = 'Chipmunk';

Animal.SKUNK = 3;
Animal.Images[Animal.SKUNK] = 'www/assets/themes/woodland/animals/skunk.svg';
Animal.Bubbles[Animal.SKUNK] = 'www/assets/themes/woodland/animals/skunk-bubble.svg';
Animal.Names[Animal.SKUNK] = 'Skunk';

Animal.FOX = 4;
Animal.Images[Animal.FOX] = 'www/assets/themes/woodland/animals/fox.svg';
Animal.Bubbles[Animal.FOX] = 'www/assets/themes/woodland/animals/fox-bubble.svg';
Animal.Names[Animal.FOX] = 'Fox';

Animal.RABBIT = 5;
Animal.Images[Animal.RABBIT] = 'www/assets/themes/woodland/animals/rabbit.svg';
Animal.Bubbles[Animal.RABBIT] = 'www/assets/themes/woodland/animals/rabbit-bubble.svg';
Animal.Names[Animal.RABBIT] = 'Rabbit';

Animal.OWL = 6;
Animal.Images[Animal.OWL] = 'www/assets/themes/woodland/animals/owl.svg';
Animal.Bubbles[Animal.OWL] = 'www/assets/themes/woodland/animals/owl-bubble.svg';
Animal.Names[Animal.OWL] = 'Owl';

Animal.BEAVER = 7;
Animal.Images[Animal.BEAVER] = 'www/assets/themes/woodland/animals/beaver.svg';
Animal.Bubbles[Animal.BEAVER] = 'www/assets/themes/woodland/animals/beaver-bubble.svg';
Animal.Names[Animal.BEAVER] = 'Beaver';

Animal.DEER = 8;
Animal.Images[Animal.DEER] = 'www/assets/themes/woodland/animals/deer.svg';
Animal.Bubbles[Animal.DEER] = 'www/assets/themes/woodland/animals/deer-bubble.svg';
Animal.Names[Animal.DEER] = 'Deer';

Animal.HEDGEHOG = 9;
Animal.Images[Animal.HEDGEHOG] = 'www/assets/themes/woodland/animals/hedgehog.svg';
Animal.Bubbles[Animal.HEDGEHOG] = 'www/assets/themes/woodland/animals/hedgehog-bubble.svg';
Animal.Names[Animal.HEDGEHOG] = 'Hedgehog';

Animal.PORCUPINE = 10;
Animal.Images[Animal.PORCUPINE] = 'www/assets/themes/woodland/animals/porcupine.svg';
Animal.Bubbles[Animal.PORCUPINE] = 'www/assets/themes/woodland/animals/porcupine-bubble.svg';
Animal.Names[Animal.PORCUPINE] = 'Porcupine';

Animal.BADGER = 11;
Animal.Images[Animal.BADGER] = 'www/assets/themes/woodland/animals/badger.svg';
Animal.Bubbles[Animal.BADGER] = 'www/assets/themes/woodland/animals/badger-bubble.svg';
Animal.Names[Animal.BADGER] = 'Badger';

Animal.ROBIN = 12;
Animal.Images[Animal.ROBIN] = 'www/assets/themes/woodland/animals/robin.svg';
Animal.Bubbles[Animal.ROBIN] = 'www/assets/themes/woodland/animals/robin-bubble.svg';
Animal.Names[Animal.ROBIN] = 'Robin';


// MOUNTAIN

// PRAIRIE
Animal.BUFFALO = 20;

// BAMBOO
Animal.PANDA = 51;
Animal.Images[Animal.PANDA] = 'www/assets/themes/bamboo/animals/panda.svg';
Animal.Bubbles[Animal.PANDA] = 'www/assets/themes/bamboo/animals/panda-bubble.svg';
Animal.Names[Animal.PANDA] = 'Panda';

Animal.RED_PANDA = 52;
Animal.Images[Animal.RED_PANDA] = 'www/assets/themes/bamboo/animals/red_panda.svg';
Animal.Bubbles[Animal.RED_PANDA] = 'www/assets/themes/bamboo/animals/red_panda-bubble.svg';
Animal.Names[Animal.RED_PANDA] = 'Red Panda';

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

var Card = {};

Card.CARD_ROTATION_VELOCITY = 0.008;
Card.CARD_SCALE_VELOCITY = 0.3;
Card.CARD_OPACITY_VELOCITY = 0.0005;

Card.SPINNING_IN = 1;
Card.IDLE = 2;

(function() {
  Card.create = function(x, y, maxWidth, animalImg, animalNumber, animalName) {
    var card = {
      alive: true,
      animal: {
        number: animalNumber,
        url: animalImg,
        name: animalName
      },
      x: x,
      y: y,
      maxWidth: maxWidth,
      opacity: 0,
      phase: Card.SPINNING_IN,
      rotation: 0,
      url: 'www/assets/card.svg'
    }
    card.img = new Image();
    card.img.src = card.url;
    card.img.onload = function() {
      card.aspect = card.img.width / card.img.height;
      card.width = 10;
      card.height = card.width / card.aspect;
      card.loaded = true;
    }
    card.animal.img = new Image();
    card.animal.img.src = card.animal.url;
    card.animal.img.onload = function() {
      card.animal.aspect = card.animal.img.width / card.animal.img.height;
      card.animal.loaded = true;
    }
    return card;
  }

  Card.animate = function(elapsedMs, card) {
    if (card.opacity < 1) {
      card.opacity += Card.CARD_OPACITY_VELOCITY * elapsedMs;
      if (card.opacity > 1) {
        card.opacity = 1;
      }
    }

    if (card.phase == Card.SPINNING_IN) {
      // size
      if (card.width < card.maxWidth) {
        card.width += Card.CARD_SCALE_VELOCITY * elapsedMs;
        if (card.width >= card.maxWidth) {
          card.width = card.maxWidth;
        }
        card.height = card.width / card.aspect;
      }

      // rotation
      var prev = card.rotation;
      card.rotation += Card.CARD_ROTATION_VELOCITY * elapsedMs;
      if (card.width >= card.maxWidth && prev < Math.PI * 2 && card.rotation >= Math.PI * 2) {
        card.phase = Card.IDLE;
        card.rotation = 0;
      }
      while (card.rotation >= Math.PI * 2) {
        card.rotation -= Math.PI * 2;
      }
    }
  }

  Card.render = function(canvas, card) {
    if (!card.img) {
      return;
    }
    canvas.context.globalAlpha = card.opacity;
    canvas.context.save();
    canvas.context.translate(card.x, card.y);
    canvas.context.rotate(card.rotation);
    canvas.context.drawImage(card.img, -card.width/2, -card.height/2, card.width, card.height);
    if (card.animal.img) {
      var awidth = card.width * 0.6;
      var aheight = awidth / card.animal.aspect;
      canvas.context.drawImage(card.animal.img, -awidth/2, card.height*0.07-aheight/2, awidth, aheight);
    }

    var fontSize = card.height * 0.06;
    canvas.context.font = fontSize + "px Avenir-Light";
    canvas.context.textBaseline = "middle";
    canvas.context.textAlign = "center";
    canvas.context.fillStyle = "#ffffff";
    canvas.context.fillText(card.animal.name, 0, -card.height/2 + card.height*0.16);

    var numberFontSize = card.height * 0.04;
    canvas.context.font = numberFontSize + "px Avenir-Light";
    canvas.context.textBaseline = "bottom";
    canvas.context.textAlign = "left";
    canvas.context.fillStyle = "#000000";
    canvas.context.fillText(makeCollectorsNumber(card.animal.number), -card.width/2 + card.width*0.2, card.height/2 - card.height*0.06);
    canvas.context.restore();
    canvas.context.globalAlpha = 1;
  }

  function makeCollectorsNumber(num) {
    var tmp = num.toString();
    while (tmp.length < 3) {
      tmp = '0' + tmp;
    }
    return tmp;
  }
})();

var Color = {};

Color.create = function(r, g, b, a) {
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}

Color.toString = function(c) {
  var r = Math.round(c.r);
  var g = Math.round(c.g);
  var b = Math.round(c.b);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + c.a + ')';
}

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

Flurry.loadFlurry = function(canvasSize, flurry, callback) {
  flurry.img = new Image();
  flurry.img.src = flurry.url;
  flurry.img.onload = function() {
    flurry.loaded = true;
    var aspect = flurry.img.width / flurry.img.height;
    flurry.width = Flurry.WIDTH_TO_CANVAS_RATIO * canvasSize.width;
    flurry.height = flurry.width / aspect;
    callback();
  }
}

Flurry.initializeSpawn = function(flurry) {
  flurry.alive = false;
  flurry.spawnTime = new Date().getTime() + Math.random() * Flurry.MAX_TIME_TO_SPAWN;
}

Flurry.renderFlurry = function(canvas, flurry) {
  canvas.context.globalAlpha = flurry.opacity;
  canvas.context.drawImage(flurry.img, flurry.x, flurry.y, flurry.width, flurry.height);
}

Flurry.animateFlurry = function(elapsedMs, flurry, canvasSize) {
  var now = new Date().getTime();
  if (flurry.spawnTime && now > flurry.spawnTime) {
    Flurry.spawnFlurry(flurry, canvasSize);
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
    if (flurry.x > canvasSize.width + flurry.width
      || flurry.x < -flurry.width
      || flurry.y > canvasSize.height + flurry.height
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

Flurry.spawnFlurry = function(flurry, canvasSize) {
  flurry.opacity = 0;
  flurry.opacityVelocity = Flurry.OPACITY_VELOCITY;
  flurry.velocity = Math.random() * (Flurry.MAX_VELOCITY - Flurry.MIN_VELOCITY) + Flurry.MIN_VELOCITY;
  flurry.angle = Math.random() * Math.PI * 2;
  flurry.x = Math.random() * canvasSize.width * 0.90 + canvasSize.width * 0.05;
  flurry.y = Math.random() * canvasSize.height * 0.70 + canvasSize.height * 0.30;
  flurry.alive = true;
  flurry.spawnTime = null;
  Flurry.setNextFlurryPhase(flurry);
}

Flurry.setNextFlurryPhase = function(flurry) {
  flurry.rotationVelocity = Math.random() * (Flurry.MAX_ROTATION_VELOCITY - Flurry.MIN_ROTATION_VELOCITY) + Flurry.MIN_ROTATION_VELOCITY;
  flurry.phaseTime = new Date().getTime() + Math.random() * (Flurry.MAX_PHASE_DURATION - Flurry.MIN_PHASE_DURATION) + Flurry.MIN_PHASE_DURATION;
}

var Map = {};

Map.HEIGHT_TO_CANVAS_RATIO = 2.0;
Map.FRICTION = 0.01;

(function() {
  var minx;
  var maxx = 0;
  var miny;
  var maxy = 0;

  var LEVEL_ICON_WIDTH_PCT = 0.05;

  var levelIcon = {
    loaded: false,
    img: new Image()
  }

  Map.create = function() {
    var canvasSize = floorsix.getCanvasSize();
    var map = {
      center: { x: 0.399, y: 1 },
      v: { x: 0, y: 0 }
    };
    map.img = new Image();
    map.img.src = "www/assets/map.png";
    map.img.onload = function() {
      map.loaded = true;
      var aspect = map.img.width / map.img.height;
      map.height = Map.HEIGHT_TO_CANVAS_RATIO * canvasSize.height;
      map.width = map.height * aspect;
      map.x = (canvasSize.width / 2) - (map.width * map.center.x);
      map.y = (canvasSize.height) - (map.height * map.center.y);
      minx = canvasSize.width - map.width;
      miny = canvasSize.height - map.height;
    }
    levelIcon.img.src = "www/assets/levelIcon.svg";
    levelIcon.img.onload = function() {
      levelIcon.loaded = true;
      var aspect = levelIcon.img.width / levelIcon.img.height;
      levelIcon.width = LEVEL_ICON_WIDTH_PCT * canvasSize.width;
      levelIcon.height = levelIcon.width / aspect;
    }
    return map;
  }

  Map.animate = function(elapsedMs, map) {
    Map.move(map, map.v.x * elapsedMs, map.v.y * elapsedMs);
    map.v.x -= map.v.x * Map.FRICTION * elapsedMs;
    if (Math.abs(map.v.x) < 0.01) {
      map.v.x = 0;
    }
    map.v.y -= map.v.y * Map.FRICTION * elapsedMs;
    if (Math.abs(map.v.y) < 0.01) {
      map.v.y = 0;
    }
  }

  Map.render = function(canvas, map) {
    if (map && map.img && map.loaded) {
      var sx = -map.x / map.width * map.img.width;
      var sy = -map.y / map.height * map.img.height;
      var swidth = canvas.width * (map.img.width / map.width);
      var sheight = canvas.height * (map.img.height / map.height);
      canvas.context.drawImage(map.img, sx, sy, swidth, sheight, 0, 0, canvas.width, canvas.height);

      if (levelIcon.loaded) {
        Level.levels.forEach(function(level) {
          renderLevelIcon(canvas, map, level);
        });
      }
    }
  }

  function renderLevelIcon(canvas, map, level) {
    var pt = getCoordsForLevelIcon(map, level);
    canvas.context.drawImage(levelIcon.img, pt.x - levelIcon.width / 2, pt.y - levelIcon.height / 2, levelIcon.width, levelIcon.height);
  }

  function getCoordsForLevelIcon(map, level) {
    var x = map.x + level.x * map.width;
    var y = map.y + level.y * map.height;
    return { x: x, y: y };
  }

  Map.move = function(map, x, y) {
    map.x += x;
    map.y += y;
    if (map.x < minx) {
      map.x = minx;
    }
    if (map.x > maxx) {
      map.x = maxx;
    }
    if (map.y < miny) {
      map.y = miny;
    }
    if (map.y > maxy) {
      map.y = maxy;
    }
  }

  Map.setVelocity = function(map, vx, vy) {
    map.v.x = vx;
    map.v.y = vy;
  }

  Map.hitTest = function(map, level, x, y) {
    if (!level) {
      return false;
    }
    var pt = getCoordsForLevelIcon(map, level);
    var sqd = (pt.x - x)*(pt.x - x) + (pt.y - y)*(pt.y - y);
    if (sqd <= levelIcon.width * levelIcon.width) {
      return true;
    }
    return false;
  }
})();

var Score = {};

Score.OPACITY_VELOCITY = 0.002;
Score.SIZE_VELOCITY = 0.01;

Score.createScoreburst = function(value, x, y, containerSize) {
  var score = {
    alive: true,
    x: x,
    y: y,
    value: value,
    opacity: 1,
    size: containerSize * 0.25
  }
  return score;
}

Score.animate = function(elapsedMs, score) {
  if (!score.alive) {
    return;
  }
  score.opacity -= Score.OPACITY_VELOCITY * elapsedMs;
  if (score.opacity <= 0) {
    score.opacity = 0;
    score.alive = false;
  }
  score.size += Score.SIZE_VELOCITY * elapsedMs;
}

Score.render = function(canvas, score) {
  if (!score.alive) {
    return;
  }
  canvas.context.textAlign = "center";
  canvas.context.textBaseline = "middle";
  canvas.context.fillStyle = "#ffffff";
  canvas.context.font = score.size + "px Avenir-Black";
  canvas.context.globalAlpha = score.opacity;
  canvas.context.fillText(score.value.toString(), score.x, score.y);
  canvas.context.globalAlpha = 1;
}

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

Star.render = function(canvas, star) {
  if (star.img && star.loaded) {
    canvas.context.globalAlpha = star.opacity;
    canvas.context.save();
    canvas.context.translate(star.x, star.y);
    canvas.context.rotate(star.rotation);
    canvas.context.drawImage(star.img, -star.width/2, -star.height/2, star.width, star.height);
    canvas.context.restore();
    // canvas.context.drawImage(star.img, star.x, star.y, star.width, star.height);
    canvas.context.globalAlpha = 1;
  }
}

var Stats = {};

Stats.SCORE_PER_BUBBLE_POPPED = 100;
Stats.SCORE_PER_FALLING_BUBBLE = 300;
Stats.SCORE_PER_RESCUED_ANIMAL = 1000;

Stats.TOP_FONT_SIZE_PCT = 0.0275;
Stats.TOP_Y_PCT = 0.03;
Stats.BOTTOM_Y_PCT = 0.0275;
Stats.X_PAD_PCT = 0.02667;
Stats.BOTTOM_FONT_SIZE_PCT = 0.01875;
Stats.ANIMAL_WIDTH_PCT = 0.09;
Stats.X_LABEL_PAD_PCT = 0.01;

Stats.PHASE_PLAYING = 0;
Stats.PHASE_LOSE = 1;
Stats.PHASE_WIN = 2;

Stats.FADE_IN_RATE = 0.0015;

(function() {
  Stats.initialize = function(canvas, level) {
    var stats = {
      bubblesLeft: 0,
      score: 0,
      level: level,
      notificationOpacity: 0,
      phase: Stats.PHASE_PLAYING,
      rescuedAnimals: [],
      saved: null
    }
    Stats.load(stats);
    stats.topImg = new Image();
    stats.topImg.src = 'www/assets/top.svg';
    stats.topImg.onload = function() {
      var aspect = stats.topImg.width / stats.topImg.height;
      stats.topWidth = canvas.width;
      stats.topHeight = stats.topWidth / aspect;
      stats.topLoaded = true;
      calculateStatsLoaded(stats);
    }
    stats.bottomImg = new Image();
    stats.bottomImg.src = 'www/assets/bottom.svg';
    stats.bottomImg.onload = function() {
      var aspect = stats.bottomImg.width / stats.bottomImg.height;
      stats.bottomWidth = canvas.width;
      stats.bottomHeight = stats.bottomWidth / aspect;
      stats.bottomLoaded = true;
      calculateStatsLoaded(stats);
    }
    stats.loseImg = new Image();
    stats.loseImg.src = 'www/assets/lose.svg';
    stats.loseImg.onload = function() {
      var aspect = stats.loseImg.width / stats.loseImg.height;
      stats.loseWidth = canvas.width * 0.9;
      stats.loseHeight = stats.loseWidth / aspect;
      stats.loseLoaded = true;
      calculateStatsLoaded(stats);
    }
    stats.winImg = new Image();
    stats.winImg.src = 'www/assets/win.svg';
    stats.winImg.onload = function() {
      var aspect = stats.winImg.width / stats.winImg.height;
      stats.winWidth = canvas.width * 0.9;
      stats.winHeight = stats.winWidth / aspect;
      stats.winLoaded = true;
      calculateStatsLoaded(stats);
    }
    stats.animal = {};
    stats.animal.img = new Image();
    stats.animal.img.src = Animal.Images[level.animal];
    stats.animal.img.onload = function() {
      var aspect = stats.animal.img.width / stats.animal.img.height;
      stats.animal.width = canvas.width * 0.45;
      stats.animal.height = stats.animal.width / aspect;
      stats.animal.loaded = true;
    }
    stats.bubble = {};
    stats.bubble.img = new Image();
    stats.bubble.img.src = Animal.Bubbles[level.animal];
    stats.bubble.img.onload = function() {
      var aspect = stats.bubble.img.width / stats.bubble.img.height;
      stats.bubble.width = canvas.width * 0.35;
      stats.bubble.height = stats.bubble.width / aspect;
      stats.bubble.loaded = true;
    }
    return stats;
  }

  function calculateStatsLoaded(stats) {
    stats.loaded = stats.topLoaded && stats.bottomLoaded && stats.loseLoaded && stats.winLoaded;
  }

  Stats.fire = function(stats) {
    stats.bubblesLeft--;
    stats.history.bubblesFired++;
    Stats.save(stats);
  }

  Stats.dropBubbles = function(stats, num) {
    stats.history.bubblesDropped += num;
    Stats.save(stats);
  }

  Stats.popBubbles = function(stats, num) {
    stats.history.bubblesPopped += num;
    Stats.save(stats);
  }

  Stats.getNextAnimalCoords = function(stats) {
    var canvasSize = floorsix.getCanvasSize();
    var w = Stats.ANIMAL_WIDTH_PCT * canvasSize.width;
    var xpad = Stats.X_PAD_PCT * canvasSize.width;
    return {
      x: xpad + (w / 2) + (stats.rescuedAnimals.length - 1) * w,
      y: canvasSize.height - Stats.BOTTOM_Y_PCT * canvasSize.height
    }
  }

  Stats.animate = function(elapsedMs, stats) {
    if (stats.notificationOpacity < 1) {
      stats.notificationOpacity += Stats.FADE_IN_RATE * elapsedMs;
      if (stats.notificationOpacity > 1) {
        stats.notificationOpacity = 1;
      }
    }
  }

  Stats.rescueAnimal = function(stats, bubble) {
    stats.rescuedAnimals.push(bubble);
    stats.history.animalsRescued++;
    stats.history.animals[bubble.animal] = true;
    Stats.save(stats);
  }

  Stats.renderTopStats = function(canvas, stats) {
    if (!stats || !stats.loaded) {
      return;
    }
    var fontSize = Math.round(canvas.height * Stats.TOP_FONT_SIZE_PCT);
    canvas.context.drawImage(stats.topImg, 0, 0, stats.topWidth, stats.topHeight);
    canvas.context.font = fontSize + "px Avenir-Light";
    canvas.context.fillStyle = "#0ba067";
    canvas.context.textBaseline = "middle";
    canvas.context.textAlign = "left";
    canvas.context.fillText("LEVEL", Stats.X_PAD_PCT * canvas.width, Stats.TOP_Y_PCT * canvas.height);
    var widthOfLevelLabel = canvas.context.measureText("LEVEL").width;
    canvas.context.font = fontSize + "px Avenir-Heavy";
    canvas.context.fillText(stats.level.number.toString(), Stats.X_PAD_PCT * canvas.width + widthOfLevelLabel + Stats.X_LABEL_PAD_PCT * canvas.width, Stats.TOP_Y_PCT * canvas.height);

    canvas.context.font = fontSize + "px Avenir-Light";
    canvas.context.textAlign = "right";
    var scorestr = stringify(stats.score);
    canvas.context.fillText(scorestr, canvas.width - Stats.X_PAD_PCT * canvas.width, Stats.TOP_Y_PCT * canvas.height);
  }

  Stats.renderBottomStats = function(canvas, stats) {
    if (!stats || !stats.loaded) {
      return;
    }
    var fontSize = Math.round(canvas.height * Stats.BOTTOM_FONT_SIZE_PCT);
    canvas.context.drawImage(stats.bottomImg, 0, canvas.height - stats.bottomHeight, stats.bottomWidth, stats.bottomHeight);
    canvas.context.font = fontSize + "px Avenir-Medium";
    canvas.context.fillStyle = "#0ba067";
    canvas.context.textAlign = "center";
    canvas.context.textBaseline = "bottom";
    canvas.context.fillText(stats.bubblesLeft.toString(), canvas.width / 2, canvas.height);
  }

  Stats.renderLose = function(canvas, stats, animal) {
    canvas.context.globalAlpha = stats.notificationOpacity;
    canvas.context.fillStyle = "rgba(0, 0, 0, 0.7)";
    canvas.context.fillRect(0, 0, canvas.width, canvas.height);
    var x = (canvas.width - stats.loseWidth) / 2;
    var y = (canvas.height - stats.loseHeight) / 2;
    canvas.context.drawImage(stats.loseImg, x, y, stats.loseWidth, stats.loseHeight);
    var ax = (canvas.width - stats.bubble.width) / 2;
    var ay = (canvas.height - stats.bubble.height) / 2;
    canvas.context.drawImage(stats.bubble.img, ax, ay, stats.bubble.width, stats.bubble.height);
    canvas.context.globalAlpha = 1;
  }

  Stats.renderWin = function(canvas, stats) {
    canvas.context.globalAlpha = stats.notificationOpacity;
    canvas.context.fillStyle = "rgba(0, 0, 0, 0.7)";
    canvas.context.fillRect(0, 0, canvas.width, canvas.height);
    var x = (canvas.width - stats.winWidth) / 2;
    var y = (canvas.height - stats.winHeight) / 2;
    canvas.context.drawImage(stats.winImg, x, y, stats.winWidth, stats.winHeight);
    var ax = (canvas.width - stats.animal.width) / 2;
    var ay = (canvas.height - stats.animal.height) / 2;
    canvas.context.drawImage(stats.animal.img, ax, ay, stats.animal.width, stats.animal.height);
    canvas.context.globalAlpha = 1;
  }

  Stats.youLose = function(stats) {
    stats.phase = Stats.PHASE_LOSE;
    stats.notificationOpacity = 0;
    stats.history.totalLosses++;
    Stats.save(stats);
  }

  Stats.youWin = function(stats) {
    stats.phase = Stats.PHASE_WIN;
    stats.notificationOpacity = 0;
    stats.history.totalWins++;
    var level = stats.history.levels[stats.level.number] || {};
    level.won = true;
    level.timeWon = new Date().getTime();
    level.highScore = Math.max(stats.score, level.highScore || 0);
    stats.history.levels[stats.level.number] = level;
    stats.history.totalScore = recalculateTotalScore(stats);
    Stats.save(stats);
  }

  Stats.load = function(stats) {
    try {
      stats.history = JSON.parse(localStorage.getItem('stats'));
    } catch (ex) {
      console.warn("Unable to load stats from localStorage");
    }
    if (!stats.history) {
      stats.history = {
        animals: {},
        animalsRescued: 0,
        levels: {},
        bubblesDropped: 0,
        bubblesFired: 0,
        bubblesPopped: 0,
        totalLosses: 0,
        totalTime: 0,
        totalScore: 0,
        totalWins: 0
      };
    }
    return stats;
  }

  Stats.save = function(stats) {
    try {
      localStorage.setItem('stats', JSON.stringify(stats.history));
    } catch (ex) {
      console.error("Can't store game state");
    }
  }

  function recalculateTotalScore(stats) {
    var total = 0;
    for (var prop in stats.history.levels) {
      var level = stats.history.levels[prop];
      total += level.highScore || 0;
    }
    return total;
  }

  function stringify(score) {
    var str = '';
    var tmp = score.toString();
    while (tmp.length) {
      var chars = tmp.length > 3 ? 3 : tmp.length;
      if (str) {
        str = ',' + str;
      }
      str = tmp.substring(tmp.length - chars, tmp.length) + str;
      tmp = tmp.substring(0, tmp.length - chars);
    }
    return str;
  }

})();

var Theme = {};

Theme.WOODLAND = {
  background: {
    url: 'www/assets/themes/woodland/woodland.png'
  },
  flurries: [
    { url: 'www/assets/themes/flurry1.svg', count: 8 },
    { url: 'www/assets/themes/flurry2.svg', count: 8 },
    { url: 'www/assets/themes/flurry3.svg', count: 8 },
    { url: 'www/assets/themes/flurry4.svg', count: 8 }
  ]
}
Theme.MOUNTAIN = {
  background: {
    url: 'www/assets/themes/mountain/mountain.png'
  },
  flurries: [
    { url: 'www/assets/themes/flurry1.svg', count: 8 },
    { url: 'www/assets/themes/flurry2.svg', count: 8 },
    { url: 'www/assets/themes/flurry3.svg', count: 8 },
    { url: 'www/assets/themes/flurry4.svg', count: 8 }
  ]
}
Theme.PRAIRIE = {
  background: {
    url: 'www/assets/themes/prairie/prairie.png'
  },
  flurries: [
    { url: 'www/assets/themes/flurry1.svg', count: 8 },
    { url: 'www/assets/themes/flurry2.svg', count: 8 },
    { url: 'www/assets/themes/flurry3.svg', count: 8 },
    { url: 'www/assets/themes/flurry4.svg', count: 8 }
  ]
}
Theme.BAMBOO = {
  background: {
    url: 'www/assets/themes/bamboo/bamboo.png'
  },
  flurries: [
    { url: 'www/assets/themes/flurry1.svg', count: 5 },
    { url: 'www/assets/themes/flurry2.svg', count: 5 },
    { url: 'www/assets/themes/flurry3.svg', count: 5 },
    { url: 'www/assets/themes/flurry4.svg', count: 5 }
  ]
}

Theme.initialize = function(theme) {
  if (!theme.loaded && !theme.loading) {
    var flurries = theme.flurries.slice(0);
    theme.flurries = [];
    flurries.forEach(function(flurry) {
      flurry.count = flurry.count || 1;
      for (var i=0; i < flurry.count; i++) {
        theme.flurries.push({ url: flurry.url });
      }
    });

    loadThemeImages(theme);
    theme.flurries.forEach(function(flurry) {
      Flurry.initializeSpawn(flurry);
    });
  }
}

Theme.animate = function(elapsedMs, theme) {
  var canvasSize = floorsix.getCanvasSize();
  if (theme.flurries) {
    theme.flurries.forEach(function(flurry) {
      Flurry.animateFlurry(elapsedMs, flurry, canvasSize);
    });
  }
}

Theme.render = function(canvas, theme) {
  if (!theme.loaded) {
    return;
  }
  renderBackground(canvas, theme);
  theme.flurries.forEach(function(flurry) {
    Flurry.renderFlurry(canvas, flurry);
  });
  canvas.context.globalAlpha = 1;
}

function renderBackground(canvas, theme) {
  var scale = canvas.width / theme.background.img.width;
  canvas.context.drawImage(theme.background.img, 0, 0, theme.background.width * scale, theme.background.height * scale);
}


function loadThemeImages(theme) {
  var canvasSize = floorsix.getCanvasSize();
  theme.loading = true;

  if (theme.background) {
    theme.background.img = new Image();
    theme.background.img.src = theme.background.url;
    theme.background.img.onload = function() {
      theme.background.loaded = true;
      updateLoadedStatus(theme);
      theme.background.width = theme.background.img.width;
      theme.background.height = theme.background.img.height;
    }
  }

  if (theme.flurries) {
    theme.flurries.forEach(function(flurry, i) {
      Flurry.loadFlurry(canvasSize, flurry, function() {
        updateLoadedStatus(theme);
      });
    });
  }
}

function updateLoadedStatus(theme) {
  var loaded = true;
  if (theme.background && !theme.background.loaded) {
    loaded = false;
  }
  if (theme.flurries && theme.flurries.find(function(f) { return !f.loaded })) {
    loaded = false;
  }
  theme.loaded = loaded;
}

floorsix.controller("/map", function() {
  var CLICK_TOLERANCE = 3;
  var map = Map.create();
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

floorsix.controller("/play", function() {
  var BUBBLES_PER_ROW = 11;
  var BUBBLE_ROW_HEIGHT_PCT = 0.9;
  var BUBBLE_ROW_HEIGHT;
  var BUBBLE_DIAMETER;
  var BUBBLE_RADIUS;
  var MIN_TRAJECTORY_Y;
  var MAP_PCT_HEIGHT = 0.5;
  var MAX_TOP_PCT = 0.05;

  var PHASE_PLAYING = 1;
  var PHASE_COLLECTORS_CARD = 2;
  var PHASE_LOSE = 3;
  var PHASE_WIN = 4;
  var phase = PHASE_PLAYING;

  var map;
  var theme;
  var blaster;
  var stats;
  var top = 0;
  var targetTop = 0;
  var stars = [];
  var fallingBubbles = [];
  var scores = [];
  var collectorsCard = null;

  var query = floorsix.search();
  var levelNumber = query.level;
  var level;
  initializeLevel();

  function initializeLevel() {
    level = Level.get(levelNumber);
    theme = level.theme;
    map = level.map;
    var canvasSize = floorsix.getCanvasSize();
    BUBBLE_DIAMETER = canvasSize.width / BUBBLES_PER_ROW;
    BUBBLE_RADIUS = BUBBLE_DIAMETER / 2;
    BUBBLE_ROW_HEIGHT = BUBBLE_ROW_HEIGHT_PCT * BUBBLE_DIAMETER;
    MIN_TRAJECTORY_Y = canvasSize.height * 0.3;
    Theme.initialize(theme);
    top = calculateTop(canvasSize);
    targetTop = top;
    initBubbles();
    initBlaster(canvasSize);
    if (!stats) {
      stats = Stats.initialize(canvasSize, level);
      stats.bubblesLeft = level.bubbles;
    }
  }

  function calculateTop(canvasSize) {
    var maxTop = MAX_TOP_PCT * canvasSize.height;
    var mapBottom = MAP_PCT_HEIGHT * canvasSize.height;
    var totalMapHeight = map.length * BUBBLE_ROW_HEIGHT;
    var newtop = mapBottom - totalMapHeight;
    if (newtop > maxTop) {
      newtop = maxTop;
    }
    return newtop;
  }

  function initBubbles() {
    map.forEach(function(row, rowIndex) {
      if (rowIndex % 2 == 0 && row.length != BUBBLES_PER_ROW
        || rowIndex % 2 == 1 && row.length != BUBBLES_PER_ROW - 1) {
        throw new Error("Invalid bubble map at row index " + rowIndex, row.length);
      }
      row.forEach(function(cell, i) {
        var x = i * BUBBLE_DIAMETER + BUBBLE_RADIUS + (rowIndex % 2 == 0 ? 0 : BUBBLE_RADIUS);
        var y = top + (rowIndex * BUBBLE_ROW_HEIGHT + BUBBLE_RADIUS);
        var animal = row[i] == Bubble.ANIMAL ? level.animal : null;
        var bubble = row[i] ? Bubble.create(x, y, BUBBLE_RADIUS, row[i], animal) : null;
        row[i] = bubble;
      });
    });
    recalculateMapRows();
  }

  function recalculateMapRows() {
    // always have one blank row at the bottom
    var count = 0;
    var isEmpty = true;
    for (var i=map.length - 1; i >= 0; i--) {
      for (var j=0; j<map[i].length; j++) {
        if (map[i][j]) {
          isEmpty = false;
          break;
        }
      }
      if (isEmpty) {
        count++;
      }
      else {
        break;
      }
    }
    if (count < 1) {
      var extraRow = [];
      var len = map.length % 2 == 0 ? BUBBLES_PER_ROW : BUBBLES_PER_ROW - 1;
      for (var i=0; i < len; i++) {
        extraRow.push(null);
      }
      map.push(extraRow);
    }
    else if (count > 1) {
      map.splice(map.length - (count - 1), (count - 1));
    }
    var canvasSize = floorsix.getCanvasSize();
    targetTop = calculateTop(canvasSize);
  }

  function initBlaster(canvasSize) {
    blaster = Blaster.createBlaster(canvasSize, BUBBLE_DIAMETER, BUBBLE_RADIUS);
    blaster.currentBubble = Bubble.create(blaster.x, blaster.y, BUBBLE_RADIUS, getRandomBubbleColor());
    blaster.nextBubble = Bubble.create(blaster.nextX, blaster.nextY, BUBBLE_RADIUS, getRandomBubbleColor());
  }

  function handleTouchStart(x, y) {
    if (phase == PHASE_PLAYING) {
      var pt = { x:x, y:y };
      if (Bubble.pointHitTest(blaster.currentBubble, pt) || Bubble.pointHitTest(blaster.nextBubble, pt)) {
        switchBubbles();
      }
      else {
        calculateTrajectorySlope(x, y);
      }
    }
    else if (phase == PHASE_COLLECTORS_CARD) {
      collectorsCard = null;
      phase = PHASE_PLAYING;
    }
    else if (phase == PHASE_LOSE || phase == PHASE_WIN) {
      floorsix.navigate('/map?level=' + level.number);
    }
  }

  function handleTouchMove(x, y) {
    if (phase == PHASE_PLAYING) {
      calculateTrajectorySlope(x, y);
    }
  }

  function calculateTrajectorySlope(x, y) {
    if (y >= blaster.y - blaster.height / 2) {
      blaster.trajectory = null;
      return;
    }
    var slope = (y - blaster.y) / (x - blaster.x);
    blaster.trajectory = slope;
  }

  function handleTouchEnd(x, y) {
    if (phase == PHASE_PLAYING) {
      if (blaster.trajectory && stats.bubblesLeft) {
        // FIRE, SHOOT, LAUNCH
        var angle = floorsix.math.atan(y - blaster.y, x - blaster.x);
        blaster.currentBubble.v = {
          x: Math.cos(angle) * Bubble.BUBBLE_VELOCITY,
          y: Math.sin(angle) * Bubble.BUBBLE_VELOCITY
        }
        blaster.currentBubble.status = Bubble.FIRING;
        Stats.fire(stats);
      }
      blaster.trajectory = null;
    }
  }

  function animate(elapsedMs) {
    var canvasSize = floorsix.getCanvasSize();
    Theme.animate(elapsedMs, theme);
    Stats.animate(elapsedMs, stats);

    if (targetTop != top) {
      var dy = Bubble.BUBBLE_SHIFT_VELOCITY * elapsedMs * (targetTop > top ? 1 : -1);
      if (top + dy >= targetTop && dy > 0 || top + dy <= targetTop && dy < 0) {
        dy = targetTop - top;
      }
      top += dy;
      map.forEach(function(row, rowIndex) {
        row.forEach(function(bubble) {
          if (bubble) {
            Bubble.move(bubble, 0, dy);
          }
        });
      });
    }

    map.forEach(function(row, rowIndex) {
      row.forEach(function(bubble) {
        if (bubble) {
          Bubble.animate(elapsedMs, bubble, canvasSize);
        }
      });
    });

    fallingBubbles.forEach(function(bubble) {
      Bubble.animate(elapsedMs, bubble, canvasSize);
      if (bubble.status == Bubble.DEAD) {
        fallingBubbles.splice(fallingBubbles.indexOf(bubble), 1);
      }
    });

    stats.rescuedAnimals.forEach(function(bubble) {
      Bubble.animate(elapsedMs, bubble, canvasSize);
      if (bubble.status == Bubble.DEAD) {
        stats.rescuedAnimals.splice(stats.rescuedAnimals.indexOf(bubble), 1);
      }
    });

    if (blaster.currentBubble) {
      Bubble.animate(elapsedMs, blaster.currentBubble, canvasSize);
    }

    if (blaster.currentBubble && blaster.currentBubble.status == Bubble.FIRING && !blaster.currentBubble.target) {
      var collision = false;
      for (var m=0; m < map.length; m++) {
        var row = map[m];
        for (var r=0; r < row.length; r++) {
          var bubble = row[r];
          if (bubble && (Bubble.hitTest(bubble, blaster.currentBubble) || blaster.currentBubble.y < top + BUBBLE_RADIUS)) {
            settleBubble();
            collision = true;
            break;
          }
        }
        if (collision) {
          break;
        }
      }
    }

    if (blaster.currentBubble && blaster.currentBubble.status == Bubble.FIRING) {
      if (Math.random() < 0.75) {
        var trailWidth = blaster.currentBubble.d * 0.65;
        var x = blaster.currentBubble.x + Math.random() * trailWidth - trailWidth / 2;
        var y = blaster.currentBubble.y + Math.random() * trailWidth - trailWidth / 2;
        var size = (Math.random() * (Star.MAX_STAR_SIZE_PCT - Star.MIN_STAR_SIZE_PCT) + Star.MIN_STAR_SIZE_PCT) * blaster.currentBubble.d;
        stars.push(Star.create(x, y, size));
      }
    }

    if (blaster.nextBubble) {
      Bubble.animate(elapsedMs, blaster.nextBubble, canvasSize);
    }

    Blaster.animateBlaster(elapsedMs, blaster);

    stars.forEach(function(star) {
      Star.animate(elapsedMs, star);
      if (!star.alive) {
        stars.splice(stars.indexOf(star), 1);
      }
    });

    scores.forEach(function(score) {
      Score.animate(elapsedMs, score);
      if (!score.alive) {
        scores.splice(scores.indexOf(score), 1);
      }
    });

    if (collectorsCard) {
      Card.animate(elapsedMs, collectorsCard);
    }
  }

  function settleBubble() {
    var result = getClosestAvailableBubbleCoords(blaster.currentBubble);
    Bubble.setTarget(blaster.currentBubble, result.pt, function() {
      map[result.row][result.col] = blaster.currentBubble;

      var contiguousBubbleResults = [];
      var pigeon = makePigeonArray();
      getContiguousBubbles(blaster.currentBubble.color, result.row, result.col, contiguousBubbleResults, pigeon);
      var didDisappear = false;
      if (contiguousBubbleResults.length >= 3) {
        didDisappear = true;
        popBubbles(contiguousBubbleResults);

        var disconnectedBubbleResults = getDisconnectedBubbles();
        var fallers = disconnectedBubbleResults.filter(function(db) {
          return map[db.row][db.col] && !map[db.row][db.col].animal;
        });
        if (fallers.length) {
          dropBubbles(fallers);
        }
        var rescued = disconnectedBubbleResults.filter(function(db) {
          return map[db.row][db.col] && map[db.row][db.col].animal;
        });
        if (rescued.length) {
          rescueAnimals(rescued);
        }
      }
      recalculateMapRows();
      prepareNextBubble();

      if (isLevelComplete()) {
        console.log('you win');
        phase = PHASE_WIN;
        Stats.youWin(stats);
      }
      else if (!stats.bubblesLeft && !blaster.currentBubble) {
        console.log('you lose');
        phase = PHASE_LOSE;
        Stats.youLose(stats);
      }
    });
  }

  function isLevelComplete() {
    for (var i=map.length - 1; i >= 0; i--) {
      for (var j=0; j<map[i].length; j++) {
        if (map[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  function popBubbles(contiguousBubbleResults) {
    contiguousBubbleResults.forEach(function(con) {
      var bub = map[con.row][con.col];
      var s = Star.createStarburst(bub.x, bub.y, bub.d);
      stars = stars.concat(s);
      var sc = Score.createScoreburst(Stats.SCORE_PER_BUBBLE_POPPED, bub.x, bub.y, bub.d);
      scores.push(sc);
      map[con.row][con.col] = null;
    });
    stats.score += contiguousBubbleResults.length * Stats.SCORE_PER_BUBBLE_POPPED;
    Stats.popBubbles(stats, contiguousBubbleResults.length);
  }

  function dropBubbles(disconnectedBubbleResults) {
    disconnectedBubbleResults.forEach(function(db) {
      var bub = map[db.row][db.col];
      fallingBubbles.push(bub);
      Bubble.fall(bub);
      map[db.row][db.col] = null;
    });
    stats.score += disconnectedBubbleResults.length * Stats.SCORE_PER_FALLING_BUBBLE;
    Stats.dropBubbles(stats, disconnectedBubbleResults.length);
  }

  function rescueAnimals(disconnectedBubbleResults) {
    stats.score += disconnectedBubbleResults.length * Stats.SCORE_PER_RESCUED_ANIMAL;
    var canvasSize = floorsix.getCanvasSize();
    var tmp = map[disconnectedBubbleResults[0].row][disconnectedBubbleResults[0].col];
    collectorsCard = Card.create(canvasSize.width / 2, canvasSize.height / 2, canvasSize.width * 0.8, Animal.Images[tmp.animal], tmp.animal, Animal.Names[tmp.animal]);
    phase = PHASE_COLLECTORS_CARD;
    disconnectedBubbleResults.forEach(function(db) {
      var bub = map[db.row][db.col];
      var s = Star.createStarburst(bub.x, bub.y, bub.d);
      stars = stars.concat(s);
      Stats.rescueAnimal(stats, bub)
      Bubble.rescue(bub);
      Bubble.setTarget(bub, Stats.getNextAnimalCoords(stats), function() {});
      map[db.row][db.col] = null;
    });
  }

  function getDisconnectedBubbles() {
    var disconnectedPigeon = makePigeonArray();
    for (var row=0; row < map.length; row++) {
      for (var col=0; col < map[row].length; col++) {
        var contig = [];
        var pigeon = makePigeonArray();
        getContiguousBubbles(null, row, col, contig, pigeon);
        var connected = contig.find(function(c) { return c.row == 0; });
        if (!connected) {
          contig.forEach(function(con) {
            disconnectedPigeon[con.row][con.col] = true;
          });
        }
      }
    }
    var disconnected = [];
    disconnectedPigeon.forEach(function(r, rowIndex) {
      r.forEach(function(c, colIndex) {
        if (c) {
          disconnected.push({ row: rowIndex, col: colIndex });
        }
      });
    });
    return disconnected;
  }

  function makePigeonArray() {
    var pigeon = new Array(map.length);
    for (var i=0; i < pigeon.length; i++) {
      pigeon[i] = new Array(map[i].length);
      for (var j=0; j < pigeon[i].length; j++) {
        pigeon[i][j] = false;
      }
    }
    return pigeon;
  }

  function getContiguousBubbles(color, row, col, list, pigeon) {
    if (pigeon[row][col]) {
      return;
    }
    pigeon[row][col] = true;
    if (!map[row][col] || (color && map[row][col].color != color)) {
      return;
    }
    list.push({ row: row, col: col });
    if (row > 0) {
      getContiguousBubbles(color, row - 1, col, list, pigeon);
      if (row % 2 == 0 && col > 0) {
        getContiguousBubbles(color, row - 1, col - 1, list, pigeon);
      }
      if (row % 2 == 1 && col < map[row - 1].length - 1) {
        getContiguousBubbles(color, row - 1, col + 1, list, pigeon);
      }
    }
    if (row < map.length - 1) {
      getContiguousBubbles(color, row + 1, col, list, pigeon);
      if (row % 2 == 0 && col > 0) {
        getContiguousBubbles(color, row + 1, col - 1, list, pigeon);
      }
      if (row % 2 == 1 && col < map[row + 1].length - 1) {
        getContiguousBubbles(color, row + 1, col + 1, list, pigeon);
      }
    }
    if (col > 0) {
      getContiguousBubbles(color, row, col - 1, list, pigeon);
    }
    if (col < map[row].length - 1) {
      getContiguousBubbles(color, row, col + 1, list, pigeon);
    }
    return list;
  }

  function prepareNextBubble() {
    if (blaster.nextBubble) {
      Bubble.setTarget(blaster.nextBubble, { x: blaster.x, y: blaster.y }, function() {
        blaster.currentBubble = blaster.nextBubble;
        if (stats.bubblesLeft > 1) {
          blaster.nextBubble = Bubble.create(blaster.nextX, blaster.nextY, BUBBLE_RADIUS, getRandomBubbleColor());
        }
        else {
          blaster.nextBubble = null;
        }
      });
    }
    else {
      blaster.currentBubble = null;
    }
  }

  function switchBubbles() {
    if (blaster.currentBubble && blaster.nextBubble) {
      var tmp = blaster.currentBubble;
      blaster.currentBubble = blaster.nextBubble;
      blaster.nextBubble = tmp;

      Bubble.setTarget(blaster.currentBubble, { x: blaster.nextBubble.x, y: blaster.nextBubble.y }, function() {});
      Bubble.setTarget(blaster.nextBubble, { x: blaster.currentBubble.x, y: blaster.currentBubble.y }, function() {});
    }
  }

  function isValidBubbleColor(color) {
    var colors = getPossibleBubbleColors();
    if (colors.indexOf(color) == -1) {
      return false;
    }
    return true;
  }

  function getPossibleBubbleColors() {
    var colors = [];
    map.forEach(function(row) {
      row.forEach(function(bubble) {
        if (bubble && colors.indexOf(bubble.color) == -1 && bubble.color != Bubble.ANIMAL) {
          colors.push(bubble.color);
        }
      });
    });
    return colors;
  }

  function getRandomBubbleColor() {
    var colors = getPossibleBubbleColors();
    var r = Math.floor(Math.random() * colors.length);
    return colors[r];
  }

  function getClosestAvailableBubbleCoords(currentBubble) {
    var closestTarget;
    var closestSqDistance;
    var colIndex = 0;
    var rowIndex = 0;

    map.forEach(function(row, ri) {
      row.forEach(function(bubble, ci) {
        if (!bubble) {
          var x = ci * BUBBLE_DIAMETER + BUBBLE_RADIUS + (ri % 2 == 0 ? 0 : BUBBLE_RADIUS);
          var y = top + (ri * BUBBLE_ROW_HEIGHT + BUBBLE_RADIUS);
          var sqdist = (currentBubble.x - x)*(currentBubble.x - x) + (currentBubble.y - y)*(currentBubble.y - y);
          if (closestSqDistance === undefined || sqdist < closestSqDistance) {
            closestSqDistance = sqdist;
            closestTarget = { x: x, y: y };
            rowIndex = ri;
            colIndex = ci;
          }
        }
      });
    });
    return {
      pt: closestTarget,
      col: colIndex,
      row: rowIndex
    };
  }

  function render(canvas) {
    canvas.context.fillStyle = "#222222";
    canvas.context.fillRect(0, 0, canvas.width, canvas.height);

    Theme.render(canvas, theme);

    renderStars(canvas);
    renderScores(canvas);
    renderBubbles(canvas);
    var bounds = {
      left: BUBBLE_RADIUS,
      right: canvas.width - BUBBLE_RADIUS,
      top: MIN_TRAJECTORY_Y,
      bottom: blaster.y - BUBBLE_DIAMETER
    }
    Stats.renderBottomStats(canvas, stats);
    Blaster.renderBlaster(canvas, blaster, bounds);
    Stats.renderTopStats(canvas, stats);

    stats.rescuedAnimals.forEach(function(bubble) {
      Bubble.render(canvas, bubble);
    });

    if (collectorsCard) {
      Card.render(canvas, collectorsCard);
    }
    if (phase == PHASE_WIN) {
      Stats.renderWin(canvas, stats, level.animal);
    }
    else if (phase == PHASE_LOSE) {
      Stats.renderLose(canvas, stats, level.animal);
    }
  }

  function renderStars(canvas) {
    stars.forEach(function(star) {
      if (star.alive) {
        Star.render(canvas, star);
      }
    });
  }

  function renderScores(canvas) {
    scores.forEach(function(score) {
      if (score.alive) {
        Score.render(canvas, score);
      }
    });
  }

  function renderBubbles(canvas) {
    map.forEach(function(row, rowIndex) {
      row.forEach(function(bubble) {
        if (bubble) {
          Bubble.render(canvas, bubble);
        }
      });
    });

    fallingBubbles.forEach(function(bubble) {
      Bubble.render(canvas, bubble);
    });

    if (blaster.currentBubble) {
      Bubble.render(canvas, blaster.currentBubble);
    }
    if (blaster.nextBubble) {
      Bubble.render(canvas, blaster.nextBubble);
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
