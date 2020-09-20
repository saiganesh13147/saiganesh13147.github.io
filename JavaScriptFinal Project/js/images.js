 $(document).ready(function() {
     //hide the data about top 5 
 	$("#images").hide();
 	$("#imagesim").hide();

     
     //if you click on the top 5 movies based on box office the data shows up
 	$("#click").click(function() {
          //toggle class 
 		$(this).toggleClass("minus");
         
        //check if the minus class is assigned
        
 		if ($(this).attr("class") != "minus") {

 			$("#images").hide();

 		} else {
            //hide other data and show the data related to clicked event
 			$("#imagesim").hide();
 			$("#images").show();

 		}
 	});



 	// $("#imagesim").hide();
     //if you click on the top 5 movies based on box office the data shows up

 	$("#clickim").click(function() {
  
         
 		$(this).toggleClass("minus");
//check if the minus class is assigned
 		if ($(this).attr("class") != "minus") {

 			$("#imagesim").hide();

 		} else {
             //hide other data and show the data related to clicked event
 			$("#images").hide();
 			$("#imagesim").show();


 		}

 	});


//get json method to fetch json  then parse and add the data to html

 	$.getJSON("../json_files/movies.json", function(data) {

 		$.each(data, function() {

 			$.each(this, function(key, value) {

 				$("#images").append(

   

 					"<h1>" + value.title + "</h1>" +

 					"<img src=" + value.image + ">" +
 					"<p>" + value.Actor + "</p>" +

 					"<p>" + value.Description + "</p>"

 				);
 			});
 		});
 	});

     //get json method to fetch json  then parse and add the data to html

 	$.getJSON("../json_files/movies1.json", function(data) {

 		$.each(data, function() {

 			$.each(this, function(key, value) {

 				$("#imagesim").append(



 					"<h1>" + value.title + "</h1>" +

 					"<img src=" + value.image + ">" +
 					"<p>" + value.Actor + "</p>" +

 					"<p>" + value.Description + "</p>"

 				);
 			});
 		});
 	});






 });