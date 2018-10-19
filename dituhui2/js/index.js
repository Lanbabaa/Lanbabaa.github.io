function Jump(e) {
			$("iframe").attr("src", "" + e)
		}
		var n = 0;
		$(".takeUp i").click(function() {
			
			if(n == 0) {
				$("a").addClass("visibilityHidden");
				$("a i").addClass("visibilityVisible");
				$(".teamHead").css("display", "none");
				$(".layui-nav").css("width", "50px");
				$(".takeUp i").attr("class", "layui-icon layui-icon-spread-left");
				$(".takeUp i").attr("title", "点击展开");
				$("iframe").addClass("open");
				n++;
				
			} else {
				$("a").removeClass("visibilityHidden");
				$("a i").removeClass("visibilityVisible");
				$(".teamHead").css("display", "block");
				$(".layui-nav").css("width", "200px");
				$(".takeUp i").attr("class", "layui-icon layui-icon-shrink-right");
				$(".takeUp i").attr("title", "点击收起");
				$("iframe").removeClass("open");
				n--;
			}
			$(".Bottom").toggle();
		});
		$(".MapList").click(function(){
			$(".MapList .layui-icon-down").toggleClass("layui-icon-up")
		})