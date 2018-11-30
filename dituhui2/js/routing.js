$(".ant-tabs-nav div").click(function() {
	$(this).removeClass("carorbike")
	$(this).siblings().addClass("carorbike");
})
layui.use('form', function() {
	var form = layui.form;
	form.on('radio(aaa)', function(data) {

		if($('.layui-input-block input[name="route"]:checked ').val() == "多路线规划") {
			$(".number").css("display", "block");
		} else {
			$(".number").css("display", "none");
		}
		form.render();
	});
});