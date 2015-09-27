Util = function(){}
Util.collides = function(x1, y1, w1, h1, x2, y2, w2, h2) {
	if(x1<x2+w2 && x1+w1>x2 && y1<y2+h2 && h1+y1>y2) {
		return true;
	}
	return false;
}
Util.rectCollides = function(r1, r2) {
	return this.collides(r1["x"],r1["y"],r1["w"],r1["h"],r2["x"],r2["y"],r2["w"],r2["h"]);
}
