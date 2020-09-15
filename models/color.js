class Color {
  constructor(x, y, w, l, r, g, b) {
    this.rgb = [r, g, b]
    this.self = () => uxRect(x, y, l, w);
    this.listen_for_click()
  }

  listen_for_click(){
    this.self().uxEvent('click', setColor.bind(this.rgb))
  }

  display(){
    noStroke();
    uxFill(this.rgb[0], this.rgb[1], this.rgb[2]);
    this.self()
  }

}
