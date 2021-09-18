var rulesimg
var room1_img
var playerimg
var play
var gameState= "rules"
var level1_start=1
function preload(){
   rulesimg=loadImage("rulesimg.jpg");
    room1_img=loadImage("room1img.jpg")
    playerimg_running=loadAnimation("walk1.png","walk2.png","walk3.png","walk4.png","walk5.png")
    player_standing=loadAnimation("walk3.png")
    coin_img=loadImage("coin_img.png");
    bomb_img=loadAnimation("b1.png")
    bomb_explotion=loadAnimation("b1.png","b2.png","b3.png","b4.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  play = createButton("PLAY")
  play.position(width/2,height-200);
  play.mousePressed(() => {
    gameState="level1"
    play.hide()
  });

  player= createSprite(400,200);
  player.addAnimation("standing",player_standing);
  player.addAnimation("running",playerimg_running);
  player.visible= false
  player.scale =0.09;

  

  
}

function draw() {
  background(255,255,255);
  if(gameState==="rules"){
    image(rulesimg,0,0,width,height);
  }
  if(gameState==="level1"){
    if(level1_start){
      spawnCoins()
      level1_start =0

    }
    image(room1_img,0,0,width,height);
    player.visible= true

  
    
    
  if(keyIsDown(UP_ARROW)){
    player.y-=4
  }
  if(keyIsDown(LEFT_ARROW)){
    player.x-=4
   
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.changeAnimation("running",playerimg_running);
    player.x+=4
  }
  if(keyIsDown(DOWN_ARROW)){
    player.y+=4
  }
  }
 
    drawSprites();
}
function spawnCoins(){
  for(var i = 0;i<5;i++){
    x=random(20,width-50)
    y=random(20,height-50);
    coin=createSprite(x,y);
    coin.addImage(coin_img)
    coin.scale=0.05
  }

}
function spawnBomb(){
  for(var i = 0;i<5;i++){
    x=random(20,width-50)
    y=random(20,height-50);
    bomb=createSprite(x,y);
    bomb.addImage(coin_img)
    coin.scale=0.05
  }
}