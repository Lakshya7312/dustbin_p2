class Paper {
    constructor(x, y){
       var options = {
           'restitution': 0.5,
           'friction': 0.1,
           'density': 1.2
       }
      this.body = Bodies.circle(x, y, 30, options);
      this.image = loadImage("paper1.png");
      World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        noStroke();
        fill(1, 248, 248);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 80, 80);
    }
}