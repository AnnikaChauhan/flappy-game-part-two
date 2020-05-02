export default class Object {
    constructor(objectID) {
        this.objectID = objectID;
        this.objectTop = 100;
        this.objectHeight = 100;
        this.objectWidth = 100;
    }

    generateObject = () => {
        return '<div id="ball"></div>';
    }

    fallObjectfall = () => {
        const intervals = setInterval(() => {
            if (this.objectTop < 400) {
                this.objectTop += 5;
                document.getElementById('ball').style.top = this.objectTop;
                document.getElementById('ball').style.height = this.objectHeight;
                document.getElementById('ball').style.width = this.objectWidth;
            }
        }, 100);
        return intervals;
    }

    jumpObjectJump = () => {
        if (event.which === 32) {
            this.objectTop -= 40;
            document.getElementById('ball').style.top = this.objectTop;
        }
    }
}