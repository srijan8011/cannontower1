const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var cannon;


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}
function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, -PI/4);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);
    cannon.display();
    tower.display();

 
}

