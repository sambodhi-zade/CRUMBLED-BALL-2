
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj , paperObject,groundObject
var engine,world;


function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;


	paperObject=new Paper(40,40,20);
	groundObject=new ground(1000,450);
	dustbinObj=new 	dustbin(600,400);
	//Create a Ground
Engine.run(engine);


}


function draw() {
rectMode(CENTER);
background(230);



	paperObject.display();
	groundObject.display();
	dustbinObj.display();







}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:65,y:-65});}
}



