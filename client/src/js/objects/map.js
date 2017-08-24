var Map = {};

Map.HEIGHT_TO_CANVAS_RATIO = 2.0;

(function() {
  var minx;
  var maxx = 0;
  var miny;
  var maxy = 0;

  var LEVEL_ICON_WIDTH = 30; // px

  var levelIcon = {
    loaded: false,
    img: new Image()
  }
  levelIcon.img.src = "www/assets/levelIcon.svg";
  levelIcon.img.onload = function() {
    levelIcon.loaded = true;
    var aspect = levelIcon.img.width / levelIcon.img.height;
    levelIcon.width = LEVEL_ICON_WIDTH;
    levelIcon.height = levelIcon.width / aspect;
  }

  Map.create = function(canvas) {
    var map = {
      center: { x: 0.399, y: 1 }
    };
    map.img = new Image();
    map.img.src = "www/assets/map.svg";
    map.img.onload = function() {
      map.loaded = true;
      var aspect = map.img.width / map.img.height;
      map.height = Map.HEIGHT_TO_CANVAS_RATIO * canvas.height;
      map.width = map.height * aspect;
      map.x = (canvas.width / 2) - (map.width * map.center.x);
      map.y = (canvas.height) - (map.height * map.center.y);
      minx = canvas.width - map.width;
      miny = canvas.height - map.height;
    }
    map.levels = [
      { number: 1, x: 0.3969, y: 0.825 }
    ];
    return map;
  }

  Map.animate = function(elapsedMs, map) {

  }

  Map.render = function(canvas, map) {
    var ctx = canvas.getContext("2d");
    if (map && map.img && map.loaded) {
      ctx.drawImage(map.img, map.x, map.y, map.width, map.height);

      if (levelIcon.loaded) {
        map.levels.forEach(function(level) {
          renderLevelIcon(canvas, ctx, map, level);
        });
      }
    }
  }

  function renderLevelIcon(canvas, ctx, map, level) {
    var pt = getCoordsForLevelIcon(map, level);
    ctx.drawImage(levelIcon.img, pt.x - levelIcon.width / 2, pt.y - levelIcon.height / 2, levelIcon.width, levelIcon.height);
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

  Map.hitTest = function(map, level, x, y) {
    var pt = getCoordsForLevelIcon(map, level);
    var sqd = (pt.x - x)*(pt.x - x) + (pt.y - y)*(pt.y - y);
    if (sqd <= LEVEL_ICON_WIDTH * LEVEL_ICON_WIDTH) {
      return true;
    }
    return false;
  }
})();
