
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage= loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(50,350);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,380,400,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  ground.shapeColor = "green";
  
 FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("lightblue");  

  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(ground.x<200){
    ground.x = 200;
  }
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 240,70);
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas(){
  if(frameCount % 80 === 0){
    banana = createSprite(400,200);
    banana.scale = 0.1;
    banana.addImage("banana",bananaImage);
   banana.y= Math.round(random(120,200));
    banana.velocityX = -10;
    banana.lifetime = 800;
  FoodGroup.add(banana);
  
  }
}

function spawnObstacles(){
   if(frameCount % 300 === 0){
     obstacle = createSprite(400,200);
     obstacle.scale = 0.1;
     obstacle.addImage("obstacle",obstacleImage);
     obstacle.y = Math.round(random(360,380));
     obstacle.velocityX = -10;
     obstacle.lifetime = 800;
     obstacleGroup.add(obstacle);
   }
}