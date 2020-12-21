const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

var engine, world;
var box1;
var pig1;
var log1;
var box3,box4;
var pig2;
var log2,log3;
var box5;
var log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,50,50);
    box2 = new Box(900,300,50,50);
    ground = new Ground(width/2,height,width,20)
    pig1= new Pig (800,300)
    log1= new log(800,250,250,PI/2)
    box3 = new Box(700,200,50,50);
    box4= new Box(900,200,50,50);

    pig2= new Pig (800,200)
    log2= new log(800,150,250,PI/2)

    box5= new Box(800,130,50,50);
    log3= new log(750,100,150,PI/4);
    log4= new log(850,100,150,-PI/4);
    bird1= new Bird(100,100,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    log2.display ();
    box4.display();
    pig2.display ();
    box5.display();
    log3.display ();
    log4.display ();
    bird1.display();
}
