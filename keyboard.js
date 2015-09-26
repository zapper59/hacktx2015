window.onkeydown = function (e) {
	var code = e.keyCode ? e.keyCode : e.which;
	if (code === 38) { //up key
		document.tile = ("up")
	} else if (code === 40) { //down key
		document.title = ("down")
	}
};
