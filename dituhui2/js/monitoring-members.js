$('.workzone .monitoring-content .add-box').click(function() {
	$(".addmember").fadeIn();
	$(".mask").fadeIn();
})
$('.addmember .invitedmembers .title i').click(function() {
	$(".addmember").fadeOut(100);
	$(".mask").fadeOut(100);
})