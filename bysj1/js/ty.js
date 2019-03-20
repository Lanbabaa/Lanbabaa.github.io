$(document).ready(function() {
	var a = localStorage.getItem("lastname1");
	var id = localStorage.getItem("id");
	var num = 0;

	function cart() {
		if(Number(localStorage.getItem("carnum")) == 0) {
			$('.topbar .topbar-cart').removeClass('topbar-cart-active');
		} else {
			$('.topbar .topbar-cart').addClass('topbar-cart-active');
			$('.topbar .topbar-cart .content .car span strong').text(Number(localStorage.getItem("carnum")))
		}
	}
	cart();
	if(num != 1) {
		num = Number(localStorage.getItem("carnum"));
		$('.topbar .topbar-cart .cart-num').text(Number(localStorage.getItem("carnum")));
	} else {
		num = 0
	}
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
		if(Number(localStorage.getItem("carnum")) != 0) {
			$(".topbar .topbar-cart .content .car").fadeIn(500);
		} else {
			$(".topbar .topbar-cart .content .num0").fadeIn(500);
		}
	}, function() {
		$(".topbar .topbar-cart .content .car").fadeOut(0);
		$(".topbar .topbar-cart .content p").fadeOut(0);
	});
	$('.header .header-logo img').click(function() {
		window.location.href = "index.html";
	});
	$('.add-car').click(function() {
		num = num + 1;
		localStorage.setItem("carnum", num);
		localStorage.setItem("carname", $(this).parent().find('.name').text());
		$('.topbar .topbar-cart .cart-num').text(Number(localStorage.getItem("carnum")));
		cart()
	})
	$('.topbar .topbar-cart .content .car input').click(function(){
		window.location.href = "car-2.html";
	})
});