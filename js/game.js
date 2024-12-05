class Game{
   constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ratio = this.height / this.baseHeight;
    this.Player = new Player(this);

    this.rezise(window.innerWidth, window.innerHeight);

    window.addEventListener('resize', e => {
        this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
    });
}
    resize(width, height)  {
    this.canvas.width = width;
    this.canvas.height = height;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ctx.fillstyle ='#5995F2'
    this.ratio = this.height / this.baseheight;
    console.log(this.height, this.baseheight, this.ratio);

    this.Player.resize();
    console.log(this.height, this.baseheight, this.ratio);
   }

render() {
    //this.ctx.fillStyle = 'red';
    this.Player.update();
    this.Player.draw();
}
}

window.addEventListener('load', function() {
    const canvas = document.getElementById('game-layout');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 720;

    const game = new Game(canvas, ctx)
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render();
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});
