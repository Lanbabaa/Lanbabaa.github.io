$(document).ready(function() {
	var a = localStorage.getItem("lastname1");
	var id = localStorage.getItem("id");
	if(a == 'a') {
		$('.topbar .topbar-info-sign a .id').text(id);
		$('.topbar-info').fadeOut(0);
		$('.topbar-info-sign').fadeIn(0)
	}
	$('.topbar-info-sign .out').click(function() {
		alert('你确定要退出账户吗');
		localStorage.setItem("lastname1", "0");
		window.location.reload();
	})
	$(".topbar .topbar-cart").hover(function() {
		$(".topbar .topbar-cart .content p").fadeIn(500);
	}, function() {
		$(".topbar .topbar-cart .content p").fadeOut(0);
	});
	$('.header .header-logo img').click(function(){
		window.location.href = "index.html";
	})
});