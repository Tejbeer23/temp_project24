var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite =createSprite(width/2,height-35,width,10);
	groundSprite.shapeColor = color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new paper;

	Block1 = new blocks(250,580,10,150);
	Block2 = new blocks(350,650,200,20);
	Block3 = new blocks(450,580,10,150);
 
	ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true})
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();

  Block1.display();
  Block2.display();
  Block3.display();
  
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Matter.body.applyForce(paperObject.body,paperObject.body.position);
	}

}



