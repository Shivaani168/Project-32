class Link {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.01,
            length:0.5
        }
        this.pointB=pointB;
        this.link= Constraint.create(options);
        World.add(world, this.link);
    }

    fly(){
    this.link.bodyA=null
    }

    attach(body){
    this.link.bodyA=body
    }
    display(){
        if(this.link.bodyA){
        var pointA = this.link.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }  
}