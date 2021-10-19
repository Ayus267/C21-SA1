const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world
  
  var btn1=createImg('right.png');
  var btn2=createImg('up.png');
  btn1.position(20,300);
  btn1.mouseClicked(hForce);
  btn2.position(20,250);
  btn2.mouseClicked(vForce);
  btn1.size(60,60);
  btn2.size(60,60);

  ground=new Ground(200,380,400,20);
  right=new Ground(380,200,20,400);
  left=new Ground(10,200,20,400); 
  top_wall=new Ground(200,20,400,20);

  ball=new Ball(200,100,20);
}

function draw() {
  background(220);
  Engine.update(engine);
  ground.display();
  right.display();
  left.display();
  top_wall.display();
  ball.display();
}

function hForce() {
 Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0});
}

function vForce() {
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5});
 }