var fixedRect , movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 100, 50, 80);
  movingRect = createSprite(400, 800, 80, 30);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
}

function draw() {
  background(0,0,0); 
  
  bounceoff(movingRect,fixedRect);

  drawSprites();
}

