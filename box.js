class Box {
    constructor(x, y, width, height) {
      var options = {
          'friction':0.5,
          'density':0.0001
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.visibility=255;
      this.height = height;
      
      World.add(world, this.body);
    }

    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++;
      }
    }

    display(){
      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      angleMode(RADIANS)
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER)
      stroke("black")
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        push();
        World.remove(world,this.body)
        this.visibility=this.visibility-20
        tint(255,this.visibility)
        pop();
      }
    }
  }