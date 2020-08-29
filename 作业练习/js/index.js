$(document).ready(function(){
	$(".topic-2 ul li").last().css("border-width","0");
	$(".register-2 table tr td").eq(0).css("width","65px");
	$(".register-2 table tr td:even").css("text-align","right");
	$(".items ul li").last().css("border-width","0");
	$(".person ul li").eq(8).css({"border-top":"solid 1px #c6c8ca","border-bottom":"solid 1px #c6c8ca"});
	$(".person ul li").eq(9).css({"border-right-width":"0","width":"822px"});
	$(".person ul li").eq(10).css({"border-top":"solid 1px #c6c8ca","border-bottom":"solid 1px #c6c8ca","border-left":"solid 1px #c6c8ca","border-right-width":"0"});
		$(".list-a").each(function(){
			$(this).children().children("li").last().css("border-width","0");
		});
	$(".text-shu").eq(1).css("margin-left","15px");
	$(".at-fir").eq(1).css("margin-left","20px");
	$(".at-fir").eq(3).css("margin-left","20px");
	
	$(".at-fir span").live("click",function(){
		$(this).each(function(){$(this).parent().siblings().children(".at-fir span").removeClass("popup-list");});
	
		var top=$(this).offset().top;
		var left=$(this).offset().left;
		var height=$(this).height();
		var width=$(this).width();
		var top=top + height;
		$(this).addClass("popup-list");
		$(".edite").css("left",left);
		$(".edite").css("top",top);
		$(".edite").css("width",width);
		$(".edite").css("display","block");
		$(this).siblings(".list-a").toggleClass("dis");
		$(this).parents("body").find(".edite").toggleClass("dis");
		$(this).parent(".at-fir").siblings(".at-fir").children(".list-a").removeClass("dis");
	});
	
	
	$(".at-fir span").each(function(){}); 
	$(".list-a ul li").live("click",function(){
		//$(this).parent().parent().siblings(".at-fir span").html($(this).html());
		$(".at-fir span.popup-list").html($(this).html());
		$(".at-fir span.popup-list").removeClass("popup-list");	
		//$(popupListObject).html($(this).html());
		$(this).parents(".list-a").removeClass("dis");
		$(this).parents(".list-a").hide();
		
	});	
		 
$("body").each(function(){	
$(".button-add").click(function(){
	var tempDOM ="<div class='exper-2'><input type='text' class='text-shu' placeholder='公司名称' /><input type='text' class='text-shu' style='margin-left:20px;' placeholder='职位' /><div class='at-fir'><span>起始时间</span></div><div class='at-fir' style='margin-left:20px;'><span>结束时间</span></div></div>";
	//tempDOM = $(".content").html();
	$(this).parent().before(tempDOM);
	});	
	});

	$(".place-tot").last().css("border-width","0")
	$(".place-2").each(function(){
	$(this).children().children().last().css({"border":"solid 1px #dcdcdc","margin-top":"3px"});
	$(this).children().children().last().hover(function(){$(this).children().css({"background-color":"#fff","color":"#b2b2b2"});});
	});

	$(".most-2").each(function(){
	$(this).children().children(".most-2 ul li").last().css("border-width","0");
});
	  $(".attention-1 ul li").last().css("border-width","0");
$(".data-1").each(function(){	  
$(this).children().children().children().children(".data-1 table tr td").eq(0).css("width","230px");});
$(".sex-t ul li").click(function(){
	$(this).toggleClass("give-sex");
	$(this).siblings().removeClass("give-sex");
	});

$(".select ul").each(function(){$(this).children("li").last().css("border-width","0");});	

$(".select span").click(function(){
	$(this).siblings("ul").toggleClass("dis");
		$(this).parent(".select").parent().parent().siblings().children().children(".select").children("ul").removeClass("dis");
		$(this).parent(".select").parent().siblings().children(".select").children("ul").removeClass("dis");
  });	
$(".select ul li").click(function(){
	$(this).parent().parent().children("span").html($(this).html());
	$(this).parent().removeClass("dis");

	});
	
	$(".purpose ul li").click(function(){
		$(this).toggleClass("variety");
		
		});
		
$(".choice-2 ul li").click(function(){
	$(this).toggleClass("oning");
	$(this).siblings().removeClass("oning");
	});	
	
	});
	//结束了、
	
//创建项目手册重新
$(document).ready(function(){
$(".yes ul li").each(function(){
	$(this).click(function(){
		$(this).toggleClass("y-n");
		$(this).siblings().removeClass("y-n");
		});
	});
//浏览项目2
$(".app-2 ul li").eq(0).css("background-position","0 -36px");
$(".app-2 ul li").eq(1).css("background-position","-343px -77px");
$(".app-2 ul li").eq(2).css("background-position","0 -77px");	
	
//创建文化手册1
$(".creat-app table tbody tr td:even").css("text-align","right");
$(".creat-app").each(function(){
$(this).children().children().children().children().eq(0).css("width","130px");});

//文化手册
$(".creat-app table tbody tr td:odd").css("line-height","19px");

//基本信息
$(".sex ul li").click(function(){
		$(this).toggleClass("sex-con");
		$(this).siblings().removeClass("sex-con");
		});

});

//编辑我的职业档案
$(document).ready(function(){
	$(".button-edite").click(function(){
		$(this).parent().siblings(".per-in4").hide();
		$(this).parent().siblings(".online-edite").show();
		});
		
	$(".button-delete").click(function(){
		$(this).parent().parent().siblings(".experien-b").remove();
		$(this).parent().parent().siblings(".skill").remove();
		});
	$(".button-edite-1").click(function(){
		$(this).parent().parent().siblings(".experien-b").hide();
		$(this).parent().parent().siblings(".skill").hide();
		$(this).parent().parent().siblings(".facebook-2").hide();
		$(this).parent().siblings(".experien-b-edite").show();
		$(this).parent().parent().siblings(".experien-b-edite").show();
		$(this).parent().parent().siblings(".indent").show();
		$(this).parent().parent().siblings(".skill-edite").show();
		});
	});