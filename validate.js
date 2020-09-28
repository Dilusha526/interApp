function checkEmail(){
	var email = document.getElementById('text1').value;
	var mail=/[\da-zA-Z0-9._!$]@([\da-zA-Z]).([A-Za-z])/;

	if (mail.test(email)) {
		alert("Email Valied");
	}else{
		alert("Email is invalied");	
	}
}