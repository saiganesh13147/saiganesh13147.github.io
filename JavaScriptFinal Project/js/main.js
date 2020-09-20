
//authentication details to send data the firebase

var config = {
	apiKey: "AIzaSyBynEhF_em5ESyhrq-csxZwctDAl6Qvf1A",
	authDomain: "fir-d0d02.firebaseapp.com",
	databaseURL: "https://fir-d0d02.firebaseio.com",
	projectId: "fir-d0d02",
	storageBucket: "fir-d0d02.appspot.com",
	messagingSenderId: "529213532044",
	appId: "1:529213532044:web:3dc3e93a28e760888858a9"
};

firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');


$(document).ready(function() {

	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	//email trim
	/*
 $('#email').focusout(function(e) {

  var email = $('#email').val().trim();
  $('#email').val(email);

 });
*/

	// event submit

	$("#contactForm").submit(
		function(event) {
			console.log("valid con");
			var isValid = true;
             //assign values to variables
			var email = $("#email").val().trim();
			var name = $("#name").val().trim();

			var lastname = $("#lastname").val().trim();


			var phone = $("#phone").val().trim();

			// email validation
			if (email == "") {
				console.log("valid con");
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if (!emailPattern.test(email)) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			}





			// phone number validation
			if (phone == "") {
				console.log("valid con");
				$("#phone").next().text("This field is required.");
				isValid = false;
			} else if (isNaN(phone)) {
				$("#phone").next().text("Enter a Numeric Value");
				isValid = false;
			} else if (phone.length != 10) {
				$("#phone").next().text("Must be 10 characters.");
				isValid = false;
			} else {
				$("#phone").next().text("");
			}

			// name validation

			if (name == "") {
				console.log("valid con");
				$("#name").next().text("This field is required.");
				isValid = false;
			} else {
				$("#name").next().text("");
			}
              //last name validation
			if (lastname == "") {
				console.log("valid con");
				$("#lastname").next().text("This field is required.");
				isValid = false;
			} else {
				$("#lastname").next().text("");
			}

               
            //to check whether values are provided or not
                  
			if (isValid == false) {
				//console.log("false valid con");
				event.preventDefault();
			} else if (isValid == true) {
				event.preventDefault();

				var name = getInputVal("name");
				var lastname = getInputVal("lastname");
				var email = getInputVal("email");
				var phone = getInputVal("phone");

				var selectedGender;
				document.getElementsByName("sex").forEach(function(elm) {
					if (elm.checked) {
						selectedGender = elm.value;
					}
				});
                //date object to fetch timestamp
				var today = new Date();

				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var timesta = h + "-" + m + "-" + s;
				// Save message 
				saveMessage(name, lastname, email, phone, selectedGender, timesta);

				// Show alert
				document.querySelector('.alert').style.display = 'block';

				// Hide alert after 3 seconds
				setTimeout(function() {
					document.querySelector('.alert').style.display = 'none';
				}, 5000);

				// Clear form
				document.getElementById('contactForm').reset();
			}
		}

	);

});

// Function to get form values
function getInputVal(id) {
	return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, lastname, email, phone, selectedGender, timesta) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		lastname: lastname,
		email: email,
		phone: phone,
		Gender: selectedGender,
		timestamp: timesta
	});
}