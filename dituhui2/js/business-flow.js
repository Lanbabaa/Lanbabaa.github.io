var form = layui.form,
	layer = layui.layer;
// 监听
var value = "文本型";
var name = "";
var n = 1;
var t = 0;
$(document).ready(function() {
	// select下拉框选中触发事件
	form.on("select", function(data) {
		value = data.value // 获取选中的值
	});
});
$(".business-phase .phase .add-list").click(function() {
	if(n < 10) {
		n++;
		$(".business-phase .phase #lists").append('<li class="list">阶段' + n + ' <i class="layui-icon layui-icon-close-fill"></i></li>');
	} else {
		tips(1)
	}

})

function tips(e) {
	$(".Tips" + e).fadeIn();
	setTimeout("$('.Tips" + e + "').fadeOut()", 4000);
	var width = $('.Tips' + e).width() / 2 + 20;
	$(".Tips" + e).css('left', '50%').css('left', '-=' + width + 'px');
}
$(".business-phase .phase #lists").on('click', 'i', function() {
	if($(".business-phase .phase #lists li").length == 1) {
		tips(0);
	} else {
		$(this).parent().remove();
		n--;
	}

});
$(".business-phase .phase #lists").on('click', 'li', function() {
	$(this).siblings().removeClass("active");
	$(this).addClass("active")

});

$(".footer .layui-btn").click(function() {
	name = $(".content-list #name").val();
	var tr = '<tr>' +
		' <td id="ids">' + n + '</td>' +
		' <td id="names">' + name + '</td>' +
		' <td id="types">' + value + '</td>' +
		'<td><a class="edit">编辑</a><a class="delete">删除</a></td>' +
	'</tr>'
	if(name == "") {
		tips(3)
	} else {
		$(".content-list tbody").append(tr);
		n++;
	}
	$(".content-list #name").val("");
	if($(".footer input[type='checkbox']").is(':checked')) {

	} else if(name == "") {
	
	} else {
		rfont();
	}
	a();
});
$("tbody").on('click', '.delete', function() {
	$(this).parents('tr').remove();
	n--;
	a();
});
//$("tbody").on('click', '.edit', function() {
//	name = $(this).parent().siblings('#names').text();
//	$('.edit-font-setting .content .content-list #name').val(name);
//	$(".mask").fadeIn(100);
//	$('.edit-font-setting').fadeIn(800);
//	$(this).parents('tr').remove();
//});

function edit() {
	var tr = '<tr>' +
		' <td id="ids">' + n + '</td>' +
		' <td id="names">' + name + '</td>' +
		' <td id="types">' + value + '</td>' +
		'<td><a class="edit">编辑</a><a class="delete">删除</a></td>' +
	'</tr>'
	$(".content-list tbody").append(tr);
}

function changeContent() {
	$(".header .title").hide();
	$(".header .edit-title").show();
	$(".header .edit-title input[type=text]").val($(".header .title span").text())
}
$(".header .edit-title input").blur(function() {
	$(".header .title").show();
	$(".header .edit-title").hide();
	$(".header .title span").text($(".header .edit-title input[type=text]").val())
});

function a() {
	if($("tbody").find("tr").length == 0) {
		$(".nothing").css("display", "block");
	} else {
		$(".nothing").css("display", "none");
	}
}

function establish() {
	if($(".templet").css("display") == "block") {
		tips(2);
	}
	$(".templet").css("display", "block");
	$(".empty-container").css("display", "none");

}

function cancel() {
	$(".templet").css("display", "none");
	$(".empty-container").css("display", "block");
}

function addfont() {
	$(".mask").fadeIn(100);
	$(".add-font-setting").fadeIn(800)
}

function rfont() {
	$(".mask").css("display", "none");
	$(".font-set").css("display", "none");
}