import MovingObject from "./moving_object.js";
import * as Util from "./util.js";

class Asteroid extends MovingObject {
    static COLOR = 'limegreen';
    static RADIUS = 25;

    constructor (pos) {
        const vel = Util.randomVec(1);
        super(pos, vel, Asteroid.RADIUS, Asteroid.COLOR);
    }
}

export default Asteroid;