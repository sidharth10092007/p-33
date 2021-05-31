const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//var snow
var bgImg



function preload(){

bgImg=loadImage("snow1.jpg")

}


function setup() {
  createCanvas(800,400);
 //engine = Engine.create();
 //world = engine.world;
  createSprites = (400, 200, 50, 50);
}

function draw() {
  background(bgImg);  
  
  drawSprites();
}