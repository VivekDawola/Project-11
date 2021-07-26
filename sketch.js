var shipImg,ship,Image,sea;

function preload(){
shipImg=loadImage("ship-1.png");
//sea=loadImage("sea.png");
seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(600,300,);
  ship=createSprite(70,180,20,20);
ship.addAnimation("ship",shipImg);
ship.scale=0.2;

sea=createSprite(10,200,600,10);
sea.x=sea.width/2
ship.velocityX=2;
sea.visible=false
}

function draw() {
  background(seaImage);
  ship
drawSprites();
}