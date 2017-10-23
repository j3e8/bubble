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
    var canvas = floorsix.getCanvas();
    var w = Stats.ANIMAL_WIDTH_PCT * canvas.width;
    var xpad = Stats.X_PAD_PCT * canvas.width;
    return {
      x: xpad + (w / 2) + (stats.rescuedAnimals.length - 1) * w,
      y: canvas.height - Stats.BOTTOM_Y_PCT * canvas.height
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
    var widthOfLevelLabel = ctx.measureText("LEVEL").width;
    ctx.font = fontSize + "px Avenir-Heavy";
    ctx.fillText(stats.level.number.toString(), Stats.X_PAD_PCT * canvas.width + widthOfLevelLabel + Stats.X_LABEL_PAD_PCT * canvas.width, Stats.TOP_Y_PCT * canvas.height);

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

  Stats.renderLose = function(ctx, canvas, stats, animal) {
    ctx.globalAlpha = stats.notificationOpacity;
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var x = (canvas.width - stats.loseWidth) / 2;
    var y = (canvas.height - stats.loseHeight) / 2;
    ctx.drawImage(stats.loseImg, x, y, stats.loseWidth, stats.loseHeight);
    var ax = (canvas.width - stats.bubble.width) / 2;
    var ay = (canvas.height - stats.bubble.height) / 2;
    ctx.drawImage(stats.bubble.img, ax, ay, stats.bubble.width, stats.bubble.height);
    ctx.globalAlpha = 1;
  }

  Stats.renderWin = function(ctx, canvas, stats) {
    ctx.globalAlpha = stats.notificationOpacity;
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var x = (canvas.width - stats.winWidth) / 2;
    var y = (canvas.height - stats.winHeight) / 2;
    ctx.drawImage(stats.winImg, x, y, stats.winWidth, stats.winHeight);
    var ax = (canvas.width - stats.animal.width) / 2;
    var ay = (canvas.height - stats.animal.height) / 2;
    ctx.drawImage(stats.animal.img, ax, ay, stats.animal.width, stats.animal.height);
    ctx.globalAlpha = 1;
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
