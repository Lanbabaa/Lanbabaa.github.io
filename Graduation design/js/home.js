$('.a1').click(function(){
		window.location.href = "sy1.html";
	});
	$('.a2').click(function(){
		window.location.href = "sy2.html";
	});
	$('.a3').click(function(){
		window.location.href = "home.html";
	});
	$('.a4').click(function(){
		window.location.href = "home.html";
	});

(function(){
	$('#wrap li').mouseover(function(){
		if(!$(this).hasClass('curr')){
			$('#wrap li').removeClass('curr');
			$(this).addClass('curr');
			$('#wrap li').each(function(index){
				if($(this).hasClass('curr')){
					$('.bg').fadeOut(300);
					$('.bg:eq(' + index + ')').fadeIn(500);
				}
			});

			$('.curr').stop().animate({
				width: 700
			}, 500, 'linear');
			$('#wrap li').not('.curr').stop().animate({
				width: 100
			}, 500, 'linear');
		}
	});
})()