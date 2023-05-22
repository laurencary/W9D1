import Asteroid from "./asteroid";

class Game{
    static DIM_X;
    static DIM_Y;
    static NUM_ASTEROIDS=1;

    addAsteroids(){
        this.asteroids = [];
        while(this.asteroids.length < Game.NUM_ASTEROIDS){
            const pos = this.randomPosition();
            this.asteroids.push(new Asteroid(pos));
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
}



export default Game;