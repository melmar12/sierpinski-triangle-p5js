function drawCircle(x,y,d) {
  stroke(255);
  noFill();
  ellipse(x,y,d,d);
  if (d > 3) {
    drawCircle(x-d/2, y, d/2);
    drawCircle(x+d/2, y, d/2);
    drawCircle(x, y+d/2, d/2);
  }
}

var stars = [];

var speed;

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (var i = 0; i < 3000; i++) {
      stars[i] = new Star();
    }

}

function draw() {
  background(0);
  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width)*4;
      pixels[index+0] = 158;
      pixels[index+1] = -y+600; //234;
      pixels[index+2] = 248;
      pixels[index+3] = y;
    }
  }
  updatePixels();
  drawCircle(width/2, height/3, 360);
  speed = 1.5;
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
