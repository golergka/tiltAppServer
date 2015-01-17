(function() {
	"use strict";
	var readout = document.getElementById("readout");
	var circle = document.getElementById("circle");
	function update() {
		if (typeof OrientationProvider !== 'undefined' && !!OrientationProvider) {
			var orientationString = OrientationProvider.getOrientation();
			readout.innerHTML = "acceleration: " + orientationString;
			var orientation = eval(orientationString);
			var l = (-orientation[0] + 10) / 20;
			var t = (orientation[1] + 10) / 20;
			circle.style.left = 100 * l + "%";
			circle.style.top = 100 * t + "%";
			document.getElementById("debug").innerHTML = "l: " + l + " t: " + t + " circle.style.left: " + circle.style.left + " circle.style.top: " + circle.style.top;
		}
		requestAnimationFrame(update);
	}
	update();
}());
