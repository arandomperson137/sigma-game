class obstacle {
constructor(Game, x) {
this.game = this.game;
this.spriteWidth = 110;
this.spriteHeight = 150;
this.scaledWidth = this.spriteWidth * this.game.ratio;
this.scaledHeight = this.spriteHeight * this.game.ratio;
this.x = x;
this.y = this.game.height * 0.5 - this.scaledHeight;
}

update() {
    this.x -= this.game.speed;
}

draw() {
    this.game.ctx.fillRect(this.x, this.y, this.scaledWidth, this.scaledHeight);
}

resize() {
    this.scaledHeight = this.spriteHeight * this.game.ratio;
    this.scaledWidth = this.spriteWidth * this.game.ratio;
}
}
