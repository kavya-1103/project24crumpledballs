
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject;	
var engine,world;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
  world = engine.world;
  
  dustbinObj = new dustbin(width-350,height-20);
  paperObj= new paper(30,height-20,30);
  
Ground=new ground(width/2,height,1600,15)

	
}


function draw() {

  background("skyblue");
  Engine.update(engine);

  paperObj.display()
  dustbinObj.display()
  Ground.display()
}

function keyPressed(){
    if(keyCode === UP_ARROW ){
      
      Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:50,y:-60}) 
     
    }
}


