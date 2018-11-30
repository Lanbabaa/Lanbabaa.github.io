$(".fa-eye-slash").click(function() {
	$(this).toggleClass("fa-eye-slash")
	$(this).toggleClass("fa-eye")
})
$("input[type=checkbox]").change(function() {
	$(this).parents('.list').toggleClass("check")
});