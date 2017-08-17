var Color = {};

Color.create = function(r, g, b, a) {
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}

Color.toString = function(c) {
  var r = Math.round(c.r);
  var g = Math.round(c.g);
  var b = Math.round(c.b);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + c.a + ')';
}
