const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function preload() {
   bg=loadImage("snow1.jpg")
snowImage=loadImage("snow4.webp")
}





function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  snow=new Snow(random(100,600),10)
    
}



function draw() {
  background(bg);  
  drawSprites();
  if(frameCount%60===0){
    snow=createSprite(random(100,600),10,20,20)
    snow.velocityY=3;
    snow.addImage("snow",snowImage)
    snow.scale=0.1
  }
 
}