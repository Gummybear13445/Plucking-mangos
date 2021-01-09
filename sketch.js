const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var tree1;
var stoney;
var boy;
var boy_img;
var mango1, mango2, mango2, mango3, mango4, mango5, mango6, mango7;
var launcherObj;

function preload() {
  boy_img = loadImage("boy.png");
}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  ground1 = new ground(400, 700, 800, 20);
  tree1 = new tree(400, 400, 50, 50);
  stoney = new stone(100, 390, 40);
  mango1 = new mango(570, 440, 40, 40);
  mango2 = new mango(500, 480, 40, 40);
  mango3 = new mango(640, 430, 40, 40);
  mango4 = new mango(535, 420, 40, 40);
  mango5 = new mango(545, 490, 40, 40);
  mango6 = new mango(600, 490, 40, 40);
  mango7 = new mango(660, 485, 40, 40);
  launcherObj = new launcher(stoney.body, { x: 125, y: 600 });

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("cyan");
  textSize(25);
  text("press space to attach the stone again", 200, 80);

  ground1.display();
  stoney.display();
  tree1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  launcherObj.display();

  detectcollision(stoney, mango1);
  detectcollision(stoney, mango2);
  detectcollision(stoney, mango3);
  detectcollision(stoney, mango4);
  detectcollision(stoney, mango5);
  detectcollision(stoney, mango6);
  detectcollision(stoney, mango7);

  image(boy_img, 100, 550, 150, 200);
}

function mouseDragged() {
  Matter.Body.setPosition(stoney.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  launcherObj.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stoney.body, { x: 125, y: 600 });
    launcherObj.attach(stoney.body);
  }
}

function detectcollision(lstoney, lmango) {
  mangoBodyPosition = lmango.body.position;
  stoneyBodyPosition = lstoney.body.position;

  var distance = dist(
    stoneyBodyPosition.x,
    stoneyBodyPosition.y,
    mangoBodyPosition.x,
    mangoBodyPosition.y
  );
  if (distance <= lmango.r + lstoney.r) {
    Matter.Body.setStatic(lmango.body, false);
  }
}
