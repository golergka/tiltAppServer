(function() {
	"use strict";
	var readout = document.getElementById("readout");
	var circle = document.getElementById("circle");
	function update() {
		if (typeof OrientationProvider !== 'undefined' && !!OrientationProvider) {
			var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			document.getElementById("screen-size").innerHTML = "width: " + w + " height: " + h;
			var orientationString = OrientationProvider.getOrientation();
			readout.innerHTML = "acceleration: " + orientationString;
			var orientation = eval(orientationString);
			var r = circle.style.borderRadius;
			var l = (-orientation[0] + 10) / 20;
			var t = (orientation[1] + 10) / 20;
			circle.style.left = l * w + "px";
			circle.style.top = t * h + "px";
			document.getElementById("debug").innerHTML = "l: " + l + " t: " + t + " circle.style.left: " + circle.style.left + " circle.style.top: " + circle.style.top;
		}
		requestAnimationFrame(update);
	}
	update();
}());
