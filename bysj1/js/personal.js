$(function() {
	var time = new Date();
	var h = time.getHours();
	if(h < 6) {
		$('.main .content .container .user .portal-main .user-card .card .tip').text("凌晨好~");
	} else if(h < 9) {
		$('.main .content .container .user .portal-main .user-card .card .tip').text("早上好~")
	} else if(h < 12) {
		$('.main .content .container .user .portal-main .user-card .card .tip').text("上午好~")
	} else if(h < 14) {
		$('.main .content .container .user .portal-main .user-card .card .tip').text("中午好~")
	} else if(h < 17) {
		$('.main .content .container .user .portal-main .user-card .card .tip').text("下午好~")
	} else if(h < 19) {
		$('.main .content .container .user .portal-main .user-card .card .tip').text("傍晚好~")
	} else if(h < 22) {
		$('.main .content .container .user .portal-main .user-card .card .tip').text("晚上好~")
	} else {
		$('.main .content .container .user .portal-main .user-card .card .tip').text("午夜好~")
	}
	
})