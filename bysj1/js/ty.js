$('.topbar-info-sign .out').click(function(){
	alert('你确定要退出账户吗');
	localStorage.setItem("lastname1", "0");
	window.location.reload();
})
$(".topbar .topbar-cart").hover(function() {
	$(".topbar .topbar-cart .content p").fadeIn(500);
}, function() {
	$(".topbar .topbar-cart .content p").fadeOut(0);
});