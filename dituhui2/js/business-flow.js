var form = layui.form,
	layer = layui.layer;
// 监听
var value = "文本型";
var name = "";
var n = 1;
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
		alert("业务阶段不能超过10个")
	}

})
$(".business-phase .phase #lists").on('click', 'i', function() {
	if($(".business-phase .phase #lists li").length == 1) {
		alert("不能少于一个阶段")
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
		' <td>' + n + '</td>' +
		' <td>' + name + '</td>' +
		' <td>' + value + '</td>' +
		'<td><a class="edit">编辑</a><a class="delete">删除</a></td>' +
		'</tr>'
	if(name == "") {
		alert("名称不能为空");
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
	a();
});

function changeContent() {
	$(".header .title").hide();
	$(".header .edit-title").show();
	$(".header .edit-title input[type=text]").val($(".header .title span").text())
}

function confirmName() {
	$(".header .title").show();
	$(".header .edit-title").hide();
	$(".header .title span").text($(".header .edit-title input[type=text]").val())
}

function a() {
	if($("tbody").find("tr").length == 0) {
		$(".nothing").css("display", "block");
	} else {
		$(".nothing").css("display", "none");
	}
}

function establish() {
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
	$(".add-font-setting").css("display", "none");
}