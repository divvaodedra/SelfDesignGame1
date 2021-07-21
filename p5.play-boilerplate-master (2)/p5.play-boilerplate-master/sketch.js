var cowboy;
var cowgirl;
var titlepic;

function preload(){
titlepic = loadImage("images/title_pic.png");
cowboy = loadImage("images/cowboy.png");
cowgirl = loadImage("images/cowgirl.png");
}


function setup() {
  createCanvas(1000,700);
  cowboy = createSprite(300,390,100,200);
  cowgirl = createSprite(700,390,100,200);

}

function draw() {
  background('yellow');  
  drawSprites();
  text(mouseX + "," + mouseY , 100,100);
  image(titlepic , 280 , -20);
  textSize(50);
  fill('black');
  text("Old Town Road" , 350 , 220);
}