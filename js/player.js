class player {
    constructor(game) {
        this.game = game;
        this.x = 50;
        this.y = 60;
        this.width = 200;
        this.height = 200;
        this.speedY = 0;
    }

    draw() {
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.y += this.speedY;
        if(this.y < this.game.hright - this.height)  {
            this.speedY += this.game.gravity;

        }
        if(this.y >= this.game.height - this.height)    {
            this.y = this.game.height - this.height;
            console.log

    }
    }
    resize() {
        this.width = this.sprite.width * this.game.ratio;
        this.height = this.spriteheight * this.game.ratio;
    }
}
