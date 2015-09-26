var canvasSize;
var setupCanvas = function() {
	var ww = $(window).width();
	var wh = $(window).height();

	var canvas = $(".maincanvas")
	var size = Math.min(ww,wh);
	canvasSize = size;
	canvas.width(size);
	canvas.height(size);
	canvas.css({top: (($(window).height()-size)/2), left: (($(window).width()-size)/2)});
}
setupCanvas();
