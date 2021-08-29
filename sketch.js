var garden,rabbit;
var gardenImg,rabbitImg;
var grass,grassImg,grass2;
var apple,leaf,appleImg,leafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  grassImg = loadImage("grass.png"); 
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,300,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

grass = createSprite(100,300,10,10);
grass.addImage(grassImg); 
grass.scale=0.1;

grass2 = createSprite(300,300,10,10);
grass2.addImage(grassImg);
grass2.scale=0.1;


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);



rabbit.x=World.mouseX;

grass.depth=rabbit.depth
rabbit.depth=rabbit.depth+1;

var select_sprites = Math.round(random(1,2));

console.log(rabbit.x)

if(frameCount % 80 == 0){
  if(select_sprites == 1){
   "function", fruits()
  }
  else{
  "function", leaves()
  }
}

  drawSprites();
}

function fruits(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.scale=0.1;
  apple.velocityY=3;
  apple.lifetime=75;
}

function leaves(){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg)
  leaf.scale=0.1;
  leaf.velocityY=3;
  leaf.lifetime=75;
}


