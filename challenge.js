//homework 5 optional challenge 7: Animate the bars sliding together across the screen.

var shade = [10, 20, 45, 25, 60, 40, 70, 60, 85];
var x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  noStroke();
  
	for (i = 0; i < shade.length; i ++) {
		fill(shade[i], 100, 100);
		rect(i*width/shade.length+x, 0, width/shade.length+x, height);
	}
	x = x + 1;
}
