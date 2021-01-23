
/* Homework #7 - Nonlinear Storytelling
  @Dogca Dogan

 last update: Jan 22, Friday

 The story of rect in 7 frames

 Boolean Variables Tutorial by Dan Shiffman - https://www.youtube.com/watch?v=Rk-_syQluvc

*/


let img1,img2,img3,img4,img5,img6,img7;
let scene, typed;


var iptr = 0; // a counter for the words

var myVoice = new p5.Speech(); // new P5.Speech object


function preload(){
  // put preload code here

    img1= loadImage("assets/int.jpg");
    img2= loadImage("assets/red.jpg");
    img3= loadImage("assets/accept.jpg");
    img4= loadImage("assets/question.jpg");
    img5= loadImage("assets/red2.jpg");
    img6= loadImage("assets/eatyou.jpg");
    img7= loadImage("assets/final.jpg");



}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here

    scene = 1;
    typed= "";
    rectMode(CENTER);
    noStroke();
    img1.resize(img1.width/3, img1.height/3);
    img2.resize(img2.width/3, img2.height/3);
    img3.resize(img3.width/3, img3.height/3);
    img4.resize(img4.width/3, img4.height/3);
    img5.resize(img5.width/3, img5.height/3);
    img6.resize(img6.width/3, img6.height/3);
    img7.resize(img7.width/3, img7.height/3);

  myVoice.speak('Tanışalım mı?');

}

function draw() {
  // put drawing code here

  background(255);

  if (scene == 1) image(img1, 0, 0);
  if (scene == 2) image(img2, 0, 0);
  if (scene == 3) image(img3, 0, 0);
  if (scene == 4) image(img4, 0, 0);
  if (scene == 5) image(img5, 0, 0);
  if (scene == 6) image(img6, 0, 0);
  if (scene == 7) image(img7, 0, 0);


  //rectMode(CENTER);
  noStroke();
  fill(20,245,17);
  rect(100,600,50,50);


  noStroke();
  fill(227, 62, 43);
  rect(400,600,50,50);
  //if (scene == 1 && mouseX>100&&mouseX<150&&mouseY>600&&mouseY<650){ scene= 2;}

  //if (scene == 1 && mouseX>250&&mouseX<350&&mouseY>150&&mouseY<250){ scene= 2;}


}

function mousePressed(){



  if (scene == 1 && mouseX>100&&mouseX<150&&mouseY>600&&mouseY<650){ scene= 3;}
  else if (scene == 3 && mouseX>100&&mouseX<150&&mouseY>600&&mouseY<650){
      myVoice.speak('Bana yardım edicekmisin?');
    scene= 4;}
   else if (scene == 4 && mouseX>100&&mouseX<150&&mouseY>600&&mouseY<650){
     scene= 6;}
   else if (scene == 6 && mouseX>100&&mouseX<150&&mouseY>600&&mouseY<650){
     scene= 7;}

  if (scene == 1 && mouseX>400&&mouseX<450&&mouseY>600&&mouseY<650){ scene= 2;}
else if (scene == 4 && mouseX>400&&mouseX<450&&mouseY>600&&mouseY<650){ scene= 5;}



}
