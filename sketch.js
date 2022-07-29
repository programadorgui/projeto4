var bird;
var obstaclePredio;
var food;
var birdImage,foodImage,obstaclePredioImage;
var obstacleGroup,foodGroup;
var bg;
var ravenImg, ravenGroup;
var score;

function preload(){
birdImage = loadImage("./assets/passaro.png")
foodImage = loadImage("./assets/fruta.png")
obstaclePredioImage = loadImage("./assets/predio.png")
bg = loadImage("./assets/bg1.png")
ravenImg = loadImage("./assets/corvo.png")
}


function setup() {
  createCanvas(800,400);
  bird = createSprite(200,200,20,20);
  bird.addImage(birdImage)
  bird.scale = 0.04
  obstacleGroup = new Group();
  foodGroup = new Group();
  
}

  function draw (){
    background("red");
    image(bg,-1,-20,900,500);
    textSize(15);
    text("comidas -"+score,50,30);

    if(keyIsDown(LEFT_ARROW )){
      bird.position.x=bird.position.x -3;
    }
    
    if(keyIsDown(UP_ARROW )){
      bird.position.y=bird.position.y -3;
    }
    
    if(keyIsDown(DOWN_ARROW )){
      bird.position.y=bird.position.y +3;
    
    }


    if(keyIsDown(RIGHT_ARROW )){
      bird.position.x = bird.position.x +3;
    }

    // bird.setCollider("circle",0,0,40);
    // bird.debug = true;
    if(obstacleGroup.isTouching(bird)|| ravenGroup.isTouching(bird)){
      
      score +=1;
    

    }
    
  



    obstacle();
    comida();
    raven();
drawSprites();





  }

  function raven(){
    if(frameCount%100===0){
      var raven;
      raven = createSprite(350,0,10,10)
      raven.velocityY = 1;
      raven.y = Math.round(random(0,750))
      raven.x = Math.round(random(0,750))
      raven.addImage(ravenImg)
      raven.scale = 0.25
      ravenGroup.add(raven)
  }
}
function obstacle(){
  if(frameCount%100===0){
    obstaclePredio = createSprite(800,400,30,100)
    obstaclePredio.velocityX = -3
    obstaclePredio.shapeColor = "green"
    obstaclePredio.x = Math.round(random(400,800))
    obstaclePredio.addImage(obstaclePredioImage)
    obstaclePredio.scale = 0.09
    obstacleGroup.add(obstaclePredio)
  }
}
function comida(){
 if(frameCount%200===0){
  food = createSprite(800,150,10,10)
  food.velocityX = -1;
  food.y = Math.round(random(0,150))
  food.addImage(foodImage)
  food.scale = 0.03
  foodGroup.add(food)
}
}

















 

  
    



  



  

  


  










