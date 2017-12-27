var Level = {
  levels: []
};

Level.MAP_WIDTH_PX = 10996;
Level.MAP_HEIGHT_PX = 3858;

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

  // WOODLAND
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
    bubbles: 45,
    animal: Animal.RACCOON,
    theme: Theme.WOODLAND,
    x: 0.3969,
    y: 0.825
  }

  Level.levels[2] = {
    number: 2,
    map: [
      [R,R,G,B,G,G,G,B,G,R,R],
       [G,R,G,B,G,G,B,G,R,G],
      [G,G,G,B,B,o,B,B,G,G,G],
       [B,B,R,R,G,G,R,R,B,B],
      [B,R,R,G,G,B,G,G,R,R,B],
       [B,B,B,G,G,G,G,B,B,B],
      [R,R,G,R,R,B,R,R,G,R,R],
       [R,G,G,G,B,B,G,G,G,R],
      [R,R,G,o,G,G,G,G,G,R,R],
       [B,B,R,R,G,G,R,R,B,B],
      [B,R,G,B,R,B,R,B,G,R,B],
       [R,B,R,B,B,B,B,R,B,R],
      [R,R,R,G,G,B,G,G,R,R,R],
       [B,B,G,G,R,R,G,o,B,B],
      [B,G,G,R,R,G,R,R,G,G,B],
       [B,B,B,G,G,G,G,B,B,B],
      [B,G,G,G,R,R,R,G,G,G,B]
    ],
    bubbles: 10,
    animal: Animal.CHIPMUNK,
    theme: Theme.WOODLAND,
    x: 0.377,
    y: 0.718
  }

  Level.levels[3] = {
    number: 3,
    map: [
      [_,_,G,B,B,_,B,B,G,_,_],
       [_,G,_,B,G,G,B,_,G,_],
      [_,G,R,_,B,o,B,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.SKUNK,
    theme: Theme.WOODLAND,
    x: 0.399,
    y: 0.698
  }

  Level.levels[4] = {
    number: 4,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.FOX,
    theme: Theme.WOODLAND,
    x: 0.417,
    y: 0.729
  }

  Level.levels[5] = {
    number: 5,
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
    bubbles: 30,
    animal: Animal.RABBIT,
    theme: Theme.WOODLAND,
    x: 3969 / Level.MAP_WIDTH_PX,
    y: 3250 / Level.MAP_HEIGHT_PX
  }

  Level.levels[6] = {
    number: 6,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.OWL,
    theme: Theme.WOODLAND,
    x: 3766 / Level.MAP_WIDTH_PX,
    y: 3510 / Level.MAP_HEIGHT_PX
  }

  Level.levels[7] = {
    number: 7,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.BEAVER,
    theme: Theme.WOODLAND,
    x: 3646 / Level.MAP_WIDTH_PX,
    y: 3046 / Level.MAP_HEIGHT_PX
  }

  Level.levels[8] = {
    number: 8,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.DEER,
    theme: Theme.WOODLAND,
    x: 3699 / Level.MAP_WIDTH_PX,
    y: 2768 / Level.MAP_HEIGHT_PX
  }

  Level.levels[9] = {
    number: 9,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.HEDGEHOG,
    theme: Theme.WOODLAND,
    x: 3930 / Level.MAP_WIDTH_PX,
    y: 2309 / Level.MAP_HEIGHT_PX
  }

  Level.levels[10] = {
    number: 10,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.PORCUPINE,
    theme: Theme.WOODLAND,
    x: 4355 / Level.MAP_WIDTH_PX,
    y: 2230 / Level.MAP_HEIGHT_PX
  }

  Level.levels[11] = {
    number: 11,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.BADGER,
    theme: Theme.WOODLAND,
    x: 4804 / Level.MAP_WIDTH_PX,
    y: 2347 / Level.MAP_HEIGHT_PX
  }

  Level.levels[12] = {
    number: 12,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.ROBIN,
    theme: Theme.WOODLAND,
    x: 4961 / Level.MAP_WIDTH_PX,
    y: 2925 / Level.MAP_HEIGHT_PX
  }

  Level.levels[13] = {
    number: 13,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.OPOSSUM,
    theme: Theme.WOODLAND,
    x: 5196 / Level.MAP_WIDTH_PX,
    y: 2916 / Level.MAP_HEIGHT_PX
  }


  // MOUNTAIN


  // PRAIRIE
  Level.levels[26] = {
    number: 26,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.BUFFALO,
    theme: Theme.PRAIRIE,
    x: 0.308,
    y: 0.667
  }

  Level.levels[27] = {
    number: 27,
    map: [
      [_,G,_,_,B,B,_,_,G,_,_],
       [G,G,_,B,o,B,_,G,G,_],
      [_,G,_,_,B,B,_,_,G,_,_]
    ],
    bubbles: 10,
    animal: Animal.BUFFALO,
    theme: Theme.PRAIRIE,
    x: 0.302,
    y: 0.613
  }


}
