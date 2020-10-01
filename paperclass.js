class Paper{
    constructor(x, y, radius,options) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
             isStatic:false
        }
        this.body=Bodies.circle(x, y, radius, options)
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
      }
}