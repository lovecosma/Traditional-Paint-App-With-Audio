class Button {
  constructor(img, x, y, l, w) {
    this.image = img
    this.x = x
    this.y = y
    this.l = l
    this.w = w
  }

  display(fx){
    imageMode('corner')
    this.image.position(this.x, this.y)
    this.image.size(this.l, this.w)
  }

  action(fx){
    this.image.mouseClicked(fx)
  }
}
