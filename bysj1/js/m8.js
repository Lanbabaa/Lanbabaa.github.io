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