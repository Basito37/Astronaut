var bg,sleep,brush,gym,eat,bath,move,astronaut

function preload() {
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  bath = loadAnimation("bath1.png","bath2.png");
  move = loadAnimation("move1.png","move2.png");
  
}
function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);  
  drawSprites();
  textSize(20);
  fill("white");
  text("Instructions: ",20,35);
  textSize(15);
  text("UP ARROW = BRUSHING",20,55);
  text("DOWN ARROW = GYMMING",20,70);
  text("LEFT ARROW = EATING",20,85);
  text("RIGHT ARROW = BATHING",20,100);
  text("M KEY = MOVING",20,115);
  
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
}