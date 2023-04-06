// Assignment 4, Question 3 - Avery Haskell
// "Incorporate randomness into some parameter/s of the two-dimensional design you created for Challenge 2."

function setup() {
  createCanvas(960, 540);
  noLoop();
  tilesPerRow = 4;
  tilesPerColumn = 2.5;
  tileWidth = width / tilesPerRow;
  tileHeight = height / tilesPerColumn;

  flower1 = {
    startX: 140,
    startY: 55,
    size: 0.4,
    petals: 5,
    flowerAngle: 5,
    flowerColor: "palevioletred",
  };
  flower2 = {
    startX: 200,
    startY: 150,
    size: 0.3,
    petals: 10,
    flowerAngle: 15,
    flowerColor: "darksalmon",
  };
  flower3 = {
    startX: 75,
    startY: 170,
    size: 0.55,
    petals: 5,
    flowerAngle: 5,
    flowerColor: "coral",
  };
  flower4 = {
    startX: 50,
    startY: 75,
    size: 0.2,
    petals: 10,
    flowerAngle: 15,
    flowerColor: "mistyrose",
  };

  // Leaves.
  leafFill = ["darkseagreen", "limegreen", "mediumseagreen", "seagreen"];
  leavesPerTile = 3;
}

function draw() {
  background("peachpuff");
  // Draw all rows of flowers.
  for (let rowsDrawn = 0; rowsDrawn < tilesPerColumn; rowsDrawn++) {
    // Draw a row of flowers.
    for (let columnsDrawn = 0; columnsDrawn < tilesPerRow; columnsDrawn++) {
      let offsetRight = columnsDrawn * tileWidth;
      let offsetDown = rowsDrawn * tileHeight;
      for (let leavesDrawn = 0; leavesDrawn < leavesPerTile; leavesDrawn++) {
        let leafX = offsetRight + random(tileWidth);
        let leafY = offsetDown + random(tileHeight);
        let leafSize = random(0.5, 2.5);
        let leafColor = random(leafFill);
        let leafAngle = random(0, 5);
        addLeaf(leafX, leafY, leafSize, leafColor, leafAngle);
      }

      // Distribute flowers across canvas.
      flower1.x = flower1.startX + offsetRight;
      flower2.x = flower2.startX + offsetRight;
      flower3.x = flower3.startX + offsetRight;
      flower4.x = flower4.startX + offsetRight;
      flower1.y = flower1.startY + offsetDown;
      flower2.y = flower2.startY + offsetDown;
      flower3.y = flower3.startY + offsetDown;
      flower4.y = flower4.startY + offsetDown;

      // Random # of petals.
      flower1.petals = random(5, 15);
      flower2.petals = random(5, 15);
      flower3.petals = random(5, 15);
      flower4.petals = random(5, 15);
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
      flower1.flowerColor = random(petalsFill);
      flower2.flowerColor = random(petalsFill);
      flower3.flowerColor = random(petalsFill);
      flower4.flowerColor = random(petalsFill);
      addFlower(flower1);
      addFlower(flower2);
      addFlower(flower3);
      addFlower(flower4);
    }
  }
}

function addFlower(flower) {
  push();
  translate(flower.x, flower.y);
  scale(flower.size);

  push();
  for (
    let petalsDrawn = 0;
    petalsDrawn < flower.petals;
    petalsDrawn = petalsDrawn + 1
  ) {
    fill(flower.flowerColor);
    noStroke();
    rotate(flower.flowerAngle);
    ellipse(0, 0, 60, 200);
  }
  pop();
  pop();
}

function addLeaf(x, y, leafSize, leafFill, leafAngle) {
  push();
  translate(x, y);
  scale(leafSize);
  rotate(leafAngle);

  fill(leafFill);
  noStroke();
  ellipse(0, 0, 10, 25);
  pop();
}
