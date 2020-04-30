export default class Obstacle {
    constructor(obstacleID){
        this.obstacleID = obstacleID;
        this.height = this.setObstacleHeight;
        this.width = 100;
        this.obstacleRight = -80;
    }

    setObstacleHeight = () => {
        let randomIndex = Math.ceil(Math.random() * 4)
        return 100 * randomIndex;
    }

    randomColourGenerator = () => {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        return `${red},${green},${blue}`;
    }

    generateObstacle = () => {
        return `<div class="obstacle" id="obstacle-${this.obstacleID}"></div>`;
    }

    buildObstacle = () => {
        let obstacle = document.getElementById(`obstacle-${this.obstacleID}`);
        obstacle.style.height = this.height();
        obstacle.style.width = this.width;
        obstacle.style.backgroundColor = `rgb(${this.randomColourGenerator()})`;
    }

    moveObstaclemove = () => {
        const intervals = setInterval(() => {
            if (this.obstacleRight < 750) {
                this.obstacleRight += 10;
                document.getElementById(`obstacle-${this.obstacleID}`).style.right = this.obstacleRight;
            }
        }, 200);
        return intervals;
    }
}