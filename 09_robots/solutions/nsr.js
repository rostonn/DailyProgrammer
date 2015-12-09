var robot = require('../robots.js');

//While loop until one robot is on the marker
while(!robot.robotOne.onMarker() && !robot.robotTwo.onMarker()){
  robot.robotOne.moveOne('right');
  robot.robotTwo.moveOne('right');
}

//Move the robot that is not on
if(robot.robotOne.onMarker()){
  while(!robot.checkCollision()){
    robot.robotTwo.moveOne('left');
  }
}
else{
  robot.robotOne.moveOne('left');
}

console.log(robot.checkCollision());
