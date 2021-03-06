const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;


function preload() {
 
} 

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(260,200,400,5);
   
}

function draw(){
    background(225);
    Engine.update(engine);
    ground.display();
  
}
