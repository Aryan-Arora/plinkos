
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Ground;
var bar1;
var bar2;
var bar3;
var bar4;
var bar5;




var particles=[]
var plinkos=[]
var divisions=[]

var divisionHeight=300;

function setup() {
  createCanvas(600,700);
  engine = Engine.create();
    world = engine.world;
 Ground=new ground(650,680,16000,5)
 for(var k=0; k<=width; k=k+80){
  divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight))
}
 for(var j=45 ; j<=width;j=j+50){
   plinkos.push(new plinko(j,75,10))
 }
 for(var j=35 ; j<=width;j=j+50){
  plinkos.push(new plinko(j,375,10))
}
for(var j=250 ; j<=width;j=j+50){
  plinkos.push(new plinko(j,275,10))
}
for(var j=15 ; j<=width;j=j+50){
  plinkos.push(new plinko(j,175,10))
}
}

function draw() {
  background(0);  
  drawSprites();
  

  for(k=0;k<divisions.lenght;k++){
divisions[k].display();
  }
  for(j=40;k<plinkos.lenght;j++){
    plinkos[j].display();
      }
 // if(frameCount%60===0){
   // particles.push(new Particle(random(width/2-10,width/2+10,10,10)))
  //}
  Ground.display();
  
  
}