export default class Object {
    constructor(objectID) {
        this.objectID = objectID;
        this.objectTop = 100;
    }

    generateObject = () => {
        return '<div id="ball"></div>';
    }

    fallObjectfall = () => {
        const intervals = setInterval(() => {
            if (this.objectTop < 400) {
                this.objectTop += 5;
                document.getElementById('ball').style.top = this.objectTop;
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