(function() {
	"use strict";
	var readout = document.getElementById("readout");
	function update() {
		if (typeof OrientationProvider !== 'undefined' && !!OrientationProvider) {
			readout.innerHTML = "coodrinates: " + OrientationProvider.getOrientation();
		}
		requestAnimationFrame(update);
	}
	update();
}());
