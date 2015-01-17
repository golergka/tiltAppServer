(function() {
	"use strict";
	var readout = document.getElementById("readout");
	var circle = document.getElementById("circle");
	function update() {
		if (typeof OrientationProvider !== 'undefined' && !!OrientationProvider) {
			var orientationString = OrientationProvider.getOrientation();
			readout.innerHTML = "coodrinates: " + orientationString;
			var orientation = eval(orientationString);
			var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			var r = circle.style.borderRadius;
			var l = (orientation[0] + 10) / 20;
			var t = (orientation[1] + 10) / 20;
			circle.style.left = (r + orientation[0] * (w - 2*r)) + "px";
			circle.style.top = (r + orientation[1] * (h - 2*r)) + "px";
		}
		requestAnimationFrame(update);
	}
	update();
}());
