var Level = {
  levels: []
};

Level.get = function(level) {
  return Level.levels[level];
}

Level.init = function() {
  var R = Bubble.RED;
  var B = Bubble.BLUE;
  var G = Bubble.GREEN;
  var Y = Bubble.YELLOW;
  var P = Bubble.PURPLE;
  var _ = null;
  var o = Bubble.ANIMAL

  Level.levels[1] = {
    number: 1,
    map: [
      [R,R,R,B,B,G,B,B,R,R,R],
       [R,R,B,o,G,G,B,B,R,R],
      [G,G,G,B,B,G,B,B,G,G,G],
       [R,R,G,B,G,G,B,G,R,R],
      [G,R,R,R,R,R,R,o,R,R,G],
       [G,G,G,B,B,B,B,G,G,G],
      [G,G,B,B,R,R,R,B,B,G,G],
       [R,B,R,G,G,G,G,R,B,R],
      [R,R,R,G,G,B,G,G,R,R,R],
       [G,G,B,B,B,B,B,B,G,G],
      [G,R,G,R,o,R,G,R,G,R,G],
       [R,G,R,R,G,G,R,R,G,R],
      [G,B,B,B,G,G,G,B,B,B,G],
       [G,B,R,R,R,R,R,R,B,G],
      [G,B,B,B,G,G,G,B,B,B,G],
       [B,B,R,R,R,R,R,R,B,B],
    ],
    bubbles: 30,
    animal: Animal.RACCOON,
    theme: Theme.WOODLAND,
    x: 0.3969,
    y: 0.825
  }

  Level.levels[2] = {
    number: 2,
    map: [
      [R,R,G,B,_,_,B,G,R,_,_],
       [G,R,_,B,G,B,_,G,R,_],
      [_,G,R,_,B,o,B,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.SKUNK,
    theme: Theme.WOODLAND
  }

  Level.levels[50] = {
    number: 50,
    map: [
      [R,R,_,B,B,_,B,B,_,R,R],
       [G,R,_,B,G,G,B,_,R,G],
      [G,_,R,_,B,G,B,_,R,_,G],
       [R,R,_,B,_,_,B,_,R,R],
      [_,R,_,B,B,R,B,B,_,R,_],
       [G,G,R,R,R,R,R,R,G,G],
      [G,_,B,_,B,o,B,_,B,_,G],
       [G,B,_,B,G,G,B,_,B,G],
      [G,_,R,R,B,B,B,R,R,_,G],
       [R,R,_,B,_,_,B,_,R,R],
      [_,R,_,B,B,R,B,B,_,R,_],
       [G,G,R,R,R,R,R,R,G,G],
      [G,_,B,_,B,G,B,_,B,_,G],
       [G,B,_,B,G,G,B,_,B,G],
      [G,_,R,R,B,B,B,R,R,_,G],
       [B,B,R,_,B,o,_,R,B,B],
    ],
    bubbles: 25,
    animal: Animal.PANDA,
    theme: Theme.BAMBOO
  }
}
