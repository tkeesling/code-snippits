function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var r = getRandomInt(0, 255);
var b = getRandomInt(0, 255);
var g = getRandomInt(0, 255);
square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
