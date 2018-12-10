//JavaScript代码区域
layui.use('element', function() {
	var element = layui.element;
});
var isShow = true; //定义一个标志位
$('.kit-side-fold').click(function() {
	//选择出所有的span，并判断是不是hidden
	$('.layui-nav-item span').each(function() {
		if($(this).is(':hidden')) {
			$(this).show();
		} else {
			$(this).hide();
		}
	});
	$(".kit-side-fold i").toggleClass("layui-icon-spread-left");
	$('.kit-side-fold').toggleClass('zoom');
	$('.MapList').toggleClass('MapList-zoom');
	$('.User').toggleClass('User-zoom');
	$('.List').toggleClass('List-zoom');
	$('.user-content').toggleClass('user-content-zoom');
	$('.workzone').toggleClass('workzone-zoom');
	$('.map').toggleClass('map-zoom');
	$('.all-hide').toggleClass('all-hide-zoom');
	$('.content-container').toggleClass('content-container-zoom'); //判断isshow的状态
	if(isShow) {
		$('.zoom').attr('title', '菜单展开');
		$('.layui-side.layui-bg-black').width(60); //设置宽度
		//将footer和body的宽度修改
		$('.layui-body').css('left', 60 + 'px');
		$('.layui-footer').css('left', 60 + 'px');
		//将二级导航栏隐藏
		$('dd span').each(function() {
			$(this).hide();
		});
		//修改标志位
		isShow = false;
	} else {
		$('.kit-side-fold').attr('title', '菜单缩放');
		$('.layui-side.layui-bg-black').width(200);
		$('.layui-body').css('left', 200 + 'px');
		$('.layui-footer').css('left', 200 + 'px');
		$('dd span').each(function() {
			$(this).show();
		});
		isShow = true;
	}
});
$(".MapList").click(function() {
	$(".MapList .layui-icon-down").toggleClass("layui-icon-up");
	$(".List").toggle(100);
	$(".user-content").hide(100);
})
$('.layui-side,.workzone,.map').click(function() {
	$('.List,.user-content').hide(100);
})
$(".all-hide").click(function() {
	$('.all-hide .fa').toggleClass('fa-chevron-right');
	$('.layui-bg-black,.workzone').fadeToggle(100);
	$('.map').toggleClass('map-max');
	if($('.all-hide .fa').hasClass('fa-chevron-right')) {
		$('.all-hide').css('left', '0px');
		$('.all-hide').attr('title', '展开右侧面板');
	} else {
		$('.all-hide').attr('title', '收起右侧面板');
		$('.all-hide').css('left', '480px');
	}
})
$(".layui-side .layui-side-scroll .Bottom .User").click(function() {
	$(".user-content").toggle(100);
	$(".List").hide(100);
})
$(".List,.MapList,.User").click(function(event) {
	event.stopPropagation();
});
$('.user-content li:nth-child(4) p:nth-child(1)').click(function() {
	window.open("http://ehelp.dituhui.com/");
})
var n = 1;
$('.List .header i').click(function() {
	var myDate = new Date();
	var thisDate;
	if (myDate.getDate()<10) {
		thisDate = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-0" + myDate.getDate();
	}
	else if((myDate.getMonth() + 1)<10){
		thisDate = myDate.getFullYear() + "-0" + (myDate.getMonth() + 1) + "-" + myDate.getDate();
	}
	else if(myDate.getDate()<10 && (myDate.getMonth() + 1)<10){
		thisDate = myDate.getFullYear() + "-0" + (myDate.getMonth() + 1) + "-0" + myDate.getDate();
	}
	else{
		thisDate = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate();
	}
	
	var src = $(".layui-side .layui-side-scroll .Bottom .User img")[0].src;
	$('.List .content').prepend('<li title="温州管网图定位">' +
		'<div class="img"><img src="' + src + '"></div>' +
		'<div class="list-name">' +
		'<p>我的地图' + n + '<i class="layui-icon layui-icon-rate-solid"></i></p>' +
		'<div class="list-text">' +
		'<span class="me"><i class="layui-icon layui-icon-username"></i> ' + $('.layui-side .layui-side-scroll .Bottom .User span').text() + ' </span>' +
		'<span class="time"><i class="layui-icon layui-icon-log"></i> ' + thisDate + '</span>' +
		'</div>' +
		'</div>' +
		'</li>')
	n++;
})