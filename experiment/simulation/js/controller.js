function initializeSimulation() {
    quick_return.init();
    animate();

}
//  action will take place when windo resize
function onWindowResize() {
    console.log(Date() + " resize");
}
if (window.addEventListener) {
    window.addEventListener('load', initializeSimulation, false);
    //    window.addEventListener('resize', onWindowResize, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initializeSimulation);
} else {
    window.onload = initializeSimulation;
}

function sliderChange() {
    // var t1 = document.getElementById("th1").value;
    var l2 = 280;
    var l1 = 820;
    // document.getElementById("output").value = v;
    var sliderVal = document.getElementById("slider1").value;
    document.getElementById("rangeValue1").value = sliderVal;
    Cylinder2.rotation.y = -0.24 * Math.sin(sliderVal * (Math.PI / 180));
    th1 = sliderVal * (Math.PI / 180);
    Cylinder1.rotation.y = th1;
    s = Math.sqrt(Math.pow(l1, 2) + Math.pow(l2, 2) + 2 * l1 * l2 * Math.sin(th1));
    //alert(s)
    link4mesh.position.x = s - 860;
    //Cylinder5.position.x = -sliderVal / 7;
//    if (sliderVal < 90) {
//        //link4mesh.position.x = 3.5 * sliderVal;
//         link4mesh.translateX(10);
//    }
//    else if (sliderVal > 90 && sliderVal < 180) {
//        //link4mesh.position.x = (3.5 * sliderVal-180);
//         link4mesh.translateX(-10);
//    }
//    else if (sliderVal > 180 && sliderVal < 270) {
//        //link4mesh.position.x = -3.5 * sliderVal;
//        link4mesh.translateX(-10);
//    }
//   else if (sliderVal > 270 && sliderVal < 360) {
//        //link4mesh.position.x = 3.5 * sliderVal;
//        link4mesh.translateX(10);
//    }

    render();

}
//var clock;  // Keeps track of elapsed time of animation.
//
//var animating = false;
//
//function doFrame() {  
//	if (animating) {
//        clock.frameNumber++;
//	    updateForFrame();
//	    render();
//		requestAnimationFrame(doFrame); 
//	}
//}
//
//function startAnimation() {
//    if (!animating) {
//	   if (!clock) {
//		  clock = new THREE.Clock(false);
//		  clock.frameNumber = 0;
//		  clock.getFrameNumber = function() { return this.frameNumber }
//	   }
//	   clock.start();
//	   animating = true;
//	   requestAnimationFrame(doFrame);
//	}
//}
//
//function pauseAnimation() {
//	if (animating) {
//	    clock.stop();
//	    animating = false;
//	}
//}
//
//function doAnimationCheckbox() {
//    if ( document.getElementById("animationCheckbox").checked )
//    	startAnimation();
//    else
//    	pauseAnimation();
//}
