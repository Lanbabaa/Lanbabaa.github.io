$('.CooperationCom .Cooperation .part .people .Users .all').click(function() {
	if($(this).siblings(".user-list").hasClass('min')) {
		$(this).siblings(".user-list").removeClass('min');
		$(this).find('i').addClass('fa-caret-up');
		$(this).find('span').text('收起');
	} else {
		$(this).siblings(".user-list").addClass('min');
		$(this).find('i').removeClass('fa-caret-up');
		$(this).find('span').text('展开');
	}
})
$('.CooperationCom .Cooperation .part .people .Users .user-list .User .add').click(function() {
	$(".addmember").fadeIn();
	$(".mask").fadeIn();
})
$('.addmember .invitedmembers .title i').click(function() {
	$(".addmember").fadeOut(100);
	$(".mask").fadeOut(100);
})
$('.workzone .MapCooperation .CooperationCom .title .layui-btn').click(function() {
	$(".create-roles").fadeIn();
	$(".mask").fadeIn();
})
$('.create-roles .title i').click(function() {
	$(".create-roles").fadeOut(100);
	$(".mask").fadeOut(100);
})
$(function() {
	num();
})

function num() {
	var num;
	num = $('.CooperationCom .Cooperation .part .people .Users .user-list').map(function() {
		return $(this).find(".User").length - 1;
	}).get().join(',');
	var arr = num.split(',');
	for(var i in arr) {
		$('.workzone .MapCooperation .CooperationCom .Cooperation .part .title .num:eq(' + i + ')').text('(  ' + arr[i] + ' )')
	}
}
$('.addmember .invitedmembers .footer input[type=button]').click(function() {
	num();
})
$('.create-roles .role-list .role-item').click(function() {
	$('.create-roles').css('display', 'none');
	$('.mask').css('display', 'none');
})
$('.create-roles .role-list .item-0').click(function() {
	$('.workzone .Map-role').css('display', 'block').siblings().css('display', 'none');
})
$('.create-roles .role-list .item-1').click(function() {
	$('.workzone .Layer-role').css('display', 'block').siblings().css('display', 'none');
})
$('.create-roles .role-list .item-2').click(function() {
	$('.workzone .Sublayer-role').css('display', 'block').siblings().css('display', 'none');
})
$('.create-roles .role-list .item-3').click(function() {
	$('.workzone .Business-flow-role').css('display', 'block').siblings().css('display', 'none');
})
$('.workzone .New-role .header input[type=button]').click(function() {
	$('.New-role').css('display', 'none').siblings().css('display', 'block');
})
$(function() {
	//hover()方法
	var i = 0;
	$('.workzone .MapCooperation .CooperationCom .Cooperation .part .people .Users .User').hover(function() {
		var height = $(this).offset().top;
		var name = $(this).find('.userName').text();
//		var src= $(this).find('img')[0].src;
//		alert(src)
		if($(this).find('.add').length == 0) {
			if(height <= 650) {
				$(this).append('<div class="user-detail">' +
					'<div class="triangle"></div>' +
					'<div class="header">' +
					'<div class="user-photo"></div>' +

					'<div class="picText">' +
					'<div class="I">' + name + '</div>' +
					'</div>' +
					'</div>' +
					'	<div class="item">' +
					'<div class="I">' +
					'	<span>角色</span>' +
					'</div>' +
					'</div>' +
					'<div class="item">' +
					'	<div class="I">' +
					'	<span>性别</span>' +
					'	</div>' +
					'</div>' +
					'<div class="item">' +
					'<div class="I">' +
					'	<span>电话</span>' +
					'</div>' +
					'</div>' +
					'	<div class="item">' +
					'<div class="I">' +
					'<span>日期</span>' +
					'</div>' +
					'	</div>' +
					'</div>')
			} else {
				$(this).append('<div class="user-detail user-detail2">' +
					'<div class="triangle triangle2"></div>' +
					'<div class="header">' +
					'<div class="user-photo"></div>' +

					'<div class="picText">' +
					'<div class="I">' + name + '</div>' +
					'</div>' +
					'</div>' +
					'	<div class="item">' +
					'<div class="I">' +
					'	<span>角色</span>' +
					'</div>' +
					'</div>' +
					'<div class="item">' +
					'	<div class="I">' +
					'	<span>性别</span>' +
					'	</div>' +
					'</div>' +
					'<div class="item">' +
					'<div class="I">' +
					'	<span>电话</span>' +
					'</div>' +
					'</div>' +
					'	<div class="item">' +
					'<div class="I">' +
					'<span>日期</span>' +
					'</div>' +
					'	</div>' +
					'</div>')
			}
		}

	}, function() {
		$('.workzone .MapCooperation .CooperationCom .Cooperation .part .people .Users .User .user-detail').remove();
	});
});
$('.modal-content .Dips .title .layui-icon-close').click(function(){
	$('.modal-content').fadeOut(100);
	$('.mask').fadeOut(100);
})
$('.CooperationCom .Cooperation .part .people .role').click(function(){
	$('.modal-content').fadeIn();
	$('.mask').fadeIn();
})
$('.addmember .invitedmembers .footer input[type=button]').click(function(){
	var Length = $('.addmember .invitedmembers .con .tel .phonenumber').val();
	if (Length.length != 11) {
		$('.addmember .invitedmembers .con .tel .phonenumber').css('border-bottom','2px solid #FF5722');
		$('.addmember .invitedmembers .con .tel .tips .mes').fadeIn();
	} else{
		
	}
})
