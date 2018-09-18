$(document).ready(function() {
	$(".loginBox").fadeIn("slow");
});

function onfocu(x) {
	document.getElementById(x + "s").className = "recovery";
}

function login() {
	var inputs = $("input[type=text],input[type=password]");
	var ps = document.querySelectorAll("p")
	for(var i = 0; i < inputs.length; i++) {
		if(!inputs[i].value) {
			ps[i].className = "unfilled";
		}
	}
	if($("#user").val() != "" && $("#pwd").val() != "") {
		window.location.href = "home.html";
	}
}