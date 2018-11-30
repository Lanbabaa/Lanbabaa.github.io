layui.use('upload', function() {
	var upload = layui.upload;
	var uploadInst = upload.render({
		elem: '.uploading .layui-card-body .network' //绑定元素
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
$(".title .layui-icon-upload").click(function() {
	$(".mask").css("display", "block");
	$(".uploading").fadeIn();
})

function Close() {
	$(".uploading").css("display", "none");
	$(".mask").css("display", "none");
}