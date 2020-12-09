class Particle{
    constructor(x,y,r){
        var options={
            
            restitution:1,
           
        }
       
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        this.color=color(random(50,100,130),random(127,70,82),random(140,120,87))
        World.add(wotld,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle

        push();
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop();
    }
}