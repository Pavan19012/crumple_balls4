
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	
var world,paper,engine


function setup() {
	createCanvas(900, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(720,390,100.10);
    paper= new Paper(200,450,40);

	Engine.run(engine);
  World.add(world,ground);
}


function draw() {
	background("black");
  rectMode(CENTER);
  
 

  groundObject.display();
  dustbinObj.display();
   paper .display();
}

function keyPressed(){
 if (keyCode===Up_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{
  x:135,
  x:-145
  });
 }
}