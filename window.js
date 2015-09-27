var canvasSize;
var Window = function(){}
Window.setupCanvas = function() {
	var ww = $(window).width();
	var wh = $(window).height();

	var canvas = $(".maincanvas")[0];
	var size = Math.min(ww,wh);
	canvasSize = size;
	canvas.getContext("2d").canvas.width = size;
	canvas.getContext("2d").canvas.height = size;
	$(".maincanvas").css({top: (($(window).height()-size)/2), left: (($(window).width()-size)/2)});
}
Window.shakeCanvas = function(timeInMillis) {
	this.n = timeInMillis / 50;
	var recurse = function(n) {
		$(".maincanvas").css({top: (($(window).height()-canvasSize)/2)+canvasSize*.1*(Math.random()-.5), left: (($(window).width()-canvasSize)/2)+canvasSize*.1*(Math.random()-.1)})
		if(this.n>0){
			setTimeout(recurse, 50);
			this.n--;
		}
		else
			this.setupCanvas();
	}.bind(this);
	recurse();
	
}
Window.setupCanvas();