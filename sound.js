var airhorn_sound = new Audio('./assets/airhorn.mp3')
function play_airhorn(){
	airhorn_sound.cloneNode().play();
	navigator.vibrate=navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
	navigator.vibrate(600);
}
var song = new Audio('./assets/illuminati.mp3');
function loop_music(){
	song.loop = true;
	song.play();
}
function end_music(){
	song.pause();
}
