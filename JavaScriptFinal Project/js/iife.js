    $(document).ready(function() {
        // use an alias
    	var slideshow = myapp.slideshow;

    	var slides = [{
    		href: "Baahubali.jpg",
    		title: "Baahubali 2"
    	}, {
    		href: "Dangal.jpg",
    		title: "Dangal"
    	}, {
    		href: "PK2.jpg",
    		title: "PK!"
    	}, {
    		href: "Bajrangi.jpg",
    		title: "Bajrangi Bhaijaan"
    	}];


    	$("#play_pause").click(slideshow.createToggleHandler());

    	$("#change_speed").click(function() {

    		var ms = prompt("Current speed is " + slideshow.interval + " milliseconds.\n", 2000);

    		slideshow.changeSpeed(ms).startSlideShow();


    	});

    	$("#view_slides").click(function() {

    		alert(slideshow.displaySlides());

    	});

    	slideshow.loadImages(slides).startSlideShow($("#image"), $("#caption"));

       //fetch the image and captions for showing the coming soon
    	var listNode = document.getElementById("image_list");
    	var captionNode = document.getElementById("captionsoon");
    	var imageNode = document.getElementById("imagesoon");
    	var links = listNode.getElementsByTagName("a");
        
    	var i, linkNode, image;
         
        /*
         image cache assigned to array, manipulate the dom such that image are fetched and assigned to
         to image node
        */
        
    	var imageCache = [];

    	for (i = 0; i < links.length; i++) {
        
            //to preload the image
    		linkNode = links[i];
    		image = new Image();
    		image.src = linkNode.getAttribute("href");
    		image.title = linkNode.getAttribute("title");
    		imageCache[imageCache.length] = image;
    	}

    	var imageCounter = 0;
        //timer to call every 3 seconds and change image
    	var timer = setInterval(function() {
    		imageCounter = (imageCounter + 1) % imageCache.length;
    		image = imageCache[imageCounter];
    		imageNode.src = image.src;
    		captionNode.firstChild.nodeValue = image.title;

    	}, 3000);



    });