console.log("Webpack is working!");

import MovingObject from "./moving_object.js";
// import Asteroid from "./asteroid.js";
import GameView from "./game_view.js";
window.GameView = GameView;
window.MovingObject = MovingObject;
// window.Asteroid = Asteroid;

document.addEventListener('DOMContentLoaded',function(){
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 500;
    canvasEl.height = 500;
    const ctx = canvasEl.getContext("2d");
    
    const game = new GameView();
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