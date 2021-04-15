var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  go1=createSprite(200,600,50,50);
  go1.shapeColor = "green";
  go1.velocityX=3;
  go2=createSprite(500,600,50,50);
  go2.shapeColor = "green";
  go2.velocityX=-3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, go1)){
    movingRect.shapeColor = "blue";
    go1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
    go1.shapeColor = "green"
  }
 
bounceOff(go1,go2);
//bounceOff(movingRect,fixedRect)
  drawSprites();
}