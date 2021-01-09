class tree {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
    };

    this.image = loadImage("tree.png");

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    image(this.image, 450, 400, 300, 300);
    pop();
  }
}
