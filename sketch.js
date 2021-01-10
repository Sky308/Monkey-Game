var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup

var survivalTime=0
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(100,320,30,30);
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1

  ground = createSprite(200,350,800,5)
  ground.velocityX = -4
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("white");
  
  textSize(20);
  fill("black");
  survivalTime = survivalTime+Math.round(getFrameRate()/60);
  text("Survival Time: " + survivalTime,10,50)
  
  if(ground.x<0){
    ground.x=200
  }
  
  if(keyDown("space") && monkey.y>316){
  monkey.velocityY=-15
  }
  monkey.velocityY=monkey.velocityY+0.6
  monkey.collide(ground);
  
  console.log(monkey.y)
  
  foods();
  obstacles();
  
  drawSprites();
}

function foods(){
  if(frameCount%80===0){
    var banana = createSprite(400,Math.round(random(140,220)),20,20)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX = -3
    banana.lifetime=150
    foodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
  var obstacle = createSprite(400,310,25,25)
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -3
  obstacle.scale=0.2
  obstacle.lifetime=150
  obstacleGroup.add(obstacle);
} 
}