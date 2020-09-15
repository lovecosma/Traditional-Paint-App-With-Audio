var pallette
var eraser
var bomb
var floppy
var save_sfx
var tipColor = [0, 0, 0]
const menu = []
var slider
var not_using_menu = true
var line_thickness = 5
var cnv

//Preloading images so that they are available when needed.

function preload(){
  eraser = createImg("src/eraser.png")
  bomb = createImg("src/bomb.png")
  floppy = createImg("src/savebutton.png")
  save_sfx = new Tone.Buffer("src/saver.wav")
}

function setup(){
  cnv = createCanvas(windowWidth, windowHeight);
  background(255);
  pallette = new Pallette()
  save_button = new Button(floppy, windowWidth-25, windowHeight-25, 25, 25)
  eraser_button = new Button(eraser, 25, 0, 25, 25)
  bomb_button = new Button(bomb, 0, windowHeight-30, 30, 30)
  menu.push(save_button, eraser_button, bomb_button)
  save_button.action(function(){ save(cnv, "my_awesome_image.jpg") })
  eraser_button.action(function(){ setColor([255, 255, 255])})
  bomb_button.action(function(){ clear()})
}

function setColor(e){
  e ? tipColor = e : tipColor = this
}

function erase(){
  let white = [255, 255, 255]
  setColor(white)
}

function draw(){

  pallette.display()
  save_button.display()
  eraser_button.display()
  bomb_button.display()

  // Draw action with variable size and color

  stroke(tipColor[0], tipColor[1], tipColor[2])
  strokeWeight(line_thickness)
  if(mouseIsPressed && not_using_menu){
    line(mouseX, mouseY, pmouseX, pmouseY)
  }

}
