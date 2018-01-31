var toto=17  ;
var double=[32,16,20,50,2,4,6,8,10,12,14,18,20,22,24,26,28,30,34,36,38,40];
var tout=[0,20,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21,22,24,25,26,27,28,30,32,33,36,38,39,40,42,45,48,50,51,54,57,60];
var text2="No clicks yet";
function setup() {

  var canvas = createCanvas(window.innerWidth, window.innerWidth);
  //canvas.position(0,350);
  canvas.parent('myContainer');
  textSize(32);
  rectMode(CENTER);

  //console.log("Toto : "+toto);

  //Double triple
  // console.log("C'est partit :");
  // console.log("------------------------");
  // for(var k = 0; k < double.length; k++){
  //   for (var i = 0; i < tout.length; i++) {
  //     for (var j = 0; j < tout.length; j++) {
  //       if(toto-double[k]-tout[i]-tout[j]==0){
  //         console.log("- "+tout[j]+" puis - "+tout[i]+" puis - double "+double[k]/2);
  //       }
  //     }
  //   }
  // }

}

function button_click1(){
  var button = document.getElementById("button1");
  button.innerText = 'Button clicked !';
  text2="Button clicked !";
}

function button_click2(){
  var button = document.getElementById("button1");
  button.innerText = 'Button clicked !';
  text2="Button clicked !";
}

function button_compute(){
  var button = document.getElementById("button1");
  button.innerText = 'Button clicked !';
  text2="Button submit clicked !";
}


function show_target(){
  var taille=window.innerWidth-window.innerWidth/20;
  background(255);
  noFill()
  stroke(0);
  var pas=taille/20;

  ellipse(width/2,height/2,taille,taille);
  ellipse(width/2,height/2,taille-pas,taille-pas);
  ellipse(width/2,height/2,taille/2-pas/2,taille/2-pas/2);
  ellipse(width/2,height/2,taille/2-pas/2+pas,taille/2-pas/2+pas);
  ellipse(width/2,height/2,pas*2,pas*2);
  ellipse(width/2,height/2,pas/2,pas/2);

  for (var i = 0; i < 20; i++) {
    line(width/2,height/2,width/2+taille/2*cos(TWO_PI/40+i*TWO_PI/20),height/2+taille/2*sin(TWO_PI/40+i*TWO_PI/20));
  }
}

function draw() {
  show_target();
  //background(0);
  fill(0);
  text(text2,200,200);
}
