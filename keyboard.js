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
var leftDown = false;
var rightDown = false;
