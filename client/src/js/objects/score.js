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
