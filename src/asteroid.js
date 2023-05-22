import MovingObject from "./moving_object.js";
import * as Util from "./util.js";

class Asteroid extends MovingObject {
    static COLOR = 'white';
    static RADIUS = 25;

    constructor (pos, game) {
        console.log(game);
        const vel = Util.randomVec(1);
        super(pos, vel, Asteroid.RADIUS, Asteroid.COLOR, game);
      
    }
}

export default Asteroid;