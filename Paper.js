class Paper {
    constructor(x, y,radius) {
    this.body.loadImage=("paper.png");
 var options = {
  isStatic:false,
  restitution: 0.9,
  friction: 0.5,
  density: 1.2
 }
 this.body = Bodies.circle(x, y, radius,options);
    this.radius = radius;
      
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    
    rotate(angle);
    ellipseMode(RADIUS);
    
    fill(255,105,180);
    ellipse(0, 0,this.radius , this.radius);
    pop();
    
  }
};
  