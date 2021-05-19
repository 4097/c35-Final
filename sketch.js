var balloon;
var database,position;

var balloonAnimation , bgImage;

function preload(){
 bgImage = loadImage("Hot Air Ballon-01.png")
 balloonAnimation = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png") ; 
}

function setup() {
 
  database=firebase.database();
  createCanvas(1200,600);
   bg = createSprite(400,600)
   bg.addImage(bgImage);
   bg.x=1200;
   bg.y=600;
    

  balloon=createSprite(300, 450, 50, 50);
  balloon.addAnimation("moving",balloonAnimation)
  balloon.scale=0.25

  
}

function draw() {
  background(0);  

  if(balloon.y>0){
    if(keyDown(UP_ARROW)){
      balloon.y = balloon.y - 2 ;
      balloon.scale=balloon.scale+0.002;
  }
  
  }

  
  if(balloon.y<600){
     if(keyDown(DOWN_ARROW)){
      balloon.y = balloon.y +2;
      balloon.scale=balloon.scale-0.002;
   }
  }

  if(balloon.x>0){
    if(keyDown(LEFT_ARROW)){
      balloon.x = balloon.x -2 ;
  }
  }
  
  if(balloon.x<1200){
   if(keyDown(RIGHT_ARROW)){
      balloon.x = balloon.x +2;
    }
  }



  drawSprites();
}





