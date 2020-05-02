import Game from "./Game.js";

const myGame = new Game('game');

myGame.buildTheGamePage();
document.onkeypress = () => {
    if(event.which === 13){
        myGame.play();
    }
}