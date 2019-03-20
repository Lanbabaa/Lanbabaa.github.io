sub();
$(".layui-input").change(function(){
	sub();
});
function sub(){
	var dj = $(".list .price").text();
	var sum = $('.list .layui-input').val();
	var sub=dj * sum;
	$('.settlement .left .num').text(sum);
	$('.subtotal').text(sub);
	$('.main .settlement .right span .sum').text(sub)
}
