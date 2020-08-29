/**
 * Created by liusongjin on 15-4-4.
 */
$(function () {
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var contentItems = $("#content").find(".item");
        var currentItem = "";

        if (scrollTop+windowHeight==documentHeight) {
            currentItem= "#" + contentItems.last().attr("id");
        }else{
            contentItems.each(function () {
                var contentItem = $(this);
                var offsetTop = contentItem.offset().top;
                if (scrollTop > offsetTop - 152) {//此处的200视具体情况自行设定，因为如果不减去一个数值，在刚好滚动到一个div的边缘时，菜单的选中状态会出错，比如，页面刚好滚动到第一个div的底部的时候，页面已经显示出第二个div，而菜单中还是第一个选项处于选中状态
                    currentItem = "#" + contentItem.attr("id");
                }
            });
        }
        if (currentItem != $("#menu").find(".current-b").attr("href")) {
            $("#menu").find(".current-b").removeClass("current-b");
            $("#menu").find("[href=" + currentItem + "]").addClass("current-b");
        }
    });
});
 
$(function(){
	var x;
	x = 950;
	$(window).on('scroll',function(){
	var scroll_top = $(window).scrollTop();
	if(scroll_top > x){
                    $(".flow1").css({"position":"fixed","display":"block"});
                }else{
                    $(".flow1").css({"display":"none"});};
	});
	
	});

$(function(){
	var x;
	x = 420;
	$(window).on('scroll',function(){
	var scroll_top = $(window).scrollTop();
	if(scroll_top > x){
                    $(".flow2").css({"position":"fixed","display":"block"});
                }else{
                    $(".flow2").css({"display":"none"});};
	});
	
	});	
	

