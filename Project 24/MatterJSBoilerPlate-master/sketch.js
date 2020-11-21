
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line1,line2,line3,ball,ball2,ground;

function preload()
{}

function setup() {
createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  line3  = new Dustbin(700,310,20,100);
  line2  = new Dustbin(500,310,20,100);
  line1  = new Dustbin(600,350,180,20);
  //line4  = new Dustbin(400,380,800,50,180)
	 ground = new Ground(400,380)
   ball   = new Ball(200,300);
  // ball2  = new Ball(300,400)

	Engine.run(engine);
                                                
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  //Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:200})
  

  drawSprites();
  line1.display();
  line2.display();
  line3.display();
  ball.display();
  //ball2.display();
  ground.display();

}

function keyPressed(){

  if(keyCode===RIGHT_ARROW){
   // Matter.Body.applyForce(ball.body,ball.body.position,{x:500,y:100})
  }
  if(keyCode===32){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:100} )
  }
}

