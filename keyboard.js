window.onkeydown = function (e) {
	var code = e.keyCode ? e.keyCode : e.which;
	if (code === 38) { //up key
		currentGame.up();
	} else if (code === 40) { //down key
		currentGame.down();
	} else if (code === 37) { //left
		leftDown = true;
		currentGame.left();
	} else if (code === 39) { //right
		rightDown = true;
		currentGame.right();
	} else if (code === 32) { //space
		play_airhorn();
	}
};
window.onkeyup = function (e) {
	var code = e.keyCode ? e.keyCode : e.which;
	if (code === 37 || code === 39) { //up key
		if(code === 37){
			leftDown = false;
			if(rightDown){
				currentGame.right();
				return;
			};
		} else if (code === 39) {
			rightDown = false;
			if(leftDown){
				currentGame.left();
				return;
			}
		}
		currentGame.center();
	}
};
$('.maincanvas').on("touchstart mousedown", function(e){
	console.log(e);
	e.preventDefault();
	var pointer = getPointerEvent(e);
	if(pointer.pageX < $(document).width()/2){
		currentGame.left();
		leftDown = true;
		rightDown = false;
	} else {
		currentGame.right();
		leftDown = false;
		rightDown = true;
	}
});
$('.maincanvas').on("touchend mouseup touchcancel", function(e){
	e.preventDefault();
	leftDown = false;
	rightDown = false;
	currentGame.center();
});
$('.maincanvas').on("touchmove mousemove", function(e){
	e.preventDefault();
	var pointer = getPointerEvent(e);
	if(leftDown || rightDown){
		if(pointer.pageX < $(document).width()/2){
			currentGame.left();
			leftDown = true;
			rightDown = false;
		} else {
			currentGame.right();
			leftDown = false;
			rightDown = true;
		}
	}
});
var getPointerEvent = function(event) {
    return event.originalEvent.targetTouches ? event.originalEvent.targetTouches[0] : event;
};
var leftDown = false;
var rightDown = false;
