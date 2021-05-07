class Box {
    constructor(x, y, width, height) {
      this.visibilty=255;
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed < 3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{push()
      World.remove(world,this.body);
      this.visibilty=this.visiblilty-5
      tint(255,this.visiblilty)
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      }
    }
  };
  