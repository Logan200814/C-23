const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    
    

    var groundProporties = {
        isStatic:true
    };
    ground = Bodies.rectangle(400,780,800,20,groundProporties);
    World.add(world,ground);

    ball1 = new Ball(100,100,10)
    ball2 = new Ball(200,100,10)
    ball3 = new Ball(300,100,10)

    rect1 = new Boxy(400,100,10,30)

    Engine.run(engine);
}

function draw(){
    background("green");

    ball1.display();
    ball2.display();
    ball3.display();

    rect1.display();

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20)

}