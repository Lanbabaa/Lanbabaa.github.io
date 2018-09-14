var j = 0;
var i = 1;
var t = 0;
document.onkeydown = function(e) {
	var keyNum = window.event ? e.keyCode : e.which;
	if(keyNum == 37 && j != 0) {
		syy();
	}
	if(keyNum == 39 && j != 0) {
		xyy();
	}
	if(keyNum == 174 && j != 0 || keyNum == 40 && j != 0) {
		var t = $(window).scrollTop();
		$('body,html').animate({
			'scrollTop': t + 200
		}, 500)
	}
	if(keyNum == 175 && j != 0 || keyNum == 38 && j != 0) {
		var t = $(window).scrollTop();
		$('body,html').animate({
			'scrollTop': t - 200
		}, 500)
	}
}

window.onbeforeunload = fh();
$("a,button").click(function() {
	$('html,body').animate({
		scrollTop: 0
	}, 100);
});
$("button").click(function() {
	$(".nav").css('display', 'block');
	$(".fy").css('display', 'inline-block');
	$(".xiaos").css("background", " rgba(204,153,0,.1)")
	j = -1;

});

var storage = window.localStorage;
for(var n = 0; n < 4; n++) {
	if(storage["jxyd" + n + ""] !== undefined) {
		document.getElementById("b0" + n + "").innerHTML = "继续阅读"
	}
}

function ml() {
	$(".catalog").fadeToggle(200);
	for(var i = 1; i < 5; i++) {
		if(i == j) {
			alert(j)
			var m = 97 + i;
			alert(storage[String.fromCharCode(m)])
			var t = $(".catalog").scrollTop();
			if(storage[String.fromCharCode(m) + ""] > 500 && t == 0) {
				if(screen.width <= 768) {
					$('.catalog').animate({
						'scrollTop': t + (storage[String.fromCharCode(m) + ""] - 500) * 66 - 4 * 66
					}, 500);
				} else {
					$('.catalog').animate({
						'scrollTop': t + (storage[String.fromCharCode(m) + ""] - 500) * 66 - 5.2 * 66
					}, 500);
				}
			}
			if(storage[String.fromCharCode(m) + ""] > 300 && storage[String.fromCharCode(m) + ""] < 400 && t == 0) {
				if(screen.width <= 768) {
					$('.catalog').animate({
						'scrollTop': t + (storage[String.fromCharCode(m) + ""] - 300) * 66 - 4 * 66
					}, 500);
				} else {
					$('.catalog').animate({
						'scrollTop': t + (storage[String.fromCharCode(m) + ""] - 300) * 66 - 5.2 * 66
					}, 500);
				}
			}
			if(storage[String.fromCharCode(m) + ""] > 400 && storage[String.fromCharCode(m) + ""] < 500 && t == 0) {
				if(screen.width <= 768) {
					$('.catalog').animate({
						'scrollTop': t + (storage[String.fromCharCode(m) + ""] - 300) * 66 - 4 * 66
					}, 500);
				} else {
					$('.catalog').animate({
						'scrollTop': t + (storage[String.fromCharCode(m) + ""] - 300) * 66 - 5.2 * 66
					}, 500);
				}
			}
			if(storage[String.fromCharCode(m) + ""] > 200 && storage[String.fromCharCode(m) + ""] < 300 && t == 0) {
				if(screen.width <= 768) {
					$('.catalog').animate({
						'scrollTop': t + (storage[String.fromCharCode(m) + ""] - 300) * 66 - 4 * 66
					}, 500);
				} else {
					$('.catalog').animate({
						'scrollTop': t + (storage[String.fromCharCode(m) + ""] - 300) * 66 - 5.2 * 66
					}, 500);
				}
			} else {

			}

		}
	}
}

function fh() {
	if(i > 500) {
		storage["b"] = i;
		storage["jxyd0"] = i
	}
	if(i > 200 && i < 301) {
		storage["c"] = i;
		storage["jxyd1"] = i
	}
	if(i > 300 && i < 401) {
		storage["d"] = i;
		storage["jxyd2"] = i
	}
	if(i > 400 && i < 501) {
		storage["e"] = i;
		storage["jxyd3"] = i
	}
	j = 0;
}

function xyy() {
	if(i <= 8) {
		i++;
		htmlobj = $.ajax({
			url: "xiaoshuo/00" + i + ".txt",
			async: false
		});
		$(".xiaos").html(htmlobj.responseText);
	} else if(i == 23 || i == 699 || i == 205 || i == 342 || i == 411) {
		//更新文章时需要修改的代码
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
	if(i > 500) {
		storage["b"] = i;
		storage["jxyd0"] = i
	}
	if(i > 200 && i < 301) {
		storage["c"] = i;
		storage["jxyd1"] = i
	}
	if(i > 300 && i < 401) {
		storage["d"] = i;
		storage["jxyd2"] = i
	}
	if(i > 400 && i < 501) {
		storage["e"] = i;
		storage["jxyd3"] = i
	}
}

function syy() {
	if(i <= 1 || i == 501 || i == 201 || i == 301 || i == 401) {
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
	if(i > 500) {
		storage["b"] = i;
		storage["jxyd0"] = i
	}
	if(i > 200 && i < 301) {
		storage["c"] = i;
		storage["jxyd1"] = i
	}
	if(i > 300 && i < 401) {
		storage["d"] = i;
		storage["jxyd2"] = i
	}
	if(i > 400 && i < 501) {
		storage["e"] = i;
		storage["jxyd3"] = i
	}
}

$("#b00").click(function() {
	if(storage["b"] < 501 || storage["b"] == undefined) {
		i = 501;
	} else {
		i = storage["b"];

	}
	htmlobj = $.ajax({
		url: "xiaoshuo/" + i + ".txt",
		async: false

	});
	$(".xiaos").html(htmlobj.responseText);
	document.title = "《最强特种兵王》";
	for(var m = 1; m <= 199; m++) {
		//更新文章时需要修改的代码
		$(".catalog").append('<p class=b' + m + '>第' + m + '章</p>');
		let ii = m;
		var bt = document.querySelector(".b" + ii);
		bt.onclick = function() {
			i = 500 + ii;
			storage["b"] = i;
			htmlobj = $.ajax({
				url: "xiaoshuo/" + i + ".txt",
				async: false
			});
			$(".xiaos").html(htmlobj.responseText);
			$(".catalog").fadeOut(100)
		};
	}
	j = 1;
});

$("#b01").click(function() {
	if(storage["c"] == undefined) {
		i = 201;
	} else {
		i = storage["c"];
	}
	htmlobj = $.ajax({
		url: "xiaoshuo/" + i + ".txt",
		async: false
	});
	$(".xiaos").html(htmlobj.responseText);
	document.title = "《当个法师闹革命》";
	for(var m = 1; m <= 5; m++) {
		//更新文章时需要修改的代码
		$(".catalog").append('<p class=b' + m + '>第' + m + '章</p>');
		let ii = m;
		var bt = document.querySelector(".b" + ii);
		bt.onclick = function() {
			storage["b"] = i;
			i = 200 + ii
			htmlobj = $.ajax({
				url: "xiaoshuo/" + i + ".txt",
				async: false
			});
			$(".xiaos").html(htmlobj.responseText);
			$(".catalog").fadeOut(100)
		};
	}
	j = 2;
});
$("#b02").click(function() {
	if(storage["d"] == undefined) {
		i = 301;
	} else {
		i = storage["d"];
	}
	htmlobj = $.ajax({
		url: "xiaoshuo/" + i + ".txt",
		async: false
	});
	$(".xiaos").html(htmlobj.responseText);
	document.title = "《斗破苍穹》";
	for(var m = 1; m <= 42; m++) {
		//更新文章时需要修改的代码
		$(".catalog").append('<p class=b' + m + '>第' + m + '章</p>');
		let ii = m;
		var bt = document.querySelector(".b" + ii);
		bt.onclick = function() {
			i = 300 + ii
			storage["b"] = i;
			htmlobj = $.ajax({
				url: "xiaoshuo/" + i + ".txt",
				async: false
			});
			$(".xiaos").html(htmlobj.responseText);
			$(".catalog").fadeOut(100)
		};
	}
	j = 3;
});

$("#b03").click(function() {
	if(storage["e"] == undefined) {
		i = 401;
	} else {
		i = storage["e"];
	}
	htmlobj = $.ajax({
		url: "xiaoshuo/" + i + ".txt",
		async: false
	});
	$(".xiaos").html(htmlobj.responseText);
	document.title = "《大主宰》";
	for(var m = 1; m <= 11; m++) {
		//更新文章时需要修改的代码
		$(".catalog").append('<p class=b' + m + '>第' + m + '章</p>');
		let ii = m;
		var bt = document.querySelector(".b" + ii);
		bt.onclick = function() {
			i = 400 + ii
			storage["b"] = i;
			htmlobj = $.ajax({
				url: "xiaoshuo/" + i + ".txt",
				async: false
			});
			$(".xiaos").html(htmlobj.responseText);
			$(".catalog").fadeOut(100)
		};
	}
	j = 4;
});