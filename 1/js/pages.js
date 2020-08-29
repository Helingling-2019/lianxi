// JavaScript Document
$(function(){
$(".Max-lo li:last").css("border-right","none")
/*	$(".HYfors").find("ul").hide()*/
    $(".HYfor").click(function(){
	$(this).toggleClass("Mt")
	$(this).siblings(".Hy-icons").toggle();
});
})