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

Score.render = function(ctx, score) {
  if (!score.alive) {
    return;
  }
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#ffffff";
  ctx.font = score.size + "px Avenir-Black";
  ctx.globalAlpha = score.opacity;
  ctx.fillText(score.value.toString(), score.x, score.y);
  ctx.globalAlpha = 1;
}
