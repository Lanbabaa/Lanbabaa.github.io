$(".workzone .content .part .add").click(function() {
	$(".add-condition").fadeIn();
	$(".mask").fadeIn();
})

function sub() {
	Close();
}

function Close() {
	$(".mask").fadeOut();
	$(".add-condition").fadeOut()
}