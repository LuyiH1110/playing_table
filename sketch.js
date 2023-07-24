let img, img2, img3, bg;

let dragging1 = false, dragging2 = false, dragging3 = false;
let rollover1 = false, rollover2 = false, rollover3 = false;

let x1 = 100, y1 = 200, w1 = 200, h1 = 200;
let offsetX1, offsetY1;

let x2 = 300, y2 = 300, w2 = 100, h2 = 100;
let offsetX2, offsetY2;

let x3 = 400, y3 = 600, w3 = 100, h3 = 100;
let offsetX3, offsetY3;

function preload() {
  img = loadImage('https://i.ibb.co/SQ9gbYM/1.png');
  img2 = loadImage('https://i.ibb.co/v11zQfw/2.png');
  img3 = loadImage('https://i.ibb.co/TbLmpFz/3.png');
  bg = loadImage('https://i.ibb.co/0n5C9MP/bg.png');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(bg);
  fill(255);
  textSize(18);
  text('drag around elements', 280, 450);

  // Check if mouse is over img
  if (mouseX > x1 && mouseX < x1 + w1 && mouseY > y1 && mouseY < y1 + h1) {
    rollover1 = true;
  } else {
    rollover1 = false;
  }

  // Check if mouse is over img2
  if (mouseX > x2 && mouseX < x2 + w2 && mouseY > y2 && mouseY < y2 + h2) {
    rollover2 = true;
  } else {
    rollover2 = false;
  }

  if (mouseX > x3 && mouseX < x3 + w3 && mouseY > y3 && mouseY < y3 + h3) {
    rollover3 = true;
  } else {
    rollover3 = false;
  }

  // Adjust location of img if being dragged
  if (dragging1) {
    x1 = mouseX + offsetX1;
    y1 = mouseY + offsetY1;
  }

  // Adjust location of img2 if being dragged
  if (dragging2) {
    x2 = mouseX + offsetX2;
    y2 = mouseY + offsetY2;
  }
 
   if (dragging3) {
    x3 = mouseX + offsetX3;
    y3 = mouseY + offsetY3;
  }

  image(img, x1, y1, w1, h1);
  image(img2, x2, y2, w2, h2);
  image(img3, x3, y3, w3, h3);
}

function mousePressed() {
  // If mouse is over img, start dragging
  if (rollover1) {
    dragging1 = true;
    offsetX1 = x1 - mouseX;
    offsetY1 = y1 - mouseY;
  }

  // If mouse is over img2, start dragging
  if (rollover2) {
    dragging2 = true;
    offsetX2 = x2 - mouseX;
    offsetY2 = y2 - mouseY;
  }


 if (rollover3) {
    dragging3 = true;
    offsetX3 = x3 - mouseX;
    offsetY3 = y3 - mouseY;
  }
}

function mouseReleased() {
  // Stop dragging
  dragging1 = false;
  dragging2 = false;
  dragging3 = false;
}

function keyTyped() {
  if (key === 'a') {
    save('image.png');
  }
}