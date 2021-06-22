var obst1, fixedgun1,fixedgun2,fixedgun3,fixedgun4,fixedgun5;
var plrGun, enemy1, enemy2, enemy3, enemy4, boss;
var plrGunImgleft,plrGunImgright, enemyImg, bossImg,fixedgunImg;
var edges,lives;
var life=0;
var bulletGrp1,bulletGrp2,bulletGrp3,bulletGrp4;
var plr="true",obst2;
function preload() {
  plrGunImgleft=loadImage("Images/player-rifle-left.png");
  plrGunImgright=loadImage("Images/player-rifle-right.png");
  enemyImg=loadImage("Images/assasin1.png");
  bossImg=loadImage("Images/James right.png");
  fixedgunImg=loadImage("Images/fixedgunImG.png");
  bulletleftimg=loadImage("Images/bullet-left.png");
  bulletrightimg=loadImage("Images/bullet-right.png");
}

function setup() {
  createCanvas(1350,600);
  background('black');
  
//  lives
  bulletGrp1=new Group();
  bulletGrp2=new Group();
  bulletGrp3=new Group();
  bulletGrp4=new Group();
    
  plrGun=createSprite( 1285,550,20,20 );
  plrGun.addImage("player",plrGunImgleft);
  plrGun.scale=0.5

  obst1=createSprite( innerWidth/2+50,innerHeight/2,10,450 ); 
  obst2=createSprite( plrGun.x-200,innerHeight/2,10,450 ); 
  
  fixedgun1=createSprite( 250,100,20,20 );
  fixedgun1.addImage("guns1",fixedgunImg);
  fixedgun1.scale=0.8;

  fixedgun2=createSprite( 250,250,20,20 );
  fixedgun2.addImage("guns2",fixedgunImg);
  fixedgun2.scale=0.8;

  fixedgun3=createSprite( 250,400,20,20 );
  fixedgun3.addImage("guns3",fixedgunImg);
  fixedgun3.scale=0.8;

  fixedgun4=createSprite( 250,550,20,20 );
  fixedgun4.addImage("guns4",fixedgunImg);
  fixedgun4.scale=0.8;

  enemy1=createSprite( obst1.x-20,obst1.y+30,20,20 );
  enemy1.addImage("enemy1",enemyImg);
  enemy1.scale=1.5;

  enemy2=createSprite( obst1.x-20, obst1.y-30,20,20 );
  enemy2.addImage("enemy2",enemyImg);
  enemy2.scale=1.5;

  boss=createSprite( 70,300,20,20 );
  boss.addImage("boss",bossImg);
  boss.velocityY=-2;
  edges=createEdgeSprites();


  enemy1.velocityY=-2;
  enemy2.velocityY=2;
  
  //  maze(); 
}

function draw() {
  background("black");

  if (keyWentDown("space")){
    var plBullet=createSprite(plrGun.x,plrGun.y+10);
    plBullet.addImage("bullet",bulletleftimg);
    plBullet.velocityX=-15;
    plBullet.scale=0.1;
  }

  plrGun.bounceOff(obst1);
  plrGun.bounceOff(obst2);
  
  plrGun.velocityX=0;
  plrGun.velocityY=0;   

  if(keyDown("up")){
     plrGun.velocityX=0;
     plrGun.velocityY=-8;
  }
  if(keyDown("down")){
    plrGun.velocityX=0;
    plrGun.velocityY=8;
  }
  if(keyDown("left")){
    plrGun.velocityX=-8;
    plrGun.velocityY=0;
    plrGun.addImage("player",plrGunImgleft);
  }
  if(keyDown("right")){
    plrGun.velocityX=9;
    plrGun.velocityY=0;
    plrGun.addImage("player",plrGunImgright);
  }
  if(frameCount%60===0)
  {
     bullet1=createSprite(fixedgun1.x+60,fixedgun1.y-60,10,10);
    bullet1.addImage(bulletrightimg);
     bullet2=createSprite(fixedgun2.x+60,fixedgun2.y-60,10,10);
    bullet2.addImage(bulletrightimg)
   bullet3=createSprite(fixedgun3.x+60,fixedgun3.y-60,10,10);
    bullet3.addImage(bulletrightimg)
     bullet4=createSprite(fixedgun4.x+60,fixedgun4.y-60,10,10);
    bullet4.addImage(bulletrightimg)
    
    bullet1.velocityX=4;
    bullet2.velocityX=4;
    bullet3.velocityX=4;
    bullet4.velocityX=4;

    bullet1.scale= 0.1;
    bullet2.scale= 0.1;
    bullet3.scale= 0.1;
    bullet4.scale= 0.1;
    bulletGrp1.add(bullet1);
    bulletGrp2.add(bullet2);
    bulletGrp3.add(bullet3);
    bulletGrp4.add(bullet4);
    
  }
enemy1.bounceOff(edges[2]);
enemy1.bounceOff(edges[3]);
enemy2.bounceOff(edges[2]);
enemy2.bounceOff(edges[3]);
boss.bounceOff(edges[2]);
boss.bounceOff(edges[3]);

for(var x=0;x<bulletGrp1.length;x++)
{
  if(bulletGrp1[x].isTouching(plrGun)&&plr!=="false")
  {
    bulletGrp1[x].destroy();
    life++;
    console.log(life);
    console.log("x is "+x);
    
  }
  else if(bulletGrp2[x].isTouching(plrGun)&&plr!=="false")
  {
    bulletGrp2[x].destroy();
    life++;
    console.log(life);
    console.log("x is "+x);
    
  }
  else if(bulletGrp3[x].isTouching(plrGun)&&plr!=="false")
  {
    bulletGrp3[x].destroy();
    life++;
    console.log(life);
    console.log("x is "+x);
    
  }
  else if(bulletGrp4[x].isTouching(plrGun)&&plr!=="false")
  {
    bulletGrp4[x].destroy();
    life++;
    console.log(life);
    console.log("x is "+x);
    
  }
  
  
  
  if(life===5 && plr=="true")
  {
    plrGun.destroy();
    // bulletGrp1.setVelocityXEach(0);
    // bulletGrp2.setVelocityXEach(0);
    // bulletGrp3.setVelocityXEach(0);
    // bulletGrp4.setVelocityXEach(0);
     plr="false"
  }
}

drawSprites();
}

