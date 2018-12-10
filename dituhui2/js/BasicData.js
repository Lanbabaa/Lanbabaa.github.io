var j = 0;
layui.use('upload', function() {
	var upload = layui.upload;
	var uploadInst = upload.render({
		elem: '.Up .picture' //绑定元素
			,
		url: '/upload/' //上传接口
			,
		done: function(res) {
			//上传完毕回调
		},
		error: function() {
			//请求异常回调
		}
	});
});
layui.use('upload', function() {
	var upload = layui.upload;
	var uploadInst = upload.render({
		elem: '.Up .data' //绑定元素
			,
		url: '/upload/' //上传接口
			,
		done: function(res) {
			//上传完毕回调
		},
		error: function() {
			//请求异常回调
		}
	});
});
layui.use('upload', function() {
	var upload = layui.upload;
	var uploadInst = upload.render({
		elem: '.Up .network' //绑定元素
			,
		url: '/upload/' //上传接口
			,
		done: function(res) {
			//上传完毕回调
		},
		error: function() {
			//请求异常回调
		}
	});
});
layui.use('carousel', function() {
	var carousel = layui.carousel;
	carousel.render({
		elem: '#test1',
		width: '100%',
		height: '150px',
		arrow: 'always',
		indicator: "none"
	});
});

function sortarr() {
	var arr = [];
	var list = "";
	if(j == 0) {
		$(".coordinate li").each(function() {
			ele = $(this).text();
			arr.push(ele)
		})
		arr = arr.sort();
		$(".coordinate").empty();
		for(var i = 0; i < arr.length; i++) {
			list += "<li><i class='layui-icon layui-icon-location'></i><span>" + arr[i] + "</span></li>"
		}
		$(".coordinate").append(list);
		j++;
	} else {

		$(".coordinate li").each(function() {
			ele = $(this).text();
			arr.push(ele)
		})
		arr = arr.sort();
		$(".coordinate").empty();
		for(var i = arr.length - 1; i >= 0; i--) {
			list += "<li><i class='layui-icon layui-icon-location'></i><span>" + arr[i] + "</span></li>"

		}
		$(".coordinate").append(list);
		j--;
	}
}
$("body").click(function(e) {
	var id = e.target.id;
	if(id != 'more') {
		$("#Editlayer").fadeOut(100)
	}
})
$(".fa-eye").click(function() {
	$(this).toggleClass("fa-eye-slash")
})

$(".material .value").dblclick(function() {

	$(".value").attr("contenteditable", "false");
	$(this).attr("contenteditable", "true");
	$(this).focus();
});

function determine() {
	$(".value").attr("contenteditable", "false");
	$(".material button").css("display", "none");
}

function show(e) {
	$("." + e).fadeIn();
	$(".mask").css("display", "block")
}

function Close(e) {
	$("." + e).css("display", "none");
	$(".mask").css("display", "none")
}

function more(e) {
	$("." + e).fadeToggle();
}

function Determine() {
	var name = $("#Name").val();
	if(name != "") {
		addLayer(name);
		Close("addLayer");
		$("#Name").val("");
	} else {
		alert("图层名不能为空")
	}
}

function addLayer(e) {
	$(".layer").append("<li><i class='layui-icon layui-icon-location'></i> <a>" + e + "</a><span>(0)</span><i class='fa fa-eye' id='eye2' onclick='eye(this)'></i></li>")
}
$(".sort a").click(function() {
	$(this).addClass("active");
	$(this).siblings().removeClass("active")
})
$(".layui-card-body a").eq(1).click(function() {
	$(".workzone .layui-card").css("display", "none");
	$(".pointsLayer").css("display", "block");
	j = 0;
	sortarr();
})
$(".pointsLayerReturn a").click(function() {
	$(".workzone .layui-card").css("display", "block");
	$(".pointsLayer").css("display", "none");
})
$('.coordinate').delegate('li', 'click', function() {
	$(".coordinate").css("height", "370px");
	$(".attribute").css("display", "block");
	var title = $(this).text();
	$(".title").text(title);
});
$('.coordinate').delegate('li', 'click', function() {
	$(this).addClass("hover").siblings().removeClass("hover");
});

$(".attribute .layui-icon-close").click(function() {
	$(".coordinate").css("height", "700px");
})
$(".box i").click(function() {
	$(".box input[type=text]").val("");
})