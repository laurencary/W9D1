import Asteroid from "./asteroid";

class Game{
    static DIM_X=500;
    static DIM_Y=500;
    static NUM_ASTEROIDS=100;

    addAsteroids(){
        this.asteroids = [];
        while(this.asteroids.length < Game.NUM_ASTEROIDS){
            const pos = this.randomPosition();
            this.asteroids.push(new Asteroid(pos, this));
        }
    }
    randomPosition(){
        const x = Math.floor(Math.random()*500);
        const y = Math.floor(Math.random()*500);
        return [x,y];
    }
    draw(ctx){
        ctx.clearRect(0,0,500,500);
        for(let asteroid of this.asteroids){
            asteroid.draw(ctx);
        }
    }
    moveObjects(){
        for(let asteroid of this.asteroids){
            asteroid.move();
        }
    }
    wrap(pos){
        // take in pos and reset to be in the canvas
        for (let i = 0; i < pos.length; i++) {
            if (pos[i] < 0) {
                pos[i] = Game.DIM_X + Asteroid.RADIUS
            } else if (pos[i] > Game.DIM_X ) {
                pos[i] = 0 - Asteroid.RADIUS
            }   
            
        }
        return pos;
    }
}



export default Game;