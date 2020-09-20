(function(mod) {
	mod.changeSpeed = function(speed) {
		this.interval = parseInt(speed);
        // return 'this' so method can be chained
		return this;
	};
	mod.displaySlides = function() {


		var slides = this.images.map(function(current) {

			var pieces = current.src.split("/");
           // return last array element
			return pieces[pieces.length - 1];

		});

		return slides.join(", ");

	};

})(myapp.slideshow); 
// invoke IIFE;