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
