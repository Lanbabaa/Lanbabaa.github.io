layui.use('colorpicker', function() {
	var $ = layui.$,
		colorpicker = layui.colorpicker;
	//常规使用
	colorpicker.render({
		elem: '#test1' //绑定元素
			,
		change: function(color) { //颜色改变的回调
			layer.tips('选择了：' + color, this.elem, {
				tips: 1
			});
		}
	});

	//表单赋值
	colorpicker.render({
		elem: '#test-form',
		color: '#1c97f5',
		done: function(color) {
			$('#test-form-input').val(color);
		}
	});
});

function showorclose() {
	$(".add-condition").fadeToggle(200);
	$(".mask").toggle();
}