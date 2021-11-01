const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, objeto;

function setup() {
  var tela = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var objeto_options = {
    isStatic: true
  };

  objeto = Bodies.rectangle(200,100,50,50, objeto_options);
  World.add(world,objeto);

  console.log(objeto);
  console.log(objeto.type);
  console.log(objeto.position.x);
}

function draw() {
  background(0);

  Engine.update(engine);

  rectMode(CENTER);
  rect(objeto.position.x,objeto.position.y,50,50);
}