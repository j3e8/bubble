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

(function() {
  Stats.initialize = function(canvas, levelNumber) {
    var stats = {
      bubblesLeft: 0,
      score: 0,
      levelNumber: levelNumber,
      rescuedAnimals: []
    }
    stats.topImg = new Image();
    stats.topImg.src = 'www/assets/top.svg';
    stats.topImg.onload = function() {
      var aspect = stats.topImg.width / stats.topImg.height;
      stats.topWidth = canvas.width;
      stats.topHeight = stats.topWidth / aspect;
      stats.topLoaded = true;
      stats.loaded = stats.topLoaded && stats.bottomLoaded;
    }
    stats.bottomImg = new Image();
    stats.bottomImg.src = 'www/assets/bottom.svg';
    stats.bottomImg.onload = function() {
      var aspect = stats.bottomImg.width / stats.bottomImg.height;
      stats.bottomWidth = canvas.width;
      stats.bottomHeight = stats.bottomWidth / aspect;
      stats.bottomLoaded = true;
      stats.loaded = stats.topLoaded && stats.bottomLoaded;
    }
    return stats;
  }

  Stats.getNextAnimalCoords = function(stats) {
    var canvas = floorsix.getCanvas();
    var w = Stats.ANIMAL_WIDTH_PCT * canvas.width;
    var xpad = Stats.X_PAD_PCT * canvas.width;
    return {
      x: xpad + (w / 2) + (stats.rescuedAnimals.length - 1) * w,
      y: canvas.height - Stats.BOTTOM_Y_PCT * canvas.height
    }
  }

  Stats.renderTopStats = function(ctx, canvas, stats) {
    if (!stats || !stats.loaded) {
      return;
    }
    var fontSize = Math.round(canvas.height * Stats.TOP_FONT_SIZE_PCT);
    ctx.drawImage(stats.topImg, 0, 0, stats.topWidth, stats.topHeight);
    ctx.font = fontSize + "px Avenir-Light";
    ctx.fillStyle = "#0ba067";
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.fillText("LEVEL", Stats.X_PAD_PCT * canvas.width, Stats.TOP_Y_PCT * canvas.height);
    ctx.font = fontSize + "px Avenir-Heavy";
    ctx.fillText(stats.levelNumber.toString(), 80, Stats.TOP_Y_PCT * canvas.height);

    ctx.font = fontSize + "px Avenir-Light";
    ctx.textAlign = "right";
    var scorestr = stringify(stats.score);
    ctx.fillText(scorestr, canvas.width - Stats.X_PAD_PCT * canvas.width, Stats.TOP_Y_PCT * canvas.height);
  }

  Stats.renderBottomStats = function(ctx, canvas, stats) {
    if (!stats || !stats.loaded) {
      return;
    }
    var fontSize = Math.round(canvas.height * Stats.BOTTOM_FONT_SIZE_PCT);
    ctx.drawImage(stats.bottomImg, 0, canvas.height - stats.bottomHeight, stats.bottomWidth, stats.bottomHeight);
    ctx.font = fontSize + "px Avenir-Medium";
    ctx.fillStyle = "#0ba067";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText(stats.bubblesLeft.toString(), canvas.width / 2, canvas.height);
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
