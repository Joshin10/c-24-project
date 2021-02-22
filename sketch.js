
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new hammer(50,100)
stone= new stone(50,50)
plane= new plane(600,height,1100,30)
rubber= new rubber(100,20,100,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display()
  stone.display()
  planr.display()
  rubber.display()
  
  drawSprites();
 
}



