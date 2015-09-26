Game = function() {
	this.playerx = .5;
	this.playery = .5;
	this.playerw = this.playerh = .1;
	this.ctx = $(".maincanvas")[0].getContext("2d");
	this.interval = setInterval(function(){currentGame.draw();},20);
}
Game.prototype.draw = function() {
	this.ctx.clearRect(0,0,canvasSize,canvasSize);
	this.ctx.fillStyle = "black";
	//this.ctx.fillRect(0,0,10,10);
	this.ctx.fillRect(canvasSize*this.playerx, canvasSize*this.playery, canvasSize*(this.playerx+this.playerw), canvasSize*(this.playery+this.playerh));
}
var currentGame = new Game();
