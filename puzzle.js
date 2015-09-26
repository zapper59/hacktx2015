/*var ww = $(window).width();
var wh = $(window).height();
$(".maincanvas").width(Math.min(ww,wh));
$(".maincanvas").height(Math.min(ww,wh));*/

//Model
var x = 0;
var y = 0;
speed = 5;

//Control
window.onkeydown = function (e) {
	var code = e.keyCode ? e.keyCode : e.which;
	if (code === 38) { //up key
		document.title = ("up")
		y -= speed;
	} 
	else if (code === 40) { //down key
		document.title = ("down")
		y += speed;
	}
	else if (code === 39) {
		document.title = ("right")
		x += speed;
	}
	else if (code === 37) {
		document.title = ("left")
		x -= speed;
	}
};

//View
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cWidth = ctx.canvas.clientWidth;
var cHeight = ctx.canvas.clientHeight;
var background;

function draw() {
	if (background != null) {
		ctx.putImageData(background,0,0);
	}
	
	ctx.fillStyle = "rgb(200,0,0)";
	ctx.fillRect(x, y, 50, 50);
}

//Draw Main Assets
var bg = new Image();
bg.onload = function(){
	ctx.drawImage(bg,0,0);
	
	var tile = new Image();
	tile.onload = function(){
		for (var row = 0; row < 8; row++) {
			for (var col = 0; col < 8; col++) {
				ctx.drawImage(tile,col*100,row*88);
			}
		}
		
		background = ctx.getImageData(0,0,cWidth,cHeight)
		setInterval(draw, 50);
		
	}
	tile.src = 'tile.png';
	
};
bg.src = 'puzzlebg.jpg';	




//Redraw Canvas Forever


var audio = new Audio('illuminati.mp3');
audio.play();
