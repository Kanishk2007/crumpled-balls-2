class Dustbin {
   constructor(x,y,width,height){
   var options = {    
   isStatic:true
   }
   this.body=Bodies.rectangle(x,y,width,height,options);
   this.body.loadImage=("dustbingreen.png");
    
   this.width=width;
   this.height=height;

   World.add(world, this.body);
   }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    stroke=0;
    rectMode(CENTER);
    fill(255,255,255);
    rect(this.body.position.x, this.body.position.y,this.width, this.height);
  }



}