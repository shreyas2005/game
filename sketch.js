var ground,chracter;
var ob,ob2,ob3,ob4,ob5,line,ob6,ob7;
var trap1;
var wall,wall2,wall3,wall4;
var idle;
var running;
var pad,pad1;;
var up,platform;
var buildimg;
var padimg;
var alien,alien2,alienimg,alienimg2;
var platformimg;
var back;
var trapimg,log;
var cactus;
var mud,metal;
var gameState=0;
var form1,form2;
var data;
var gameover,restart;
var k=0;
function preload(){

  //loading images
  idle=loadImage('sprites/char.png');
  buildimg=loadImage('sprites/build.png');
  platformimg=loadImage('pads/barrel.png')
  //loading animation
   running=loadAnimation('sprites/run1.png','sprites/run2.png','sprites/run3.png','sprites/run4.png','sprites/run5.png');
  padimg=loadImage('pads/grasspad.png');
  alienimg=loadImage('enemies/alien.png');
   back=loadImage('background/back.png');
   trapimg=loadImage('pads/trap.png');
   log=loadImage('pads/log.png');
   cactus=loadImage('pads/obstacle.png');
   mud=loadImage('pads/mudpad.png');
   metal=loadImage('pads/pad1.png');
   alienimg2=loadImage('enemies/alien2.png');

}
function setup() {
  createCanvas(displayWidth,displayHeight/2+200);
  //creation of sprites and enemies
  ground=createSprite(displayWidth/2,displayHeight/2+500,10000000,1000);
  // ground.shapeColor="";
  ob=createSprite(1300,150,100,20);
  ob.scale=0.2;
  ob2=createSprite(1100,310,100,250);
  chracter=createSprite(900 ,475,50,100);
  wall=createSprite(200,150,500  ,10000);
  ob3=createSprite(2000,100,300,20);
  ob3.addImage(log);
  trap1=createSprite(1600,275,75,20);
  ob4=createSprite(2300,275,100,20);
  ob4.addImage(mud);
  wall2=createSprite(2800,275,100,220);
  wall3=createSprite(2100,275,75,200);
    wall3.addImage(cactus);

  wall3.shapeColor="red";
  ob5=createSprite(3200,100 ,100,20);
  ob5.addImage(mud);
  line=createSprite(3600,100,500,20);
  line.addImage(metal);
  wall4=createSprite(3900,300,100,200);
  ob6=createSprite(4300,100,50,20);
  ob6.addImage(mud);
  platform=createSprite(5300,200,150,400);
  ob7=createSprite(4900,100,100,20);
  ob7.addImage(mud);
  alien=createSprite(1400,300,50,30);
  alien2=createSprite(3000,300,50,30);
  gameover=createSprite(600,200);
  restart=createSprite(800,200);
  alien2.addImage(alienimg2);
  //setting images to the sprites and enemies
    chracter.addImage(idle);
    wall.addImage(buildimg);
    ob.addImage(padimg);
    alien.addImage(alienimg);
    wall2.addImage(platformimg);
    wall4.addImage(platformimg);
  chracter.addAnimation(running);
  ob2.addImage(platformimg);
  trap1.addImage(trapimg);
  // ob2  .debug=true;
      form1=new Form();

  alien.setCollider("circle",0,0,50);
  // chracter.setCollider("circle",0,0,30);
  //setting size 
      chracter.scale=2;
      ob2.scale=0.4;
      trap1.scale=0.2;  
      ob3.scale=0.3;
      wall3.scale=0.5;
      alien.scale=0.2;
      ob4.scale=0.2;
      wall2.scale=0.5;
      ob5.scale=0.2;
      line.scale=0.2;
      ob6.scale=0.1;
      wall4.scale=0.5;
      ob7.scale=0.1;
      alien2.scale=0.2;
      ob2.shapeColor="red";
  gameover.visible=false;
  restart.visible=false;
alien.velocityX=-10;
    form2=new Form();

alien2.velocityX=-15;
}

function draw() {
  background(back);  

  //setting camera for sprites
  camera.position.x=chracter.x;
  camera.position.y=chracter.y;

//collide code
  chracter.collide(ground);
  chracter.collide(ob);
  chracter.collide(ob2);
  chracter.collide(wall);
  chracter.collide(ob3);
  chracter.collide(trap1);  
  chracter.collide(ob4);
  chracter.collide(wall2);
  chracter.collide(wall3);
  chracter.collide(ob5);
  chracter.collide(line); 
  chracter.collide(wall4);
  chracter.collide(ob6);
  chracter.collide(ob7);
  chracter.collide(platform);
  alien.bounceOff(ob2);
  alien.bounceOff(wall3);
   alien2.bounceOff(wall2);
  alien2  .bounceOff(wall4);

  // alien.x+=30;
  // alien.velocityX=0;




  //colour area

  //gravity
  chracter.velocityY+=1;
  //movement of the sprites
  if (keyDown("UP_ARROW")&&keyDown("RIGHT_ARROW")) {
    chracter.x+=8;
    chracter.y-=16;
  }
  if (keyDown("UP_ARROW")&&keyDown("LEFT_ARROW")) {
    chracter.x-=5;
    chracter.y-=15;
  }
  if (keyDown("DOWN_ARROW")) {
    chracter.x+=5;
    chracter.y+=18;
  }
  if (keyDown("RIGHT_ARROW")) {
    chracter.x+=8;
  }
   if (keyDown("LEFT_ARROW")) {
    chracter.x-=8;
  }
  if(gameState===0 ){

  form1.unhide();
  ob2.visible=false;
  ob.visible=false;
  trap1.visible=false;
  alien.visible=false;
  wall.visible=false;
  ground.visible=false;
  chracter.visible=false;

  }
  if(gameState===1){
      ob2.visible=true;
  ob.visible=true;
  trap1.visible=true;
  alien.visible=true;
  wall.visible=true;
  ground.visible=true;
  chracter.visible=true;
  // form.hide();
    fill(255);
  text(data,chracter.x-30,chracter.y-40);
  }
  if (chracter.isTouching(alien)) {
    gameover.visible=true;
    restart.visible=true;
    
  }
  if(keyDown("SPACE")){
    gameState=0;
    form1.unhide();
      ob2.visible=false;
  ob.visible=false;
  trap1.visible=false;
  alien.visible=false;
  wall.visible=false;
  ground.visible=false;
  chracter.visible=false;


  }

  drawSprites();
}