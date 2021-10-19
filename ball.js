class Ball{
    constructor(x,y,radius){
      this.x=x;
      this.y=y;
      this.radius=radius;
      var options={restitution:0.9,friction:0.5};
    this.body=Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
   }
   display(){
     var pos=this.body.position;
     ellipseMode(RADIUS);
     ellipse(pos.x,pos.y,this.radius,this.radius);
   }
  }