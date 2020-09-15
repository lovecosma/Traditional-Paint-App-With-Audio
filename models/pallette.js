class Pallette {
  constructor() {
    this.colors = []

    //Set pallette colors and listen for clicks on them

    this.black = new Color(0, 0, 25, 25, 0, 0, 0)
    this.colors.push(this.black)
    // this.white = new Color(25, 0, 25, 25, 255, 255, 255)
    // this.colors.push(this.white)
    this.dark_gray = new Color(0, 25, 25, 25, 127, 127, 127)
    this.colors.push(this.dark_gray)
    this.light_gray = new Color(25, 25, 25, 25, 195, 195, 195)
    this.colors.push(this.light_gray)
    this.burgundy = new Color(0, 50, 25, 25, 136, 0, 21)
    this.colors.push(this.burgundy)
    this.brown = new Color(25, 50, 25, 25, 185, 122, 87)
    this.colors.push(this.brown)
    this.red = new Color(0, 75, 25, 25, 255, 0, 0)
    this.colors.push(this.red)
    this.pink = new Color(25, 75, 25, 25, 255, 174, 201)
    this.colors.push(this.pink)
    this.orange = new Color(0, 100, 25, 25, 255, 127, 36)
    this.colors.push(this.orange)
    this.gold = new Color(25, 100, 25, 25, 255, 201, 14)
    this.colors.push(this.gold)
    this.yellow = new Color(0, 125, 25, 25, 255, 255, 0)
    this.colors.push(this.yellow)
    this.tan = new Color(25, 125, 25, 25, 239, 228, 176)
    this.colors.push(this.tan)
    this.green = new Color(0, 150, 25, 25, 34, 177, 76)
    this.colors.push(this.green)
    this.light_green = new Color(25, 150, 25, 25, 181, 230, 29)
    this.colors.push(this.light_green)
    this.blue = new Color(0, 175, 25, 25, 0, 162, 232)
    this.colors.push(this.blue)
    this.light_blue = new Color(25, 175, 25, 25, 153, 217, 234)
    this.colors.push(this.light_blue)
    this.indigo = new Color(0, 200, 25, 25, 63, 72, 204)
    this.colors.push(this.indigo)
    this.pale_blue = new Color(25, 200, 25, 25, 112, 146, 190)
    this.colors.push(this.pale_blue)
    this.light_purple = new Color(0, 225, 25, 25, 163, 73, 164)
    this.colors.push(this.light_purple)
    this.purple = new Color(25, 225, 25, 25, 75, 0, 130)
    this.colors.push(this.purple)

    //Create slider for stroke weight

    this.slider = createSlider(1, 25, 3, 1);
    this.slider.position(0, 260)
    this.slider.size(75, 25)

  }

  display(){

    //Display Color Selection

    this.colors.forEach((color, i) => {
      color.display()
    });

    // Line Thickness

    this.slider.mousePressed(function(e){ not_adjusting_slider = false })
    this.slider.mouseReleased(function(e){ not_adjusting_slider = true; line_thickness = e.target.value })


    //Save and clear button

    imageMode(CENTER);

    imageMode('corner')
    noStroke();

  }


}
