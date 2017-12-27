var Map = {};

Map.HEIGHT_TO_CANVAS_RATIO = 2.0;
Map.FRICTION = 0.01;

(function() {
  var minx;
  var maxx = 0;
  var miny;
  var maxy = 0;

  var LEVEL_ICON_WIDTH_PCT = 0.05;
  var LOCK_ICON_WIDTH_PCT = 0.06;

  var levelIcon = {
    loaded: false,
    img: new Image()
  }
  var lockIcon = {
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
    lockIcon.img.src = "www/assets/lock.svg";
    lockIcon.img.onload = function() {
      lockIcon.loaded = true;
      var aspect = lockIcon.img.width / lockIcon.img.height;
      lockIcon.width = LOCK_ICON_WIDTH_PCT * canvasSize.width;
      lockIcon.height = lockIcon.width / aspect;
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
