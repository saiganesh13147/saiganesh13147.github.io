$(document).ready(function() {

    //add movies to fav
	$("#add_task").click(function() {

     //jquery select the task id
		var textbox = $("#task");

          
		var task = textbox.val();
          
        //check if the movie entered is null
		if (task === "") {

			alert("Please enter a task.");

			textbox.focus();

		} else {
               //store the movie value in local storage and concat the movie values and show in the textbox
            
			var tasks = localStorage.tasks || "";
			localStorage.tasks = tasks.concat(task, "\n");
			textbox.val("");
			$("#task_list").val(localStorage.tasks);
			textbox.focus();



		}
	});

     //function to delete movies or remove movies from watchlist
	$("#clear_tasks").click(function() {

		localStorage.removeItem("tasks");
          
        
        //remove from the local storage
		$("#task_list").val("");

		$("#task").focus();
	}); 
    // display movie watchlist on initial load
    
	$("#task_list").val(localStorage.tasks);
	$("#task").focus();
});