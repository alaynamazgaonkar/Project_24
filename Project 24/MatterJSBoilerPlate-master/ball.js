class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':0.2,
          'isStatic':true
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 30;
      //this.height = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("white");
      ellipse(0, 0, this.width*2, this.height*2);
      pop();
    }
  };