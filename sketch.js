var wall, thickness;

var bullet,speed,wieght;

function setup() {
  createCanvas(1300,400);

  speed=random(223,321);
  wieght=random(30,52);
  thickness=random(22,83);
 
  bullet=createSprite(50,200,50,50);

  bullet.velocityX=speed;

  bullet.shapeColor=color(205,600,0);


  wall=createSprite(1200,200,thickness,hieght/2);
  wall.shapeColor(80,80,80);
}

function draw() {
  background(255,255,255);  
 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){

    bullet.velocityX=0;
  var deformation = 0.5*wieght*speed*speed/22500;

if(deformation<180){
  bullet.shapeColor=color(0,255,0);
}

if(deformation<180 && deformation>100){
  bullet.shapeColor=color(230,230,0)
}

if(deformation>180){
  bullet.shapeColor=color(250,0,0);
}
}

hasCollided(bullet,wall);

drawSprites();

function hasCollided(bullet,wall)
{
bulletRightEdge= bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){
return true;
}
return false;
}

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;

  var damage = 0.5*wieght*speed*speed/thickness*thickness*thickness;

  if(damage>10){
    wall.shapeColor(255,0,0);
  }

  if(damage<10){
    wall.shapeColor(0,255,0);
  }
}

}