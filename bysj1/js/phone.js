layui.use('carousel', function(){
  var carousel = layui.carousel;
  //建造实例
  carousel.render({
    elem: '#test1'
    ,width: '100%'
    ,height: '461px'//设置容器宽度
    ,arrow: 'always' //始终显示箭头
    //,anim: 'updown' //切换动画方式
  });
});
$(".phone-main .container .big , .phone-main .container .small .box").hover(function() {
	$(this).toggleClass('hover');
}, function() {
	$(this).toggleClass('hover');
});
$(document).ready(function() {
	var a = localStorage.getItem("lastname1");
	var id = localStorage.getItem("id");
	if(a == 'a') {
		$('.main .content .container .user .portal-main .user-card .card .username').text(id);
	}
});