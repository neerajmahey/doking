 var issi,bgi,sc1,sc2,sc3,sc4;
 var sc,iss
 var hasDoked=false;
 function preload(){
issi=loadImage("images/iss.png");
bgi=loadImage("images/spacebg.jpg");
sc1=loadImage("images/spacecraft1.png");
sc2=loadImage("images/spacecraft2.png");
sc3=loadImage("images/spacecraft3.png");
sc4=loadImage("images/spacecraft4.png");
 }
function setup() {
  createCanvas(800,400);
sc=createSprite(285,240);
sc.addImage(sc1);
sc.scale=0.15 ;
iss=createSprite(330,130);
iss.addImage(issi);
iss.scale=0.25;
}


function draw() {
  background(bgi);  
  if(!hasDoked){
    sc.x=sc.x+random(-1,1)
  
  if(keyDown("up")){
    sc.y=sc.y-3
  }
  if(keyDown('left')){
    sc.x=sc.x-1;
    sc.addImage(sc4);
  }
  if(keyDown('right')){
    sc.x=sc.x+1;
    sc.addImage(sc3);

  }
  if(keyDown('down')){
    sc.addImage(sc2)
  }
  }
  if(sc.y<=(iss.y+70)&& sc.x<=(iss.x-10)){
hasDoked=true;
textSize(25);
fill ("white");
text ("dockingsksessfull",200,300)
  }
  drawSprites();
}