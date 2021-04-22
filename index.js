function login(){
	var userEmail = document.getElementById("email_field").value;
	var userPassword = document.getElementById("password_field").value;	
	//window.alert("working");
	
	//window.alert(username,password);
	
	firebase.auth().signInWithEmailAndPassword(userEmail,userPassword).catch(function(error) {
        // Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		
		window.alert("Errors : "+ errorMessage);
	});
	
	firebase.auth().onAuthStateChanged(function(currentUser) {
	if (currentUser) {
    // the user is logged in, you can bootstrap functionality now
	window.location.href="MachineCode.html";
	}
	});
	
}

function signup(){
	var userEmail = document.getElementById("email_field").value;
	var userPassword = document.getElementById("password_field").value;	
	console.log(userEmail,userPassword);
	//lnk to signup page
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	window.alert("Error: " + errorMessage);
	window.location.href="index.html";
	
	// ...
});

	firebase.auth().onAuthStateChanged(function(currentUser) {
	if (currentUser) {
    // the user is logged in, you can bootstrap functionality now
	window.location.href="index.html";
	window.alert("sign up success");
	}
	});
	
}

function Logout()
{
	firebase.auth().signOut().then(function() {
	// Sign-out successful.
	window.location.href= "index.html";
	}).catch(function(error) {
	// An error happened.
	});
}
































