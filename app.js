(function() {
	"use strict";
	var readout = document.getElementById("readout");
	function update() {
		if (typeof TiltProvider !== 'undefined' && !!TiltProvider) {
			readout.innerHTML = "coodrinates: " + TiltProvider.getTiltX() + " : " + TiltProvider.getTiltY();
		}
		requestAnimationFrame(update);
	}
	update();
}());
