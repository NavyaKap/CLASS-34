const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine;
var myWorld;

var ground;
var b1,b2,b3,b4,b5;

var b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16,b17,b18,b19,b20

var ball;

function setup() {
  createCanvas(1200,700);


  engine=Engine.create();
  myWorld=engine.world;
  ground = new Ground(200,670,2000,30);
  b1 = new Box (900,100,50,50);
  b2 = new Box (900,100,50,50)
  b3 = new Box (900,100,50,50)
  b4 = new Box (900,100,50,50)
  b5 = new Box (800,100,50,50)
  b6 = new Box (800,100,50,50)
  b7 = new Box (800,100,50,50)
  b8 = new Box (800,100,50,50)
  b9 = new Box (700,100,50,50)
  b10 = new Box(700,100,50,50)
  b11 = new Box(700,100,50,50)
  b12 = new Box(700,100,50,50)
  b13 = new Box(700,100,50,50)
  b14 = new Box(700,100,50,50)
  b15 = new Box(700,100,50,50)
  b16 = new Box(700,100,50,50)
  b17 = new Box(700,100,50,50)
  b18 = new Box(700,100,50,50)
  b19 = new Box(700,100,50,50)
  b20 = new Box(700,100,50,50)
  
  ball=new Ball(200,200,80,80)

  rope = new Rope(ball.body,{x:500,y:100})

  
}

function draw() {
  background("yellow");  
  Engine.update(engine);
 ground.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 b17.display();
 b18.display();
 b19.display();
 b20.display();



 ball.display();
 rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}