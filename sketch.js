
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(width/2,600,20);
	World.add(world,ball);


	
    groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(600,600,20,120);
	rightSide = new Ground(750,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.show();
  leftSide.show();
  rightSide.show();

  ellipse(ball.position.x,ball.position.y, 20);
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.01,y:0.05})
	}
}
