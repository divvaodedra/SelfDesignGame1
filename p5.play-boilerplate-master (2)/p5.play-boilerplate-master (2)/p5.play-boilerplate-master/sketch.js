var cowboy , cowboyImg ;
var cowgirl , cowgirlImg;
var titlepic;
var mainpagepic ;
var table ;
var target1 , target1Img ;
var target2 , target2Img ;
var target3 , target3Img ;
var target4 , target4Img ;
var target5 , target5Img ;
var target6 , target6Img ;
var gameState = 0;


function preload(){
titlepic = loadImage("images/title_pic.png");
cowboyImg = loadImage("images/cowboy.png");
cowgirlImg = loadImage("images/cowgirl.png");
mainpagepic = loadImage("images/mainpic.png");
table = loadImage("images/table.webp");
target1Img = loadImage("images/target_1.jpg");
target2Img = loadImage("images/target_2.png");
target3Img = loadImage("images/target_3.jpg");
target4Img = loadImage("images/target_4.png");
target5Img = loadImage("images/target_5.png");
target6Img = loadImage("images/target_6.png");
}


function setup() {
  createCanvas(1000,700);
  
}

function draw() {
  background('pink');
  

  if(gameState === 0 ){
  background('yellow');
  cow(); 
  drawSprites();
  text(mouseX + "," + mouseY , 100,100);
  image(titlepic , 280 , -20);
  textSize(50);
  fill('black');
  text("Old Town Road" , 350 , 220);
  if(mousePressedOver(cowboy)||mousePressedOver(cowgirl)){
    gameState = 1
  }
  }

  

   if(gameState === 1){
     gameState = 1;
    background(mainpagepic);
    drawSprites(); 
    target();
    image(table , 280 , 200);
    cowboy.visible = false;
    cowgirl.destroy();
 
    
    
  }
}


function cow(){
  cowboy = createSprite(300,390,100,200);
  cowboy.addImage(cowboyImg);
  cowgirl = createSprite(700,390,100,200);
  cowgirl.addImage(cowgirlImg);
}


function target(){
target1 = createSprite(100 , 100 , 100 , 200);
target1.addImage(target1.Img);
target2 = createSprite(10 , 10 , 40 , 40);
target2.addImage(target2.Img);
target3 = createSprite(10 , 10 , 60 , 60);
target3.addImage(target3.Img);
target4 = createSprite(10 , 10 , 80 , 80);
target4.addImage(target4.Img);
target5 = createSprite(10 , 10 , 100 , 100);
target5.addImage(target5.Img);
target6 = createSprite(10 , 10 , 120 , 120);
target6.addImage(target6.Img);
}