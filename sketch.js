var iss,spacecraft,bg,issImg,spaceCraftImg,scLeft,scRight,scBoth;
var hasDocked=false
function preload(){
bg = loadImage("spacebg.jpg");
issImg = loadImage("iss.png");
spacecraftImg = loadImage("spacecraft1.png");
}


function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss = addImage(issImg);
  spacecraft = createSprite(420,300,50,50);
  spacecraftImg = addImage(spaceCraftImg);
}

function draw() {
  background(bg);
   
  drawSprites();
}