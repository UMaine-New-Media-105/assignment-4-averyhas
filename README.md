# assignment-4-averyhas
assignment-4-averyhas created by GitHub Classroom

Challenge 1: Use a loop to build a radially symmetric shape.
Link: https://editor.p5js.org/averyhas/sketches/zdms1pW-M

For this assignment, I decided to go with a floral pattern/design. I created a addFlower function and used loops to create flowers with various amounts 
of petals, stacked them on top of each other and changed their colors to give them more depth. I then created eight flower objects for each flower, with
their own individual parameters, and placed the flowers across the canvas by calling each object (alongside the function) in draw().


Challenge 2: Repeat a combination of shapes horizontally and vertically to create a two-dimensional pattern.
Link: https://editor.p5js.org/averyhas/sketches/2tUN0MiVv

For this assignment, I once again chose to go with a floral pattern/design. However, I chose to make it more simple by deleting the overlapping flowers
which were used to add dimension/depth to the ones in the previous challenge. I created four flowers of varying colors, sizes, and petal amounts and 
placed them in the upper left corner of my canvas. From here, I created rows and columns using the for loop function, which looked like this:

```Javascript
  for (let columnsDrawn = 0; columnsDrawn < tilesPerRow; columnsDrawn++) {
    let offsetRight = columnsDrawn * tileWidth;
    for (let rowsDrawn = 0; rowsDrawn < tilesPerColumn; rowsDrawn++) {
      let offsetDown = rowsDrawn * tileHeight;
      flower1.x = flower1.startX + offsetRight;
      flower2.x = flower2.startX + offsetRight;
      flower3.x = flower3.startX + offsetRight;
      flower4.x = flower4.startX + offsetRight;
      flower1.y = flower1.startY + offsetDown;
      flower2.y = flower2.startY + offsetDown;
      flower3.y = flower3.startY + offsetDown;
      flower4.y = flower4.startY + offsetDown;
      addFlower(flower1);
      addFlower(flower2);
      addFlower(flower3);
      addFlower(flower4);
    }
```

This allowed for my initial design to be repeated across the canvas, in a nearly seamless and ongoing pattern.


Challenge 3: Incorporate randomness into some parameter/s of the two-dimensional design you created for Challenge 2.
Link: https://editor.p5js.org/averyhas/sketches/1kHSj7AIy

For this assignment, I duplicated the sketch created for the previous challenge, and simply tweeked its parameters slightly. I decided to make the number
of petals on each flower random, as well as the color of each flower.

In order to make the petals random, I set a random parameter for the parameter which controls each flower's number of petals using the code:

```Javascript
      flower1.petals = random(5, 15);
      flower2.petals = random(5, 15);
      flower3.petals = random(5, 15);
      flower4.petals = random(5, 15);
```

As for the color of each flower, I started by creating an array containing various different colors, so that p5 could choose from any of the colors
within the array when coloring each flower. It looked like this:

```Javascript
      petalsFill = [
        "mistyrose",
        "coral",
        "darksalmon",
        "palevioletred",
        "tomato",
        "deeppink",
        "hotpink",
        "lightpink",
        "mediumvioletred",
        "pink",
        "salmon",
      ];
```

I then set a random parameter (which randomly selects from the colors within the array) for the parameter which controls each flower's color/fill.
It looked like this:

```Javascript
      flower1.flowerColor = random(petalsFill);
      flower2.flowerColor = random(petalsFill);
      flower3.flowerColor = random(petalsFill);
      flower4.flowerColor = random(petalsFill);
```

Within this sketch I also chose to create randomly-dispersed leaves across the canvas.
I did this by first creating a new function ```addLeaf()``` which harbored the instructions to draw each leaf. I set its parameters to be as follows:
```(x, y, leafSize, leafFill, leafAngle)```. I created an array for the leaves' fill within setup, as well as a variable for the amount of leaves per
tile, which looked like this:

```Javascript
  leafFill = [
     "darkseagreen", 
     "limegreen", 
     "mediumseagreen", 
     "seagreen"
   ];
  leavesPerTile = 3;
```

and nested a for loop function within my columnsDrawn/rowsDrawn for loop(s), which looked like this:

```Javascript
for (let leavesDrawn = 0; leavesDrawn < leavesPerTile; leavesDrawn++) {
        let leafX = offsetRight + random(tileWidth);
        let leafY = offsetDown + random(tileHeight);
        let leafSize = random(0.5, 2.5);
        let leafColor = random(leafFill);
        let leafAngle = random(0, 5);
        addLeaf(leafX, leafY, leafSize, leafColor, leafAngle);
      }
```


Challenge 4: Create a pattern that displays sprites on the screen in a set order.
Link: https://editor.p5js.org/averyhas/sketches/iHpYTx-Rx

For this assignment, I decided to go with a simpler design of the planets. I started by creating a function which drew each planet and named them
accordingly, giving it the parameters ```(planet, x, y)```. For each planet, I changed the size of the ellipse, as well as the color of the planet.
I then created an array in setup, using the corresponding names for each planet, in their order from closest to farthest from the Sun:

```Javascript
  planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"
  ];
```

From here, I created a for loop function for the planets, and adjusted it to give them a revolving pattern as each row is placed:

```Javascript
    let thisPlanet = planets[(columnsDrawn + rowsDrawn)  % planets.length]
    let planetX = columnsDrawn * tileWidth;
    let planetY = rowsDrawn * tileHeight
    addPlanet(thisPlanet, planetX + 15, planetY + 55)
```
