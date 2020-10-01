;
var ground,red1,red2,red3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	ground=createSprite(width/2,670,width,20)
	ground.shapeColor=color("white")

    red1=createSprite(width/2,650,200,20)
	red1.shapeColor=color("red")

	red2=createSprite(510,610,20,100)
	red2.shapeColor=color("red")

	red3=createSprite(310,610,20,100)
	red3.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	red1 = Bodies.rectangle(width/2 , 650 , 200 ,20, { isStatic:true});
	World.add(world, red1);

	red2 = Bodies.rectangle(510 , 610 , 20 ,100, { isStatic:true});
	World.add(world, red2);

	red3 = Bodies.rectangle(310, 610 , 20 ,100, { isStatic:true});
	World.add(world, red2);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	paper= new Paper(200,650,10)
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
	 }
   }


