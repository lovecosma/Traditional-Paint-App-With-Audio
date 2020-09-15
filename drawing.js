var pallette
var eraser
var bomb
var save_X
var save_y
var erase_x
var erase_y
var clear_x
var clear_y
var tipColor = [0,0,0]
var slider
var not_adjusting_slider = true
var line_thickness = 5
var cnv

function preload(){
  eraser = loadImage("src/eraser.png");
  bomb = loadImage("src/bomb.png");
  floppy = loadImage("src/savebutton.png");
}

function setup(){

  background(255);
  cnv = createCanvas(windowWidth, windowHeight);
  pallette = new Pallette()
  imageMode('center')
  save_x = windowWidth-30
  save_y = windowHeight-30
  erase_x = 40
  erase_y = 13
  clear_x = 30
  clear_y = windowHeight-30
  image(eraser, erase_x, erase_y, 25, 25)
  image(bomb, clear_x, clear_y, 35, 35);
  image(floppy, save_x, save_y, 35, 35);
}


function draw(){
  pallette.display()
  stroke(tipColor[0], tipColor[1], tipColor[2])
  strokeWeight(line_thickness)
  if(mouseIsPressed && not_adjusting_slider){
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

function mouseClicked(){

  let distance_from_save = dist(save_x, save_y, mouseX, mouseY)
  let distance_from_clear = dist(clear_x, clear_y, mouseX, mouseY)
  let distance_from_eraser = dist(erase_x, erase_y, mouseX, mouseY)

  if(distance_from_save < 5){
    save("your_new_picture.jpg")
  }
  if(distance_from_clear < 5){
    debugger
  }
}




function setColor(){
  tipColor = this
}
