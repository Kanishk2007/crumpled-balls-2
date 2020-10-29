
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin1,dustbin2,dustbin3;

function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");
	//Create the Bodies Here.
	
	ground = Bodies.rectangle(width/2, 664, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 paper = new Paper(150,655,30);
	 dustbin1 = new Dustbin(520,617,20,87);
	 dustbin2 = new Dustbin(591,650,125,15);
	 
	 dustbin3 = new Dustbin(645,617,20,87);
	 
	Engine.run(engine);
	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 
  drawSprites();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
}

function keyPressed() {
if(keyCode=== UP_ARROW){

   Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-115});

}
}


