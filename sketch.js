var eraser;
var bomb;
var floppy;
var distance;
var distance2;
var value2 = 255;
function preload(){
  let eraser = loadImage("eraser.png");
  let bomb = loadImage("bomb.png");
  let floppy = loadImage("savebutton.png");
}

Tone.Buffer.on('load', function(){
  console.log("done")  //all buffers are loaded.
})
var player2;
var loopHigh = 2;
var argOver = 3;
var argDrift = 2;
var grainHigh = 3;
var player;
var play;
var grain;
var loopX;
var loopY;
var over;
var drift;
var tune;
var x;
var y;
var state;
var value = 0;
var tip = 1;
var crusher = new Tone.BitCrusher(4).toMaster();
var player3;
let pallette
function setup(){
  let pallette = new Pallette
  let player = new Tone.GrainPlayer({
    "url" : buffer,
    "overlap" : 0.1,
    "grainSize" : 0.2,
    "drift" : 0,
    "playbackRate" : 1,
    "detune" : 2100,
    "loop" : true,
    "loopStart" : 0,
    "loopEnd" : 1,
    "reverse" : false,
  }).toMaster();
  player2 = new Tone.Player("Kick.wav").connect(crusher).toMaster();
  player3 = new Tone.Player("saver.wav").toMaster();
background(255);
createCanvas(windowWidth, windowHeight);
}
function draw() {

pallette.display()


//Draw

if(mouseIsPressed == true){

  line(mouseX, mouseY, pmouseX, pmouseY);

  if(tip == 1){
    tune = map(mouseY, 0, windowHeight, 2000, 2500);
    player.detune = tune;
  }

  if(tip == 2){
    tune = map(mouseY, 0, windowHeight, 1500, 2000);
    player.detune = tune;
  }

  if(tip == 3){
    tune = map(mouseY, 0, windowHeight, 1000, 1500);
    player.detune = tune;
  }

  if(tip == 4){
    tune = map(mouseY, 0, windowHeight, 500, 1000);
    player.detune = tune;
  }
  if(tip == 5){
    tune = map(mouseY, 0, windowHeight, 0, 500);
    player.detune = tune;
  }
}
x = mouseX/900;
y = mouseY/900;
play = map(mouseX, 0, windowWidth, 0.5, 5);
grain = map(mouseY, 0, windowHeight, 0.1, grainHigh);
loopX = map(mouseX, 0, windowWidth, 0.1, loopHigh/2);
loopY = map(mouseY, 0, windowHeight, loopHigh/1.8, loopHigh);
over = map(mouseX, 0, windowWidth, 0.1, argOver);
player.playbackRate = play;
player.loopStart = loopX;
player.loopEnd = loopY;
}
function mouseClicked(){

  if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 0 && mouseY <= 25)){
    value = color(0, 0, 0);
    value2 = 255;
    // player.buffer = buffer;
  }

  // if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 0 && mouseY <= 25)){
  //   value = color(255, 255, 255);
  //   value2 = 0;
  //   player.buffer = buffer2;
  // }
  // if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 25 && mouseY <= 50)){
  //   value = color(127, 127, 127);
  //       value2 = 255;
  //   player.buffer = buffer3;
  // }
  // if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 25 && mouseY <= 50)){
  //   value = color(195, 195, 195);
  //       value2 = 255;
  //   player.buffer = buffer4;
  // }
  // if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 50 && mouseY <= 75)){
  //   value = color(136, 0, 21);
  //       value2 = 255;
  //   player.buffer = buffer5;
  // }
  // if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 50 && mouseY <= 75)){
  //   value = color(185, 122, 87);
  //       value2 = 255;
  //   player.buffer = buffer6;
  // }
  // if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 75 && mouseY <= 100)){
  //   value = color(255, 0, 0);
  //       value2 = 255;
  //   player.buffer = buffer7;
  // }
  // if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 75 && mouseY <= 100)){
  //   value = color(255, 174, 201);
  //       value2 = 255;
  //   player.buffer = buffer8;
  // }
  // if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 100 && mouseY <= 125)){
  //   value = color(255, 127, 36);
  //       value2 = 255;
  //     player.buffer = buffer9;
  // }
  // if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 100 && mouseY <= 125)){
  //   value = color(255, 201, 14);
  //       value2 = 255;
  //     player.buffer = buffer10;
  // }
  // if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 125 && mouseY <= 150)){
  //   value = color(255, 255, 0);
  //       value2 = 255;
  //     player.buffer = buffer11;
  // }
  // if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 125 && mouseY <= 150)){
  //   value = color(239, 228, 176);
  //       value2 = 255;
  //     player.buffer = buffer12;
  // }
  // if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 150 && mouseY <= 175)){
  //   value = color(34, 177, 76);
  //       value2 = 255;
  //     player.buffer = buffer13;
  // }
  // if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 150 && mouseY <= 175)){
  //   value = color(181, 230, 29);
  //       value2 = 255;
  //     player.buffer = buffer14;
  // }
  // if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 175 && mouseY <= 200)){
  //   value = color(0, 162, 232);
  //       value2 = 255;
  //     player.buffer = buffer15;
  // }
  // if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 175 && mouseY <= 200)){
  //   value = color(153, 217, 234);
  //       value2 = 255;
  //     player.buffer = buffer16;
  // }
  // if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 200 && mouseY <= 225)){
  //   value = color(63, 72, 204);
  //       value2 = 255;
  //     player.buffer = buffer17;
  // }
  // if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 200 && mouseY <= 225)){
  //   value = color(112, 146, 190);
  //       value2 = 255;
  //     player.buffer = buffer18;
  // }
  // if ((mouseX >= 0 && mouseX <= 25) && (mouseY >= 225 && mouseY <= 250)){
  //   value = color(163, 73, 164);
  //       value2 = 255;
  //     player.buffer = buffer19;
  // }
  // if ((mouseX >= 25 && mouseX <= 50) && (mouseY >= 225 && mouseY <= 250)){
  //   value = color(200, 191, 231);
  //       value2 = 255;
  //     player.buffer = buffer20;
  // }
  // if ((mouseX >= 0 && mouseX <= 50) && (mouseY >= 250 && mouseY <= 275)){
  //   tip = 1;
  // }
  // if ((mouseX >= 0 && mouseX <= 50) && (mouseY >= 275 && mouseY <= 300)){
  //   tip = 2;
  // }
  // if ((mouseX >= 0 && mouseX <= 50) && (mouseY >= 300 && mouseY <= 325)){
  //   tip = 3;
  // }
  // if ((mouseX >= 0 && mouseX <= 50) && (mouseY >= 325 && mouseY <= 350)){
  //   tip = 4;
  // }
  // if ((mouseX >= 0 && mouseX <= 50) && (mouseY >= 350 && mouseY <= 375)){
  //   tip = 5;
  // }
  // if(distance < 15){
  //   background(255);
  //   player.stop();
  //   player2.start();
  // }
  // if(distance2 < 15){
  //   save();
  //   player3.start();
  //   player.stop();
  // }
  // print(tip);
  }
