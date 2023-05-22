
class MovingObject{
    constructor(pos,vel,radius,color){
        //pos and vel will be [x,y]
        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
    }

    draw(ctx){
        ctx.beginPath();
        console.log(this);
        ctx.arc(this.pos[1],this.pos[0],this.radius,0,2*Math.PI, true);
        ctx.fillStyle=this.color;
        ctx.stroke();
        ctx.fill();
    }

    move(){
        this.pos = [this.pos[0]+this.vel[0],this.pos[1]+this.vel[1]];
        console.log('moved');
    }
}


export default MovingObject;