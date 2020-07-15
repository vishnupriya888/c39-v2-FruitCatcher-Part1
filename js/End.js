class End {
    constructor() {
        this.final = createElement('h2');
    }
    display() {
        this.final.html("GAME ENDED");
        this.final.position(displayWidth / 2 - 500, displayHeight / 2 - 300);
        this.final.style('font-size', '100px');
        this.final.style('color', 'skyblue');
    }
}