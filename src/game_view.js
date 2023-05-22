import Game from './game.js';

class GameView {
    constructor(){
        this.game = new Game();
        this.game.addAsteroids();
    }
    start(context){
        let game = this.game;
        setInterval(function(){
            game.moveObjects();
            game.draw(context);

        },20);
    }
}

export default GameView;