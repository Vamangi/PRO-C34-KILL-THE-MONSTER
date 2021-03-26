const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bImg,hero

function preload() {
   bImg=loadImage ("bg night.jpg")

}

function setup() {
  var canvas = createCanvas(1900,700);
  engine = Engine.create();
  world = engine.world;


  hero=new Hero(200,10,20,20)

  ground=new Ground(10,650,3200,5)

  constraintRope=new Fly(hero.body,{x:350,y:300})

  b1=new Block(750,600)
  b2=new Block(750,500)
  b3=new Block(750,400)
  b4=new Block(750,300)
  b5=new Block(750,200)
  b6=new Block(750,100)

  b7=new Block(1050,600)
  b8=new Block(1050,500)
  b9=new Block(1050,400)
  b10=new Block(1050,300)
  b11=new Block(1050,200)
  b12=new Block(1050,100)

  b13=new Block(900,600)
  b14=new Block(900,500)
  b15=new Block(900,400)
  b16=new Block(900,300)
  b17=new Block(900,200)
  b18=new Block(900,100)
  
monster=new Monster(1500,500)
}

function draw() {
  background(bImg);
  Engine.update(engine);

  hero.display()
  ground.display()
  constraintRope.display()

  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()

  b7.display()
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  
  b13.display()
  b18.display()
  b14.display()
  b15.display()
  b16.display()
  b17.display()

  monster.display()
}

function mouseDragged(){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
