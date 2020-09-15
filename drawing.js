var pallette
var eraser
var bomb
var floppy
var tipColor = [0, 0, 0]
var slider
var not_adjusting_slider = true
var line_thickness = 5
var cnv

//Preloading images so that they are available when needed.

function preload(){
  eraser = createImg("src/eraser.png")
  bomb = createImg("src/bomb.png")
  floppy = createImg("src/savebutton.png")
}

function setup(){
  cnv = createCanvas(windowWidth, windowHeight);
  background(255);
  pallette = new Pallette()

  //Display Menu buttons. Give functionality. Eraser makes stroke white to simulate eraser.

  imageMode('corner')
  eraser.position(25, 0)
  eraser.size(25, 25)
  eraser.mousePressed(setColor.bind([255,255,255]))

  //Bomb clears screen

  bomb.position(0, windowHeight-30)
  bomb.size(30, 30)
  bomb.mousePressed(clear)

  //Floppy saves canvas

  floppy.position(windowWidth-25, windowHeight-25)
  floppy.size(25, 25)
  floppy.mousePressed(saveScreen)
}

function saveScreen(){
  save(cnv, "my_new_image.jpg")
}

function draw(){
  pallette.display()

  // Draw action with variable size and color

  stroke(tipColor[0], tipColor[1], tipColor[2])
  strokeWeight(line_thickness)
  if(mouseIsPressed && not_adjusting_slider){
    line(mouseX, mouseY, pmouseX, pmouseY)
  }

}

//Set color of stroke

function setColor(){
  tipColor = this
}
