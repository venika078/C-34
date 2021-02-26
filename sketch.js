const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground, box1 , box2 , box3;

function setup(){
    createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(200,690,10000,20)
box1 = new Box (100,150,50,50)
box2 = new Box (100,200,50,50)
box3 = new Box (100,250,50,50)
box4 = new Box(100,300,50,50)
box5 = new Box(100,350,50,50)
box6 = new Box (100,400,50,50)
box7 = new Box (100,450,50,50)
box8 = new Box (100,500,50,50)
box9 = new Box(100,550,50,50)
box10 = new Box(100,600,50,50)
box11 = new Box (150,150,50,50)
box12 = new Box (150,200,50,50)
box13 = new Box (150,250,50,50)
box14 = new Box(150,300,50,50)
box15 = new Box(150,350,50,50)
box16 = new Box (150,400,50,50)
box17 = new Box (150,450,50,50)
box18 = new Box (150,500,50,50)
box19 = new Box(150,550,50,50)
box20 = new Box(150,600,50,50)

/*box21 = new Box (100,250,50,50)
box22 = new Box (150,250,50,50)
box23 = new Box (200,250,50,50)
box24 = new Box(250,250,50,50)
box25 = new Box(300,250,50,50)
box26 = new Box (350,250,50,50)
box27 = new Box (400,250,50,50)
box28 = new Box (450,250,50,50)
box29 = new Box(500,250,50,50)
box30 = new Box(550,250,50,50)
box31 = new Box (100,300,50,50)
box32 = new Box (150,300,50,50)
box33 = new Box (200,300,50,50)
box34 = new Box(250,300,50,50)
box35 = new Box(300,300,50,50)
box36 = new Box (350,300,50,50)
box37 = new Box (400,300,50,50)
box38 = new Box (450,300,50,50)
box39 = new Box(500,300,50,50)
box40 = new Box(550,300,50,50)*/


ball= new Ball(250,300,50)
rope= new Rope(ball.body,{x:250, y:50})
}

function draw(){
    background("lightgreen");
    Engine.update(engine);
    ground.display();
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
    box17.display();
    box18.display();
    box19.display();
    box20.display();

   /* box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display(); 

    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display()*/

    ball.display();
    rope.display();

    textSize (30);
    fill ("black")
    text ("KNOCK ALL THE BOXES DOWN!",500,250)
} 

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}
   
