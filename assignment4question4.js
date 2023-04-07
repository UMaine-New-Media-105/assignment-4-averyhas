// Assignment 4, Question 4 - Avery Haskell
// "Create a pattern that displays sprites on the screen in a set order."

function setup() {
  createCanvas(960, 540);
  noLoop();

  planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"
  ];
  tilesPerRow = 8; // planets.length
  tileWidth = width / tilesPerRow;
  tilesPerColumn = 5;
  tileHeight = height / tilesPerColumn;
  }

function draw() {
  background("midnightblue");

  for(let rowsDrawn = 0; rowsDrawn < tilesPerColumn; rowsDrawn++){
  for(let columnsDrawn = 0; columnsDrawn < tilesPerRow; columnsDrawn++) {
    let thisPlanet = planets[(columnsDrawn + rowsDrawn)  % planets.length]
    let thisX = columnsDrawn * tileWidth;
    let thisY = rowsDrawn * tileHeight
    addPlanet(thisPlanet, thisX + 15, thisY + 55)
    }
  }

}

function addPlanet(planet, x, y) {
  push();
  translate(x, y);
  scale(1)
  noStroke();
  
  if (planet == "mercury") {
    fill("gray");
    ellipse(50, 0, 30, 30);
  } else if (planet == "venus") {
    fill("peru");
    ellipse(50, 0, 45, 45);
  } else if (planet == "earth") {
    fill("blue")
    ellipse(50, 0, 45, 45)
  } else if (planet == "mars") {
    fill("chocolate")
    ellipse(50, 0, 38, 38)
  } else if (planet == "jupiter") {
    fill("burlywood")
    ellipse(50, 0, 80, 80)
  } else if (planet == "saturn") {
    fill("darkkhaki");
    ellipse(50, 0, 70, 70);
  } else if (planet == "uranus") {
    fill("lightblue");
    ellipse(50, 0, 50, 50);
  } else if (planet == "neptune") {
    fill("royalblue");
    ellipse(50, 0, 50, 50);
  } 
  pop();
}
