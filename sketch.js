

var double=[32,16,20,50,2,4,6,8,10,12,14,18,20,22,24,26,28,30,34,36,38,40]; // Combinaisons doubles
var tout=[0,20,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21,22,24,25,26,27,28,30,32,33,36,38,39,40,42,45,48,50,51,54,57,60]; // Combinaisons possibles
var table=[]; // tableau pour les valeurs retenues
var table_cible=[15,2,17,3,19,7,16,8,11,14,9,12,5,20,1,18,4,13,6,10];
var taille; // table de la cible
var pas; // taille du pas pour les largeurs des doubles/triples



function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerWidth);
  canvas.parent('myContainer');
  textSize(25);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  taille=width-width/20;
  pas=taille/20;
}


// Fonctions executées par les 3 boutons :
function button_click1(){
  show_target();
  stroke(255,0,0);
  show_hit(table[0][0]);
  stroke(0,255,0);
  show_hit(table[0][1]);
  stroke(0,0,255);
  var  i=look_for(table_cible,table[0][2]/2);
  cross(width/2+taille/2.05*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.05*sin(TWO_PI/10+i*TWO_PI/20),8);
  if(table[0][2]==50)cross(width/2,height/2,8);
}

function button_click2(){
  show_target();
  stroke(255,0,0);
  show_hit(table[1][0]);
  stroke(0,255,0);
  show_hit(table[1][1]);
  stroke(0,0,255);
  var  i=look_for(table_cible,table[1][2]/2);
  cross(width/2+taille/2.05*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.05*sin(TWO_PI/10+i*TWO_PI/20),8);
  if(table[0][2]==50)cross(width/2,height/2,8);
}

function button_click3(){
  show_target();
  stroke(255,0,0);
  show_hit(table[2][0]);
  stroke(0,255,0);
  show_hit(table[2][1]);
  stroke(0,0,255);
  var  i=look_for(table_cible,table[2][2]/2);
  cross(width/2+taille/2.05*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.05*sin(TWO_PI/10+i*TWO_PI/20),8);
  if(table[0][2]==50)cross(width/2,height/2,8);
}

function button_click4(){
  show_target();
  stroke(255,0,0);
  show_hit(table[3][0]);
  stroke(0,255,0);
  show_hit(table[3][1]);
  stroke(0,0,255);
  var  i=look_for(table_cible,table[3][2]/2);
  cross(width/2+taille/2.05*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.05*sin(TWO_PI/10+i*TWO_PI/20),8);
  if(table[3][2]==50)cross(width/2,height/2,8);
}



// Affiche là ou il faut tirer pour une valeur donnée
function show_hit(valeur){
  if(valeur==0){
    cross(width/2+taille/1.7*cos(TWO_PI/10+11*TWO_PI/20),height/2+taille/1.7*sin(TWO_PI/10+11*TWO_PI/20),8);
  }

  if(valeur==25){
    cross(width/2+taille/33*cos(TWO_PI/10+11*TWO_PI/20),height/2+taille/33*sin(TWO_PI/10+11*TWO_PI/20),8);
  }

  if(valeur==50){
    cross(width/2,height/2,8);
  }

  if(valeur%3==0){
    var i=look_for(table_cible,valeur/3);
    cross(width/2+taille/4*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/4*sin(TWO_PI/10+i*TWO_PI/20),8);
  }
  if(valeur%2==0){
    var i=look_for(table_cible,valeur/2);
    cross(width/2+taille/2.05*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.05*sin(TWO_PI/10+i*TWO_PI/20),8);
  }
  if(valeur<=20){
    var i=look_for(table_cible,valeur);
    cross(width/2+taille/2.5*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.5*sin(TWO_PI/10+i*TWO_PI/20),8);
    cross(width/2+taille/6*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/6*sin(TWO_PI/10+i*TWO_PI/20),8);
  }
}


// Fonction executé par le bouton a coté de l'input
// Ecrit dans table les valeurs des combinaisons
function button_compute(){
  table=[];
  var toto = document.getElementById("myNumber").value; // On recupere le chiffre de l'input
  for(var k = 0; k < double.length; k++){
    for (var i = 0; i < tout.length; i++) {
      for (var j = 0; j < tout.length; j++) {
        if(toto-double[k]-tout[i]-tout[j]==0){ // Si on trouve une combinaison
          table.push([tout[j],tout[i],double[k]]); // On la range dans le tableau
          if(table.length==10){
            k=100;
            i=100;
            j=100;
          }
        }
      }
    }
  }

  // On ecrit les combinaisons sur les boutons
  var button = document.getElementById("button1");
  button.innerText = table[0][0]+" puis "+table[0][1]+" puis double "+table[0][2]/2;
  var button = document.getElementById("button2");
  button.innerText = table[1][0]+" puis "+table[1][1]+" puis double "+table[1][2]/2;
  var button = document.getElementById("button3");
  button.innerText = table[2][0]+" puis "+table[2][1]+" puis double "+table[2][2]/2;
  var button = document.getElementById("button4");
  button.innerText = table[3][0]+" puis "+table[3][1]+" puis double "+table[3][2]/2;
}

// Cherche l'indice de value dans array
function look_for(array,value){
  for (var i = 0; i < array.length; i++) {
    if(array[i]==value)return i;
  }
}

//draw a cross at x y
function cross(x,y,size){
  strokeWeight(4);
  line(x-size,y+size,x+size,y-size);
  line(x-size,y-size,x+size,y+size);
}

// affiche la cible :
function show_target(){
  strokeWeight(1);
  background(255);
  noFill()
  stroke(0);

  ellipse(width/2,height/2,taille,taille);
  ellipse(width/2,height/2,taille-pas,taille-pas);
  ellipse(width/2,height/2,taille/2-pas/2,taille/2-pas/2);
  ellipse(width/2,height/2,taille/2-pas/2+pas,taille/2-pas/2+pas);

  for (var i = 0; i < 20; i++) {
    line(width/2,height/2,width/2+taille/2*cos(TWO_PI/40+i*TWO_PI/20),height/2+taille/2*sin(TWO_PI/40+i*TWO_PI/20));
    fill(0);
    text(table_cible[i],width/2+taille/3*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/3*sin(TWO_PI/10+i*TWO_PI/20));
  }

  fill(255);
  ellipse(width/2,height/2,pas*2,pas*2);
  ellipse(width/2,height/2,pas/2,pas/2);
}

function draw() {
}
