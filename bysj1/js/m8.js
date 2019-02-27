$('.main .content .goods-detail .goods-detail-list li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	var x = $('.goods-detail-list li').index(this);
	$('.main .content .goods-detail .big-picture li').eq(x).css('display','block').siblings().css('display','none');
})