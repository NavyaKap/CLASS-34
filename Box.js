class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:1,
            density:0.04
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
World.add(myWorld,this.body)
    }


    display(){
     var pos = this.body.position
     var angle = this.body.angle
     push()
     translate(pos.x,pos.y)
     rotate(angle)
     rectMode(CENTER)
     strokeWeight(4)
     stroke("green")
     fill(random(0,255),random(0,255),random(0,255))
     rect(0,0,this.width,this.height)
     pop()
        
    }
}