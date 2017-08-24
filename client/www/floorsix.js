(function() {

  if (!window.floorsix) {
    window.floorsix = {};
  }

  var lastFrame;
  var controllers = {};
  var animator, renderer, touchstart, touchmove, touchend;
  var canvas;
  var currentRoute;
  var config = {
    aspect: 0.8,
    backgroundColor: '#000000'
  };

  var _isInitialized = false;

  floorsix.controller = function(route, fn) {
    controllers[route] = fn;
  }

  floorsix.getCanvas = function() {
    return canvas;
  }

  floorsix.app = function(cfg) {
    _isInitialized = true;
    config = Object.assign({}, config, cfg);
  }

  floorsix.geometry = {};
  floorsix.geometry.subtractPoints = function(a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    }
  }

  floorsix.math = {};
  floorsix.math.atan = function(rise, run) {
    if (run == 0 && rise > 0) {
      return Math.PI * 0.5;
    }
    else if (run == 0 && rise <= 0) {
      return Math.PI * 1.5;
    }
    var angle = Math.atan(rise / run);
    if (run < 0) {
      angle += Math.PI;
    }
    return angle;
  }

  floorsix.physics = {};
  floorsix.physics.gravity = 0.001;

  floorsix.search = function() {
    var search = {};
    if (window.location.hash.indexOf('?') == -1) {
      return search;
    }
    var qs = window.location.hash.substring(window.location.hash.indexOf('?') + 1);
    var pairs = qs.split('&');
    pairs.forEach(function(pair) {
      var parts = pair.split('=');
      var key = decodeURIComponent(parts[0]);
      if (key) {
        var value = decodeURIComponent(parts[1]);
        if (value == '') {
          value = true;
        }
        if (key.indexOf('[]') != -1) {
          key = key.substring(0, key.indexOf('[]'));
          if (!search[key]) {
            search[key] = [];
          }
          search[key].push(value);
        }
        else if (key.indexOf('[') != -1) {
          var tmp = key;
          key = tmp.substring(0, tmp.indexOf('['));
          var childKey = tmp.substring(tmp.indexOf('[') + 1, tmp.indexOf(']', tmp.indexOf('[')));
          if (!search[key]) {
            search[key] = {};
          }
          search[key][childKey] = value;
        }
        else {
          search[key] = value;
        }
      }
    });
    return search;
  }

  window.addEventListener("load", function() {
    document.body.style.padding = "0";
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = config.backgroundColor;
    document.body.height = "100%";
    document.body.innerHTML = '';

    canvas = document.createElement("canvas");
    canvas.style.position = "relative";
    document.body.appendChild(canvas);
    fillParent();

    initClickEvents();

    var _resizeTimer;
    window.addEventListener("resize", function() {
      clearTimeout(_resizeTimer);
      _resizeTimer = setTimeout(fillParent, 50);
    });

    setInterval(checkForRouteChange, 100);

    _requestAnimationFrame(animate);
  });

  function checkForRouteChange() {
    if (!_isInitialized) {
      return;
    }
    var newRoute = getCurrentRoute();
    if (newRoute != currentRoute) {
      currentRoute = newRoute;
      changeRoute();
    }
  }

  function getCurrentRoute() {
    if (!window.location.hash) {
      return '/';
    }
    var indexOfHash = window.location.hash.indexOf('#');
    var hash = window.location.hash.substring(indexOfHash + 1);
    if (hash.indexOf('?') != -1) {
      hash = hash.substring(0, hash.indexOf('?'));
    }
    if (!hash) {
      return '/';
    }
    return hash;
  }

  function changeRoute() {
    if (controllers[currentRoute]) {
      var result = controllers[currentRoute]();
      animator = result.animate;
      renderer = result.render;
      touchstart = result.touchstart;
      touchmove = result.touchmove;
      touchend = result.touchend;
      if (renderer) {
        renderer(canvas);
      }
    }
    else {
      console.error("Controller not found for route", currentRoute);
    }
  }

  function fillParent() {
    var windowAspect = document.body.offsetWidth / document.body.offsetHeight;
    if (windowAspect >= config.aspect) {
      canvas.height = document.body.offsetHeight;
      canvas.width = canvas.height * config.aspect;
      var extra = document.body.offsetWidth - canvas.width;
      canvas.style.marginLeft = (extra / 2) + "px";
      canvas.style.marginTop = "0";
    }
    else {
      canvas.width = document.body.offsetWidth;
      canvas.height = canvas.width / config.aspect;
      var extra = document.body.offsetHeight - canvas.height;
      canvas.style.marginTop = (extra / 2) + "px";
      canvas.style.marginLeft = "0";
    }
  }

  function initClickEvents() {
    canvas.addEventListener("mousedown", function(e) {
      var pt = getCoordsRelativeToCanvas(e.clientX, e.clientY, canvas);
      if (touchstart) {
        touchstart(pt.x, pt.y);
      }
    });
    canvas.addEventListener("mousemove", function(e) {
      var pt = getCoordsRelativeToCanvas(e.clientX, e.clientY, canvas);
      if (touchmove) {
        touchmove(pt.x, pt.y);
      }
    });
    canvas.addEventListener("mouseup", function(e) {
      var pt = getCoordsRelativeToCanvas(e.clientX, e.clientY, canvas);
      if (touchend) {
        touchend(pt.x, pt.y);
      }
    });
    canvas.addEventListener("touchstart", function(e) {
      var pt = getCoordsRelativeToCanvas(e.touches[0].clientX, e.touches[0].clientY, canvas);
      if (touchstart) {
        touchstart(pt.x, pt.y);
      }
    });
    canvas.addEventListener("touchmove", function(e) {
      var pt = getCoordsRelativeToCanvas(e.touches[0].clientX, e.touches[0].clientY, canvas);
      if (touchmove) {
        touchmove(pt.x, pt.y);
      }
    });
    canvas.addEventListener("touchend", function(e) {
      var pt = getCoordsRelativeToCanvas(e.changedTouches[0].clientX, e.changedTouches[0].clientY, canvas);
      if (touchend) {
        touchend(pt.x, pt.y);
      }
    });
  }

  function getCoordsRelativeToCanvas(x, y, canvas) {
    var bounds = canvas.getBoundingClientRect();
    x = x - bounds.left;
    y = y - bounds.top;
    return { x: x, y: y };
  }

  function _requestAnimationFrame(animate) {
    if (window.requestAnimationFrame) window.requestAnimationFrame(animate);
    else if (window.mozRequestAnimationFrame) window.mozRequestAnimationFrame(animate);
    else if (window.webkitRequestAnimationFrame) window.webkitRequestAnimationFrame(animate);
    else if (window.msRequestAnimationFrame) window.msRequestAnimationFrame(animate);
    else { console.error("Can't request animation frame"); }
  }

  function animate() {
    if (!_isInitialized) {
      return;
    }
    var thisFrame = new Date().getTime();
    if (!lastFrame) lastFrame = thisFrame;
    var elapsedMs = thisFrame - lastFrame;
    if (elapsedMs && animator) {
      var shouldRender = animator(elapsedMs);
      if (shouldRender !== false && renderer) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = config.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        renderer(canvas);
      }
    }
    lastFrame = thisFrame;
    _requestAnimationFrame(animate);
  }

})();
