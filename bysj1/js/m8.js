layui.use('carousel', function() {
	var carousel = layui.carousel;
	//建造实例
	carousel.render({
		elem: '#test1',
		width: '100%',
		height: '800px', //设置容器宽度
		arrow: 'always' //始终显示箭头
		//,anim: 'updown' //切换动画方式
	});
});
$(document).ready(function() {
	var a = localStorage.getItem("lastname1");
	var id = localStorage.getItem("id");
	if(a == 'a') {
		$('.topbar .topbar-info-sign a .id').text(id);
		$('.topbar-info').fadeOut(0);
		$('.topbar-info-sign').fadeIn(0)
	}
});
$('.main .content .goods-detail .big-picture li').click(function(){
	$('.cover').fadeIn(500);
})
$('.container-carousel .times').click(function(){
	$('.cover').fadeOut();
})
$('.container-carousel .times').click(function(){
	$('.cover').css('display','none')
})
$('.main .content .goods-detail .goods-detail-list li').click(function() {
	$(this).addClass('active').siblings().removeClass('active');
	var x = $('.goods-detail-list li').index(this);
	$('.main .content .goods-detail .big-picture li').eq(x).css('display', 'block').siblings().css('display', 'none');
})
$(".footer .menu ul li").hover(function() {
	$(this).toggleClass('li-active');
}, function() {
	$(this).toggleClass('li-active');
});
$('.topbar-info-sign .out').click(function(){
	alert('你确定要退出账户吗');
	localStorage.setItem("lastname1", "0");
	window.location.reload();
})
$(".main .content .commodity-information .cart button:nth-child(2)").click(function(){
	$('.main .content .commodity-information .cart button:nth-child(2)').toggleClass('sele')
})