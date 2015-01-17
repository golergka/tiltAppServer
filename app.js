(function() {
	"use strict";
	var readout = document.getElementById("readout");
	var circle = document.getElementById("circle");
	var button = document.getElementById("start");
	function update() {
		if (typeof OrientationProvider !== 'undefined' && !!OrientationProvider) {
			var orientation = JSON.parse(OrientationProvider.getOrientation());
			readout.innerHTML = "coordinations: " + orientation[0].toFixed(2) + ", " + orientation[1].toFixed(2);
			var l = (-orientation[0] + 10) / 20;
			var t = (orientation[1] + 10) / 20;
			circle.style.left = 100 * l + "%";
			circle.style.top = 100 * t + "%";
		}
		requestAnimationFrame(update);
	}
	button.onclick = function() {
		button.parentElement.removeChild(button);
		update();
	};
}());
