var ancho = window.innerWidth;
var altura = window.innerHeight;
	$(window).load(function() {
	resizeBg()
	})

$(window).resize(resizeBg)

  	function resizeBg() {
  			var ancho = window.innerWidth;
			var altura = window.innerHeight;
			var h1_height = document.querySelector("h1").offsetHeight;
	    	var timeline= document.getElementsByClassName('content')[0];
	    		timeline.style.position = "absolute";
	  		    timeline.style.top = parseInt(48 + h1_height) + 'px';

	 }