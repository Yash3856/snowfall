var snowbg 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;
var snowfall = []
function setup() {
  createCanvas(800,400);

  
	engine = Engine.create();
	world = engine.world;
  
  


  Engine.run(engine);

}

function preload() {
snowbg = loadImage("snow2.jpg")
}

function draw() {
  background(snowbg);  

  if(frameCount%15===0){
 snowfall.push(new Snow(random(50,1000),10,50)); }
 for(var j=0;j<snowfall.length;j++){ snowfall[j].display(); }
  drawSprites();
}