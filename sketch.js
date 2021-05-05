
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(800,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper1 = new Paper(200,-70,100,100)
	paper1.velocityY=-12
	Engine.run(engine);
	console.log("press down key")
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  if (keyCode === UP_ARROW){
	
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:12,y:-20})
	
}

paper1.velocityY=14
  groundObject.display();
  paper1.display();
  dustbinObj.display();

}

