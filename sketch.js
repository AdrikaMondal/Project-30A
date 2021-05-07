const Engine = Matter.Engine;
   const World = Matter.World; 
   const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

   function setup() {
     var canvas = createCanvas(900,400);
engine=Engine.create();
world=engine.world;
ground = new Ground(450,400,900,20);
ground2 = new Ground(390,300,250,10);
ground3 = new Ground(700,200,200,10);

polygon = new Polygon(50,200,50);

slingshot = new SlingShot(polygon.body,{x:100,y:200})

//level 1
box1 = new Box(300,275,30,40);
box2 = new Box(330,275,30,40);
box3 = new Box(360,275,30,40);
box4 = new Box(390,275,30,40);
box5 = new Box(420,275,30,40);
box6 = new Box(450,275,30,40);
box7 = new Box(480,275,30,40);

//level 2
box8 = new Box(330,235,30,40);
box9 = new Box(360,235,30,40);
box10 = new Box(390,235,30,40);
box11 = new Box(420,235,30,40);
box12 = new Box(450,235,30,40);

//level 3
box13 = new Box(360,195,30,40);
box14 = new Box(390,195,30,40);
box15 = new Box(420,195,30,40);

//level 4
box16 = new Box(390,155,30,40);


}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  
  polygon.display();

  slingshot.display();
}
