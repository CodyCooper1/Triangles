penUp();
turnRight(90);
moveForward(10);
turnLeft(90);//for positioning
turnTo(270); //Set angle to 90 if you need upside-down triangle and 270 for right-side up
loopTriangle(3);//Number of repetitions to the left
function loopTriangle (Repetitions) {
  for (var i = 0; i < Repetitions; i++) { //Loop drawing the triangle 
  penUp();
  moveForward(10);
  penDown();
  drawTriangle(10);
}
}

function drawTriangle (size) {  //This draws the first small triangle that will be in the larger triangle later
  for (var i = 0; i < 3; i++) { //The loop that draws the triangle
  moveForward(size);//The size of the triangle (Will be a parameter in the end called size)
  turnRight(120); //The angle the triangle turns at
  
  }
}
