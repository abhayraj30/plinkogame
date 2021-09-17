const Engine = Matter.Engine,
const World = Matter.World,
const Events = Matter.Events,
const Bodies = Matter.Bodies;
var Engine,World;
var particles;
var plinkos = [];
var divisions =[];
var particle;
var divisionHeight=300;
var score =0;
var count = 0;
var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for(var j = 75; j <=width; j=j+50){
    plinkos.push(new plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <= width; j=j+50){
     plinkos.push(new plinko(j,375));
  }

    
}
 


function draw() {
  background("black");
  textSize(20);
  text("score :"=score,20,40);
  file("white");

  textSize(23);
  text("500",5,550);
  text("500",80,550);
  text("500",160,550);
  text("500",240,550);
  text("500",320,550);
  text("500",400,550);
  text("500",480,550);
  text("500",560,550);
  text("500",640,550);
  text("500",720,550);
 
  Engine.update(engine);
  ground.display();

  if(gameState =="end"){
    textSize(90);
    text("GameOver",150,300);
  }
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
    if(particle!=null){
      particle.display();
       if(particle.body.position.y>760,particle.body.position.x<300){
         score=score=500;
         particle=null;
         if(count>=5) {
           gameState = "end";
         }
         else if (particle.body.position.x<600 && particle.body.position.x>301){
           score = score=100;
           particle=null;
           if(count>=5){
             gameState = "end";
           }
         }
         else if (particle.body.position.x<900 && particle.body.position.x>601){
           score = score +200;
           particle = null;
           if(count>=5){
             gameState = "end";
           }
         }

         

       }

    }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

}
function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle = new particle(mouseX,10,10,10);
  }

}
