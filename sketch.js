var backgroundImage, E1, enemy1, YW;
var gameState = 1;
var score = 0;

function preload(){
	backgroundImage = loadImage("road.jpg");
	E1 = loadImage("Enemy1.png");
  E2 = loadImage("Enemy2.png");
  E3 = loadImage("Enemy3.png");
  W = loadImage("success.png")
	P = loadImage("car.png")
  O = loadImage("gameOver.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enemy1 = createSprite(windowWidth/7 ,random(100, 200), 50, 50);
  enemy1.addImage(E1);
  enemy1.velocityX = 15;
  enemy2 = createSprite(windowWidth/7 ,380, 50, 50);
  enemy2.addImage(E2);
  enemy2.velocityX = 10;
  enemy3 = createSprite(windowWidth/7 ,500, 50, 50);
  enemy3.addImage(E3);
  enemy3.velocityX = 20;
  player = createSprite(100, windowHeight/2, 50, 50);
  player.addImage(P);
  player.setCollider("rectangle", 0, 0, 100, 50, 0)
  YW = createSprite(windowWidth/2, windowHeight/2, 150, 200)
  YW.addImage(W);
  GO = createSprite(windowWidth/2, windowHeight/2, 200, 100);
  GO.addImage(O)
}

function draw() {
  background(backgroundImage);  

  score  = player.x
  if(gameState == 1){
    YW.visible = false;
    GO.visible = false;

    if (keyCode === RIGHT_ARROW) {
      setDir(3, 0);
    } 

    if (keyCode === UP_ARROW) {
      setDir(0, -3);
    } 

    if (keyCode === DOWN_ARROW) {
      setDir(0, 3);
    } 
  


  if(enemy1.x > windowWidth){
    enemy1.x = 0;
    enemy1.y = random(100, 250)
  }

  if(enemy2.x > windowWidth){
    enemy2.x = 0;
    enemy2.y = random(450, 500)
  }

  if(enemy3.x > windowWidth){
    enemy3.x = 0;
    enemy3.y = random(350, 450)
  }


  if(player.x > windowWidth){
    player.x = windowWidth;
    gameState = 2;
    }
  }

  if (gameState == 2) {
    YW.visible = true;
  }

  if(gameState == 0){
    GO.visible = true;
  }

  if(enemy1.collide(player)){
    gameState = 0;
  }

  if(enemy2.collide(player)){
    gameState = 0;
  }

   if(enemy3.collide(player)){
    gameState = 0;
  }

 if(score == 1366){
  score = 1400
 }

  drawSprites();
  fill(0)
  text("Score: "+ score, 1200, 50)

}

function setDir(x, y){
	player.x = player.x + x;
	player.y = player.y + y;
}

function keyReleased(){

}

function keyPressed(){

}

function isTouching(obj1, obj2){

}
