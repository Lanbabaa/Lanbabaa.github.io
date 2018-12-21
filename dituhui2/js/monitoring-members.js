function tips(e){
	$(".Tips"+e).fadeIn();
	setTimeout("$('.Tips"+e+"').fadeOut()",4000);
	var width=$('.Tips'+e).width()/2+20;
	$(".Tips"+e).css('left', '50%').css('left', '-='+width+'px');
}
$('.workzone .monitoring-content .add-box').click(function() {
	$(".addmember").fadeIn();
	$(".mask").fadeIn();
})
$('.addmember .invitedmembers .title i').click(function() {
	$(".addmember").fadeOut(100);
	$(".mask").fadeOut(100);
})
$('.addmember .searchmembers .teamUsers .User').mouseover(function(){
	var title=$(this).text();
  	$(this).attr('title',title);
});
