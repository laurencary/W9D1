console.log("Webpack is working!");

import MovingObject from "./moving_object.js";
// import Asteroid from "./asteroid.js";
import Game from './game.js';
import GameView from "./game_view.js";
window.Game = Game;
window.GameView = GameView;
window.MovingObject = MovingObject;
// window.Asteroid = Asteroid;

document.addEventListener('DOMContentLoaded',function(){
    const canvasEl = document.getElementById("game-canvas");
    const game = new GameView();

    canvasEl.width = Game.DIM_X;
    canvasEl.height = Game.DIM_Y;

    const ctx = canvasEl.getContext("2d");
    console.log(ctx);
    // ctx.fillStyle = "black";
    // ctx.fillRect(0,0,500,500);
    
    game.start(ctx);

    // ctx.fillStyle = "limegreen";
    // ctx.fillRect(0,0,300,300);
    // console.log(ctx)
    
    // const mo = new MovingObject(
    //     [30, 30],
    //     [10, 10],
    //     5,
    //     "black"
    //   );
    
    // mo.draw(ctx);
    // mo.move();
    // mo.draw(ctx);
    
    // // mo.move();
    // const a = new Asteroid([100,100]);
    // a.draw(ctx);
    // a.move();
    // a.draw(ctx);

})