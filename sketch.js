const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball,engine,world,ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var option_ground ={
    isStatic:true
  }
  ground=Bodies.rectangle(400,390,800,20,option_ground)
  var option = {
    restitution:1.09
  }
  ball=Bodies.circle(400,100,20,option);
  World.add(world,ball)
  World.add(world,ground)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,50,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
  drawSprites();
}