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

function eye(e) {
	var eye = e.className
	if(eye == "fa fa-eye") {
		e.className = "fa fa-eye-slash"
	} else {
		e.className = "fa fa-eye"
	}
}
function daily(){
	$("iframe").attr("src","new_file.html")
}
function addLayer() {
	$(".layer").append("<li><i class='layui-icon layui-icon-location'></i><a>点图层</a><span>(500)</span><i class='fa fa-eye' id='eye2' onclick='eye(this)'></i></li>")
}

function TakeUp() {
	$(".layui-nav-side,.content").fadeOut();
	$(".main").css("left", "0px");
	$(".main").css("width", "100%");
	$("iframe").css("width", "100%");
	$(".Show").fadeIn()
}

function Show() {
	$(".layui-nav-side,.content").fadeIn();
	$(".main").css("left", "27%");
	$(".main").css("width", "73%");
	$("iframe").css("width", "100%");
	$(".Show").fadeOut()
}
$(".sort a").click(function() {
	$(this).addClass("active");
	$(this).siblings().removeClass("active")
})

$(".layui-card-body a").eq(1).click(function() {
	$(".content .layui-card").css("display", "none");
	$(".pointsLayer").css("display", "block");
	j = 0;
	sortarr();
})
$(".pointsLayerReturn a").click(function() {
	$(".content .layui-card").css("display", "block");
	$(".pointsLayer").css("display", "none");
})
$('.coordinate').delegate('li', 'click', function() {
	$(".coordinate").css("height", "370px");
	$(".attribute").css("display", "block");
	var title = $(this).text();
	$(".title").text(title);
});

$(".attribute .layui-icon-close").click(function() {
	$(".coordinate").css("height", "700px");
	$(".attribute").css("display", "none");
})
$(".attribute .layui-icon-picture").click(function() {
	$(".mask").css("display", "block");
	$(".uppicture").fadeIn();
})
$(".pointsLayerBottom .import").click(function() {
	$(".mask").css("display", "block");
	$(".uploading").fadeIn();
})
$(".pointsLayerBottom .update").click(function() {
	$(".mask").css("display", "block");
	$(".updateData").fadeIn();
})
$(".uppicture .layui-icon-close").click(function() {
	$(".mask").css("display", "none");
	$(".uppicture").css("display", "none");
})
$(".uploading .layui-icon-close").click(function() {
	$(".mask").css("display", "none");
	$(".uploading").css("display", "none");
})
$(".updateData .layui-icon-close").click(function() {
	$(".mask").css("display", "none");
	$(".updateData").css("display", "none");
})