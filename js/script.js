let x = 0;
let dx = 4;
let y = 250;
let dy = 4;
let score = 0;
let s = 2;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background("#14F2B1");
  fill(255, 0, 222);
  ellipse(x, y, 40, 40);
  rect(mouseX, height - 30, 120, 25);

  if (x > width) {
    dx = -dx;
  }
  if (x < 0) {
    dx = -dx;
  }
  x = x + dx;
  if (y < 0) {
    dy = -dy;
  }
  if (x > mouseX && x < mouseX + 120)
    if (y > height - 30) {
      dy = -dy;
      score = score + 1;
      textSize(100);
    }
  text(score, 400, 100);

  if (y > height + 50) {
    dy = 0;
    dx = 0;
    x = 2000;
    y = 5000;
    fill(255, 255, 255);
    textSize(100);
    text("Game over!", 20, 250);
  }
  y = y + dy;
  x = x + dx;
}
