class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 400
               }
    
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(myWorld, this.rope);
    }
    // attach(body){
    //     this.sling.bodyA = body;
    // }
    
    // fly(){
    //     this.sling.bodyA = null;
    // }

    display(){
        
       var pointA=this.rope.bodyA.position;
       var pointB= this.pointB
       push();
       stroke("purple")
       strokeWeight(3)
       line(pointA.x,pointA.y,pointB.x,pointB.y)
       pop();
    
    }
}