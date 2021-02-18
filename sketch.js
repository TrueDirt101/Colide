const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var obstacle, no;
var PC;
var chaosGroup;
var score;
var Begining,end,gameState;
function preload()
{


One=loadImage("PC.png")
Two=loadImage("PCLeft.png")
three=loadImage("PCright.png")
four=loadImage("PCup.png")
zero=loadImage("blackDotOfDoom.png")
}
function setup() {
  chaosGroup = new Group();

  engine = Engine.create();
  world = engine.world;

  createCanvas(1300, 656);
	
  score = 0;


  PC=createSprite(500, 300, 50,70);
PC.velocityY=-0.1
PC.scale=0.2
PC.addImage("PC",three)
billi=createSprite(650,100,50,10)

gameState="Begining"
PC.setCollider("rectangle",0,0,270,190)
}

function spawnObstacles() {
  if(frameCount %50 === 0) {
    obstacle = createSprite(1366,random(657),10,40);
    obstacle.velocityX = -10;
    obstacle.scale=0.5
    no = createSprite(random(1300),657,40,10);
    no.velocityY = -10;
    no.scale=0.5  
    no.addImage("no",zero)
    obstacle.addImage("obstacle",zero)
    obstacle.lifetime = 345;
    no.lifetime = 345;
    chaosGroup.add(obstacle);
    chaosGroup.add(no);
billi.width=billi.width+30

obstacle.setCollider("circle",0,0,200)
no.setCollider("circle",0,0,200)


  }
}




function draw() {

  background(255);
  text("time meter",620,150)
  drawSprites()


if (gameState === "Begining"){
  spawnObstacles();

  if (keyIsDown(DOWN_ARROW) ){
    PC.y = PC.y + 10;
    PC.addImage("PC",One)
  } 
  
  if (keyIsDown(UP_ARROW)){
    PC.y = PC.y - 10;
    PC.addImage("PC",four)

  }

  if (keyIsDown(RIGHT_ARROW) ){
    PC.x = PC.x + 15;
    PC.addImage("PC",three)

    
  }

  if (keyIsDown(LEFT_ARROW)){
    PC.x = PC.x - 15;
    PC.addImage("PC",Two)

  }

  if(chaosGroup.isTouching(PC)){
    chaosGroup.destroyEach()
    gameState="end"
createSprite
      }
}


  

 

}

