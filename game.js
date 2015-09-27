Game = function() {
	this.speed = 1;
	this.playerx = .4;
	this.playery = .5;
	this.disppx = .4;
	this.disppy = .8;
	this.smooth = .27;
	this.playerw = this.playerh = .2;
	this.ctx = $(".maincanvas")[0].getContext("2d");
	this.ctx.font = "48px serif";
	this.interval;
	this.doge = new Image();
	this.doge.src = "./assets/doge.png"
	this.triangle = new Image();
	this.triangle.src = "./assets/triangle.png";
	loop_music();
	this.enemies = [];
	this.enemiesSize = .1;
	this.enemies.push({x:.2, y:.4, w:this.enemiesSize, h:this.enemiesSize});
	this.numenemies = 10;
	this.score = 0;
	this.sidebarloc = .01;
	this.unpause();
}
Game.prototype.draw = function() {
	this.run();
	this.ctx.fillStyle = "#cccccc";
	this.ctx.fillRect(0,0,canvasSize,canvasSize);
	this.ctx.fillStyle = "#aaaaaa";
	this.sidebarloc += this.sidebarloc/40;
	if(this.sidebarloc>.011)this.sidebarloc=.01;
	for(var p = this.sidebarloc; p<.3; p+=(p/10)){
		//console.log(p + " " + canvasSize + " " + s*.1);
		this.ctx.fillRect(0,canvasSize*(p*5-.05),canvasSize, canvasSize*p*.02);
	}
	
	for(var i in this.enemies) {
		var y = this.enemies[i]["y"]*10+1;
		y = y*y/100;
		y = this.enemies[i]["y"];
		var w = this.enemies[i]["w"]*canvasSize;
		var wn = w * (y+.2);
		//console.log(y+" "+wn+" "+(canvasSize*this.enemies[i]["x"]+(w-wn)/2));
		this.ctx.drawImage(this.triangle, canvasSize*this.enemies[i]["x"]+(w-wn)/2, canvasSize*y, wn, wn);
	}

	this.ctx.drawImage(this.doge, canvasSize*this.disppx, canvasSize*this.disppy, canvasSize*(this.playerw), canvasSize*(this.playerh));
	this.ctx.fillStyle = "black";
	this.ctx.fillText("Score: "+this.score,10,50);
}
Game.prototype.up = function() {
	this.playery -= this.speed;
	this.playery = Math.max(this.playery, 0);
}
Game.prototype.down = function() {
	this.playery += this.speed;
	this.playery = Math.min(this.playery, 1-this.playerh);
}
Game.prototype.right = function() {
	this.playerx += this.speed;
	this.playerx = Math.min(this.playerx, .75-this.playerw/2);
}
Game.prototype.left = function() {
	this.playerx -= this.speed;
	this.playerx = Math.max(this.playerx, .25-this.playerw/2);
}
Game.prototype.center = function() {
	this.playerx = .5-this.playerw/2;
}
Game.prototype.run = function() {
	this.disppx -= this.smooth * (this.disppx - this.playerx);
	for(var i=this.enemies.length-1;i>=0;i--) {
		var e = this.enemies[i];
		e["y"]+=(this.enemiesSize+e["y"]+.01)*.05+(this.score/5000000);
		if(Util.rectCollides(e,{x:this.disppx+this.playerw*.1,y:this.disppy+this.playerh*.2,w:this.playerw*.8,h:this.playerh*.5})){
			this.pause();
			play_airhorn();
			Window.shakeCanvas(3500);
			setTimeout(function(){
				play_airhorn();
				setTimeout(function(){
					play_airhorn();
					setTimeout(function(){
						play_airhorn();
						setTimeout(function(){
							currentGame = new Game();
						},3000);
					},300)
				},300);
			},1200)
		}
		if(e["y"]>1){
			this.enemies.splice(i,1);
			this.score+=1000;
		}
	}
	if((this.enemies.length==0 || this.enemies[this.enemies.length-1]["y"]>.05 ) && this.enemies.length<this.numenemies && Math.random()<.1 * (1-this.enemies.length/this.numenemies)){
		var x = (Math.floor(Math.random()*3))*.25+.25-this.enemiesSize/2;
		if(this.enemies.length==0 || !(Math.abs(this.enemies[this.enemies.length-1]["x"]-x)==.25 && this.enemies[this.enemies.length-1]["y"]<this.playerh*2)) {
			this.enemies.push({x: x, y:-this.enemiesSize, w:this.enemiesSize, h: this.enemiesSize});
		}
	}
}
Game.prototype.pause = function() {
	clearInterval(this.interval);
}
Game.prototype.unpause = function() {
	this.interval = setInterval(function(){currentGame.draw();},20);
}

play_airhorn();
var currentGame = new Game();
