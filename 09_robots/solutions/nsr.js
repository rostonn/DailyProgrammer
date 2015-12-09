var robot = require('../robots.js');

// console.log(robot);

console.log('Robot One X = '+robot.robotOne['x']);
console.log('Robot Two X = '+robot.robotTwo['x']);

robot.robotOne.moveOne('left');
console.log('Robot One X = '+robot.robotOne['x']);

robot.robotOne.x = -10;
while(!robot.robotOne.onMarker() && !robot.robotTwo.onMarker()){
  robot.robotOne.moveOne('right');
  robot.robotTwo.moveOne('right');
}
// console.log(robot.checkCollision());
// console.log('Robot One X = '+robot.robotOne['x']);
// console.log('Robot Two X = '+robot.robotTwo['x']);


if(robot.robotOne.onMarker()){
  while(!robot.checkCollision()){
    robot.robotTwo.moveOne('left');
    // console.log('Robot Two X = '+robot.robotTwo['x']);
  }
}
else{
  robot.robotOne.moveOne('left');
}

console.log(robot.checkCollision());
