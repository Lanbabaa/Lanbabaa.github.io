$(document).ready(function() {
			var form = layui.form,
				layer = layui.layer;
			var value = "";
			// select下拉框选中触发事件
			form.on("select(diantuceng)", function(data) {
				value = data.value // 获取选中的值
				if(value != "") {
					$("select[name='city1']").attr('disabled', false);
					form.render("select");
				} else {
					$("select[name='city1']").attr('disabled', true);
					form.render("select");
				}
			});
		});