let imgArray = [];

function preload() {
  imgArray[0] = loadImage("assets/1.jpg");
  imgArray[1] = loadImage("assets/2.jpg");
  imgArray[2] = loadImage("assets/3.jpg");
  imgArray[3] = loadImage("assets/4.jpg");
  imgArray[4] = loadImage("assets/5.jpg");
}

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");

  var button = createButton("Draw Bread");
  button.parent("button-holder");
  button.mousePressed(drawBread);

  var button2 = createButton("Draw Taiyaki");
  button2.parent("button-holder");
  button2.mousePressed(drawTaiyaki);
  
  var button4 = createButton("Draw Coffee");
  button4.parent("button-holder");
  button4.mousePressed(drawCoffee);
  
  var button5 = createButton("Draw Ice Cream");
  button5.parent("button-holder");
  button5.mousePressed(drawIceCream);
  
  var button3 = createButton("Draw Random Food");
  button3.parent("button-holder");
  button3.mousePressed(drawRandom);

  var button6 = createButton("Clear Screen");
  button6.parent("button-holder");
  button6.mousePressed(clearScreen);
  
  var button7 = createButton("Random New Screen");
  button7.parent("button-holder");
  button7.mousePressed(newScreen);
  
  var button8 = createButton("Save Image");
  button8.parent("button-holder");
  button8.mousePressed(imageSaving);

  frameRate(60);
  rectMode(CENTER);
  imageMode(CENTER);
  background(255);
}

function draw() {}

function drawBread() {
  image(imgArray[0], random(width), random(height), 50, 50);
}

function drawTaiyaki() {
  image(imgArray[1], random(width), random(height), 50, 50);
}

function drawRandom() {
  let ranImg = int(random(imgArray.length));
  image(imgArray[ranImg], random(width), random(height), 50, 50);
}

function clearScreen() {
  background(255);
}

function drawCoffee() {
  image(imgArray[3], random(width), random(height), 50, 50);
}


function drawIceCream() {
  image(imgArray[4], random(width), random(height), 50, 50);
}

function newScreen() {
  background(random(0,255),random(0,255),random(0,255));
}

function imageSaving(){
  saveCanvas("my_drawing.jpg");
}

function mousePressed() {
  if (mouseX < width && mouseX > 0) {
    if (mouseY < height && mouseY > 0) {
      image(imgArray[2], mouseX, mouseY, 50, 50);
    }
  }
}