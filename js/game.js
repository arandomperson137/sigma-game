class game{
   constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context
    this.width = this.canvas.width;
    this.height = this.canvas.height;
   }

render() {
    this.ctx.fillStyle = 'red';
    this.ctxfillRect(100, 100, 50, 150);
}
}

window.addEventListener('load', function() {
    const canvas = document.getElementById('game-layout');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 720;

    const game = new game (canvas, ctx)
    game.render();
});
