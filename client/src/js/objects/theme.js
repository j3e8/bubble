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
