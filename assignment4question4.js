// Assignment 4, Question 4 - Avery Haskell
// "Create a pattern that displays sprites on the screen in a set order."

function setup() {
  createCanvas(960, 540);
  noLoop();

  // Array which holds each planet in order from closest to farthest from the Sun.
  planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"
  ];
  tilesPerRow = 8; // planets.length
  tileWidth = width / tilesPerRow;
  tilesPerColumn = 5;
  tileHeight = height / tilesPerColumn;
  }

function draw() {
  background("midnightblue");

  // Draws rows + columns.
  for(let rowsDrawn = 0; rowsDrawn < tilesPerColumn; rowsDrawn++){
  for(let columnsDrawn = 0; columnsDrawn < tilesPerRow; columnsDrawn++) {
    
  // Gives the planets a revolving pattern.
    let thisPlanet = planets[(columnsDrawn + rowsDrawn)  % planets.length]
    let planetX = columnsDrawn * tileWidth;
    let planetY = rowsDrawn * tileHeight
    addPlanet(thisPlanet, planetX + 15, planetY + 55)
    }
  }

}

// Function which harbors the instructions to draw each planet w/ its corresponding ellipse size + color.
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
