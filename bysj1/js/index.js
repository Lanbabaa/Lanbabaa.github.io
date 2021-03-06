
layui.use('carousel', function() {
	var carousel = layui.carousel;
	//建造实例
	carousel.render({
		elem: '#test1',
		width: '100%' //设置容器宽度
			,
		height: '100%',
		arrow: 'always' //始终显示箭头
		//,anim: 'updown' //切换动画方式
	});
});
$(function() {
	var h = document.documentElement.clientHeight || document.body.clientHeight;
	$('.kaishi').css('height', h + 'px');
	$('.container .menu ul li a').hover(function() {
		$(this).attr('title', $(this).text())
	});
});
$(".container .container-nav .nav .nav-phone,.container .phone").hover(function() {
	$(".container .phone").fadeIn(0);
}, function() {
	$(".container .phone").fadeOut(0);
});
$(".container .container-nav .nav .nav-television,.container .television").hover(function() {
	$(".container .television").fadeIn(0);
}, function() {
	$(".container .television").fadeOut(0);
});
$(".container .container-nav .nav .nav-pc,.container .pc").hover(function() {
	$(".container .pc").fadeIn(0);
}, function() {
	$(".container .pc").fadeOut(0);
});
$(".monopoly .monopoly-box .main li").hover(function() {
	$(this).toggleClass('li-active');
}, function() {
	$(this).toggleClass('li-active');
});
