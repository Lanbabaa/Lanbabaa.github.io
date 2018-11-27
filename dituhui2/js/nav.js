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
			$(".kit-side-fold i").toggleClass("layui-icon-spread-left")
			$('.kit-side-fold').toggleClass('zoom');
			$('.MapList').toggleClass('MapList-zoom');
			$('.User').toggleClass('User-zoom');
			$('.List').toggleClass('List-zoom');
			$('.user-content').toggleClass('user-content-zoom');
			$('.workzone').toggleClass('workzone-zoom');
			$('.map').toggleClass('map-zoom');
			$('.all-hide').toggleClass('all-hide-zoom');	
			$('.content-container').toggleClass('content-container-zoom');//判断isshow的状态
			if(isShow) {
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
//		$(document).click(function() {
//			$(".List").hide(100);
//			$(".user-content").hide(100);
//			$(".MapList .layui-icon-down").removeClass("layui-icon-up");
//		});
//		document.getElementById('my-iframe').contentDocument.onclick = function() {
//			$(".List").hide(100);
//			$(".user-content").hide(100);
//			$(".MapList .layui-icon-down").removeClass("layui-icon-up");
//		};
		$(".all-hide").click(function(){
			$('.all-hide .fa').toggleClass('fa-chevron-right');
			$('.layui-bg-black,.workzone').fadeToggle(100);
			$('.map').toggleClass('map-max');
			if ($('.all-hide .fa').hasClass('fa-chevron-right')) {
				$('.all-hide').css('left','0px');		
			} else{
				$('.all-hide').css('left','480px');
			}
		})
		$(".layui-side .layui-side-scroll .Bottom .User").click(function() {
			$(".user-content").toggle(100);
			$(".List").hide(100);
		})
		$(".List,.MapList,.User").click(function(event) {
			event.stopPropagation();
		});