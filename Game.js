import Object from "./Object.js";
import Obstacle from "./Obstacle.js";

export default class Game {
    constructor(id) {
        this.id = id;
    }

    buildTheGamePage = () => {
        document.getElementById(this.id).innerHTML = '<div id="gameBox"></div>';
    }

    play = () => {
        let gameBoxHTML = document.getElementById('gameBox');
        let myObject = new Object('flappyThing');
        gameBoxHTML.innerHTML += myObject.generateObject();
        myObject.fallObjectfall();
        document.onkeydown = () => {
            if (event.which === 32) {
                myObject.jumpObjectJump();
            }
        }
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
                    // console.log(myObstacle.height());
                    // console.log(myObstacle.obstacleRight);
                    this.hasCollided(myObject);
                } else {
                    clearInterval(interval);
                }
            }, 1000);
        }
        interval();
        this.hasCollided(myObject);
        //call the collision detection here, to stop intervals on true
    }

    hasCollided = (obj) => {
        let objectBottom = obj.objectTop + obj.objectHeight;
        console.log(obj.objectTop);
        console.log(objectBottom);
    }

}