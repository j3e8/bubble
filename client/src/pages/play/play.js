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
    var canvas = floorsix.getCanvas();
    BUBBLE_DIAMETER = canvas.width / BUBBLES_PER_ROW;
    BUBBLE_RADIUS = BUBBLE_DIAMETER / 2;
    BUBBLE_ROW_HEIGHT = BUBBLE_ROW_HEIGHT_PCT * BUBBLE_DIAMETER;
    MIN_TRAJECTORY_Y = canvas.height * 0.3;
    Theme.initialize(theme);
    top = calculateTop();
    targetTop = top;
    initBubbles(canvas);
    initBlaster(canvas);
    if (!stats) {
      stats = Stats.initialize(canvas, level);
      stats.bubblesLeft = level.bubbles;
    }
  }

  function calculateTop() {
    var canvas = floorsix.getCanvas();
    var maxTop = MAX_TOP_PCT * canvas.height;
    var mapBottom = MAP_PCT_HEIGHT * canvas.height;
    var totalMapHeight = map.length * BUBBLE_ROW_HEIGHT;
    var newtop = mapBottom - totalMapHeight;
    if (newtop > maxTop) {
      newtop = maxTop;
    }
    return newtop;
  }

  function initBubbles(canvas) {
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
    targetTop = calculateTop();
  }

  function initBlaster(canvas) {
    blaster = Blaster.createBlaster(canvas, BUBBLE_DIAMETER, BUBBLE_RADIUS);
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
      var canvas = floorsix.getCanvas();
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
    var canvas = floorsix.getCanvas();
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
          Bubble.animate(elapsedMs, bubble, canvas);
        }
      });
    });

    fallingBubbles.forEach(function(bubble) {
      Bubble.animate(elapsedMs, bubble, canvas);
      if (bubble.status == Bubble.DEAD) {
        fallingBubbles.splice(fallingBubbles.indexOf(bubble), 1);
      }
    });

    stats.rescuedAnimals.forEach(function(bubble) {
      Bubble.animate(elapsedMs, bubble, canvas);
      if (bubble.status == Bubble.DEAD) {
        stats.rescuedAnimals.splice(stats.rescuedAnimals.indexOf(bubble), 1);
      }
    });

    if (blaster.currentBubble) {
      Bubble.animate(elapsedMs, blaster.currentBubble, canvas);
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
      Bubble.animate(elapsedMs, blaster.nextBubble, canvas);
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
    var canvas = floorsix.getCanvas();
    var tmp = map[disconnectedBubbleResults[0].row][disconnectedBubbleResults[0].col];
    collectorsCard = Card.create(canvas.width / 2, canvas.height / 2, canvas.width * 0.8, Animal.Images[tmp.animal], tmp.animal, Animal.Names[tmp.animal]);
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
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#222222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    Theme.render(ctx, canvas, theme);

    renderStars(ctx);
    renderScores(ctx);
    renderBubbles(ctx);
    var bounds = {
      left: BUBBLE_RADIUS,
      right: canvas.width - BUBBLE_RADIUS,
      top: MIN_TRAJECTORY_Y,
      bottom: blaster.y - BUBBLE_DIAMETER
    }
    Stats.renderBottomStats(ctx, canvas, stats);
    Blaster.renderBlaster(ctx, blaster, bounds);
    Stats.renderTopStats(ctx, canvas, stats);

    stats.rescuedAnimals.forEach(function(bubble) {
      Bubble.render(ctx, bubble);
    });

    if (collectorsCard) {
      Card.render(ctx, collectorsCard);
    }
    if (phase == PHASE_WIN) {
      Stats.renderWin(ctx, canvas, stats, level.animal);
    }
    else if (phase == PHASE_LOSE) {
      Stats.renderLose(ctx, canvas, stats, level.animal);
    }
  }

  function renderStars(ctx) {
    stars.forEach(function(star) {
      if (star.alive) {
        Star.render(ctx, star);
      }
    });
  }

  function renderScores(ctx) {
    scores.forEach(function(score) {
      if (score.alive) {
        Score.render(ctx, score);
      }
    });
  }

  function renderBubbles(ctx) {
    map.forEach(function(row, rowIndex) {
      row.forEach(function(bubble) {
        if (bubble) {
          Bubble.render(ctx, bubble);
        }
      });
    });

    fallingBubbles.forEach(function(bubble) {
      Bubble.render(ctx, bubble);
    });

    if (blaster.currentBubble) {
      Bubble.render(ctx, blaster.currentBubble);
    }
    if (blaster.nextBubble) {
      Bubble.render(ctx, blaster.nextBubble);
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
