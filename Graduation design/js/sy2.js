$("a,button").click(function() {
			$('html,body').animate({
				scrollTop: 0
			}, 'slow');
		});
		var i = 1;

		function xyy() {
			if(i <= 8) {
				i++;
				htmlobj = $.ajax({
					url: "xiaoshuo/00" + i + ".txt",
					async: false
				});
				$(".xiaos").html(htmlobj.responseText);
			} else if(i == 23 || i == 137 || i == 205 || i == 329 || i == 411) {
				alert("未完待续，敬请期待")
			} else if(i >= 101) {
				i++;
				htmlobj = $.ajax({
					url: "xiaoshuo/" + i + ".txt",
					async: false
				});
				$(".xiaos").html(htmlobj.responseText);
			} else {
				i++;
				htmlobj = $.ajax({
					url: "xiaoshuo/0" + i + ".txt",
					async: false
				});
				$(".xiaos").html(htmlobj.responseText);

			}
		}

		function syy() {
			if(i <= 1 || i == 101 || i == 201 || i == 301 || i == 401) {
				alert("前面没有了");
			} else if(i >= 11 && i < 100) {
				i--;
				htmlobj = $.ajax({
					url: "xiaoshuo/0" + i + ".txt",
					async: false
				});
				$(".xiaos").html(htmlobj.responseText);
			} else if(i >= 101) {
				i--;
				htmlobj = $.ajax({
					url: "xiaoshuo/" + i + ".txt",
					async: false
				});

				$(".xiaos").html(htmlobj.responseText);
			} else {
				i--;
				htmlobj = $.ajax({
					url: "xiaoshuo/00" + i + ".txt",
					async: false
				});
				$(".xiaos").html(htmlobj.responseText);

			}
		}
		var j = 0;
		$("#b01").click(function() {
			htmlobj = $.ajax({
				url: "xiaoshuo/001.txt",
				async: false
			});
			$(".xiaos").html(htmlobj.responseText);
			document.title = "《剑斩苍穹》";
			$(".nav").css('display', 'block')
			$(".fy").css('display', 'block')
		});
		$("#b02").click(function() {
			htmlobj = $.ajax({
				url: "xiaoshuo/101.txt",
				async: false
			});
			$(".xiaos").html(htmlobj.responseText);
			document.title = "《最强特种兵王》";
			$(".nav").css('display', 'block')
			$(".fy").css('display', 'block')
			i = 101;
		});
		$("#b03").click(function() {
			htmlobj = $.ajax({
				url: "xiaoshuo/201.txt",
				async: false
			});
			$(".xiaos").html(htmlobj.responseText);
			document.title = "《当个法师闹革命》";
			$(".nav").css('display', 'block')
			$(".fy").css('display', 'block')
			i = 201;
		});
		$("#b04").click(function() {
			htmlobj = $.ajax({
				url: "xiaoshuo/301.txt",
				async: false
			});
			$(".xiaos").html(htmlobj.responseText);
			document.title = "《斗破苍穹》";
			$(".nav").css('display', 'block')
			$(".fy").css('display', 'block')
			i = 301;
		});
		$("#b05").click(function() {
			htmlobj = $.ajax({
				url: "xiaoshuo/401.txt",
				async: false
			});
			$(".xiaos").html(htmlobj.responseText);
			document.title = "《大主宰》";
			$(".nav").css('display', 'block')
			$(".fy").css('display', 'block')
			i = 401;
		});