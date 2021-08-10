
function preload(){
  bg1=loadImage("bg1.jpeg")

 leopardImage=loadAnimation("leopard/tile000.png","leopard/tile001.png","leopard/tile002.png",
 "leopard/tile003.png","leopard/tile004.png","leopard/tile005.png","leopard/tile006.png",
 "leopard/tile007.png","leopard/tile008.png","leopard/tile009.png",
 "leopard/tile010.png","leopard/tile011.png")
  
 lionImage=loadAnimation("lion/tile000.png","lion/tile001.png","lion/tile002.png",
 "lion/tile003.png","lion/tile004.png","lion/tile005.png","lion/tile006.png",
 "lion/tile007.png","lion/tile008.png","lion/tile009.png",
 "lion/tile010.png","lion/tile011.png")

  
 catImage=loadAnimation("cat/tile000.png","cat/tile001.png","cat/tile002.png",
 "cat/tile003.png","cat/tile004.png","cat/tile005.png","cat/tile006.png",
 "cat/tile007.png","cat/tile008.png","cat/tile009.png",
 "cat/tile010.png","cat/tile011.png")

  

}

function setup() {
  createCanvas(800,600);
  //track=createSprite(width/2,2*height/3,width,2*height/3)

  lion=createSprite(100,260)
  leopard=createSprite(100,410)
  cat=createSprite(100,540)


  lion.addAnimation("lion",lionImage)
  cat.addAnimation("cat",catImage)
  leopard.addAnimation("leopard",leopardImage)
}

function draw() {
  background('pink');  
  image(bg1,0,0,width,height/3);

  
  
  
  
  
  drawSprites();
  for(var i=0;i<width;i=i+20){
    line(i,2*height/4+25,i+10,2*height/4+25)
  }
  for(var i=0;i<width;i=i+20){
    line(i,3*height/4+25,i+10,3*height/4+25)
  }
}
