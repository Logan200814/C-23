class Ball{

    constructor(x,y,r){
        
        var options = {
            restitution:1
        };
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        
        this.r = r
    }
display(){
    ellipse(this.body.position.x,this.body.position.y,this.r * 2,this.r * 2)

}


}