import Object from "./Object.js";
import Obstacle from "./Obstacle.js";

export default class Game {
    constructor(id) {
        this.id = id;
    }

    buildTheGamePage = () => {
        document.getElementById(this.id).innerHTML = '<div id="gameBox"></div>';
        this.play();
    }

    play = () => {
        let gameBoxHTML = document.getElementById('gameBox');
        let myObject = new Object('flappyThing');
        gameBoxHTML.innerHTML += myObject.generateObject();
        myObject.fallObjectfall();
        document.onkeydown = () => { myObject.jumpObjectJump() };

        let number = 0;
        const interval = () => {
            setInterval(() => {
                //this if statement is just whilst I test, maybe you can up this to 20 for the actual game???
                if (number < 5) {
                    number += 1;
                    let myObstacle = new Obstacle(`${number}`);
                    gameBoxHTML.innerHTML += myObstacle.generateObstacle();
                    myObstacle.buildObstacle();
                    myObstacle.moveObstaclemove();
                } else {
                    clearInterval(interval);
                }
            }, 3000);
        }
        interval();
    }
}