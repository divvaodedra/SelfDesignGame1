var cowboy , cowboyImg ;
var cowgirl , cowgirlImg;
var titlepic;
var gameState = 0;
var mainpagepic ;
var table ;
var target1 , target1Img ;
var target2 , target2Img ;
var target3 , target3Img ;
var target4 , target4Img ;
var target5 , target5Img ;
var target6 , target6Img ;
var mainscreen;
var gun ;

function preload(){
titlepic = loadImage("images/title_pic.png");
cowboyImg = loadImage("images/cowboy.png");
cowgirlImg = loadImage("images/cowgirl.png");
mainpagepic = loadImage("images/mainpic.png");
table = loadImage("images/table.png");
target1Img = loadImage("images/target1.png");
target2Img = loadImage("images/target2.png");
target3Img = loadImage("images/target3.png");
target4Img = loadImage("images/target4.png");
target5Img = loadImage("images/target5.png");
//target6Img = loadImage("images/target_6.png");
}


function setup() {
  createCanvas(1000,700);
  gun = createSprite(730 , 660 , 30 , 100);

}

function draw() {
  background('yellow');  
  drawSprites();
  text(mouseX + "," + mouseY , 100,100);

  if(gameState === 0 ){
    
    character();
    
    image(titlepic , 280 , -20);
    textSize(50);
    fill('black');
    text("Old Town Road" , 350 , 220);

  if(mousePressedOver(cowboy)||mousePressedOver(cowgirl)){
    gameState = 1
  }
    }
    // 
    else if(gameState === 1){      
      target();
      
    }
    gun.velocityX = 5;
}

function character(){
  cowboy = createSprite(300,390,100,200);
  cowboy.addImage(cowboyImg);
  cowgirl = createSprite(700,390,100,200);
  cowgirl.addImage(cowgirlImg);
}

function target(){
  mainscreen = createSprite(500 , 350);
  mainscreen.addImage(mainpagepic);
  mainscreen.scale = 2;

  image(table , 330 , 350);
target1 = createSprite(360 , 420 , 10 , 10);
target1.addImage(target1Img);
target1.scale = 0.2;
target2 = createSprite(10 , 10 , 10 , 10);
target2.addImage(target2Img);
target3 = createSprite(10 , 10 , 10 , 10);
target3.addImage(target3Img);
target4 = createSprite(10 , 10 , 10 , 10);
target4.addImage(target4Img);
target5 = createSprite(10 , 10 , 10 , 10);
target5.addImage(target5Img);
//target6 = createSprite(10 , 10 , 120 , 120);
//target6.addImage(target6Img);

//gun.addImage(gunImg);

}