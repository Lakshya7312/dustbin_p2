const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var waste;
var dust1, dust2, dust3, dustbin;

function setup() {
  createCanvas(800,370);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 359, 796, 15);

  waste = new Paper(150, 10);

  dust1 = new Ground(596, 294, 12, 110);
  dust2 = new Ground(652, 342, 120, 12);
  dust3 = new Ground(710, 293, 12, 110);
  dustbin = new Dustbin(653, 284, 100, 12);
  
}

function draw() {
  background(36, 37, 32); 
  
  Engine.update(engine);

  ground.display();

  waste.display();

  fill("white");
  dust1.display();
  fill("white");
  dust2.display();
  fill("white");
  dust3.display();
  dustbin.display();

  fill("white");
  noStroke();
  textSize(13);
  text("Press the up arrow key to bounce the ball", 300, 40);

  if(waste.body.x > 780 && waste.body.y > 2){
    text("You Lose, Refresh to play again", 300, 50);
  }
  createEdgeSprites();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(waste.body, waste.body.position, {x:60, y:-60});
  }
};