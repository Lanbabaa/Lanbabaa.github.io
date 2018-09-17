$(document).ready(function() {
	$(".loginBox").fadeIn("slow");
});

function focused(x) {
	document.getElementById(x + "s").className = "recovery";
}
var clock = '';
var nums = 60;
var btn;

function sendCode(thisBtn) {
	var n = $('#phone').val();
	if(n.length == 11 && n.length != "") {
		btn = thisBtn;
		btn.disabled = true;
		btn.value = nums + '秒后可重新获取';
		clock = setInterval(doLoop, 1000);
	} else {
		document.getElementById("phones").className = "unfilled";
	}
}

function doLoop() {
	nums--;
	if(nums > 0) {
		btn.value = nums + '秒后可重新获取';
		$("#yzmBtn").css("cursor", "not-allowed")
	} else {
		clearInterval(clock);
		btn.disabled = false;
		btn.value = '点击发送验证码';
		$("#yzmBtn").css("cursor", "pointer")
		nums = 60;
	}
}

function register() {
	var inputs = $("input[type=text],input[type=password]");
	var ps = $("p");
	for(var i = 0; i < inputs.length; i++) {
		if(!inputs[i].value) {
			ps[i].className = "unfilled";
		} 
	}if(inputs[0].value.length!=11){
		ps[0].className = "unfilled";
	}if(inputs[3].value.length<6||inputs[3].value.length>16){
		ps[3].className = "unfilled";
	}

}