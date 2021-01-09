class launcher {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.004,
      length: 10,
    };

    this.bodyA = bodyA;
    this.pointB = pointB;
    this.launcher = Matter.Constraint.create(options);
    World.add(world, this.launcher);
  }
  display() {
    if (this.launcher.bodyA) {
      var pointA = this.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(2);
      line(pointA.x + 20, pointA.y + 20, pointB.x, pointB.y);
    }
  }
  attach(body) {
    this.launcher.bodyA = body;
  }

  fly() {
    this.launcher.bodyA = null;
  }
}
