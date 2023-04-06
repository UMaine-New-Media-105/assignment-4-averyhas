// Assignment 4, Question 1 - Avery Haskell
// "Use a loop to build a radially symmetric shape."
function setup() {
  createCanvas(400, 400);

  // Flower objects.
  flower1 = {
    x: 95,
    y: 70,
    size: 0.7,
    petals: 5,
    flowerAngle: 5,
  };
  flower2 = {
    x: 340,
    y: 190,
    size: 0.5,
    petals: 10,
    flowerAngle: 15,
  };
  flower3 = {
    x: 55,
    y: 330,
    size: 0.5,
    petals: 5,
    flowerAngle: 5,
  };
  flower4 = {
    x: 170,
    y: 235,
    size: 0.8,
    petals: 10,
    flowerAngle: 15,
  };
  flower5 = {
    x: 10,
    y: 200,
    size: 0.4,
    petals: 10,
    flowerAngle: 15,
  };
  flower6 = {
    x: 320,
    y: 0,
    size: 1.25,
    petals: 5,
    flowerAngle: 5,
  };
  flower7 = {
    x: 350,
    y: 360,
    size: 1,
    petals: 5,
    flowerAngle: 5,
  };
  flower8 = {
    x: 165,
    y: 420,
    size: 0.75,
    petals: 10,
    flowerAngle: 15,
  };
}

function draw() {
  background("peachpuff");

  // Drawing each flower following the parameters in its corresponding object.
  addFlower(flower1);
  addFlower(flower2);
  addFlower(flower3);
  addFlower(flower4);
  addFlower(flower5);
  addFlower(flower6);
  addFlower(flower7);
  addFlower(flower8);
}

// Function to draw flowers.
function addFlower(flower) {
  push();
  translate(flower.x, flower.y);
  scale(flower.size);
  push();
  // Gives the flowers a dropshadow.
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = "gray";
  // Light pink portion of flower.
  for (
    let petalsDrawn = 0;
    petalsDrawn < flower.petals;
    petalsDrawn = petalsDrawn + 1
  ) {
    fill("pink");
    noStroke();
    rotate(flower.flowerAngle);
    ellipse(0, 0, 60, 200);
  }
  pop();
  push();
  // Hot pink portion of flower.
  for (
    let petalsDrawn = 0;
    petalsDrawn < flower.petals;
    petalsDrawn = petalsDrawn + 1
  ) {
    fill("hotpink");
    noStroke();
    rotate(flower.flowerAngle);
    ellipse(0, 0, 30, 165);
  }
  pop();
  push();
  // Center/orange portion of flower.
  for (
    let petalsDrawn = 0;
    petalsDrawn < flower.petals;
    petalsDrawn = petalsDrawn + 1
  ) {
    fill("orange");
    noStroke();
    rotate(flower.flowerAngle);
    ellipse(0, 0, 5, 50);
  }
  pop();
  pop();
}
