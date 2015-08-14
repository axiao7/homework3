Zepto(function ($) {
    var h = true;



	$('.part-third ul li').tap(function () {				
		$(this).addClass("on").siblings().removeClass("on");
	})
    

    //侧栏出现和消失
    $('.menu-click').tap(function () {
        $('.part-eight').css("display","block");
    	$('.part-seventh').css("width","50%"); 	
    })
    $('.for-close').tap(function () {
        $('.part-eight').css("display","none");
    	$('.part-seventh').css("width","0"); 	
    })
    $('.menu-list').bind("touchstart",function () {
    	var a = $(this).index();
    	// $(this).children().css("display","block");
    	if ($(this).find('.nav-second').css("display")=='none') {
    		$(this).find('.nav-second').css("display","block");
    		$($('.iconfont5')[a]).html("&#xf02a9;");
    	}else {
    		if (h) {
    			$(this).find('.nav-second').css("display","none");
    		    $($('.iconfont5')[a]).html("&#xe65e;");
    		}else {
    			h = true;
    		}
    		
    	}
    	
    	// $(this).siblings().find('ul').css("display","none");
    })
    $('.nav-second li').bind("touchstart",function () {
    	h = false;
    	var b = $(this).index();
    	// $(this).children().css("display","block");
    	$(this).find('.iconfont6').html("&#xf0054;").siblings().find('.iconfont6').html("");
    	
    	// $(this).siblings().find('ul').css("display","none");
    })
 //    $('.menu').bind("touchstart",function(){
	//     	$(this).find("i").eq(0).innerHTML = "&#xf02a9;";
	//     	$(this).find("ul").css("display","block");
	// });
	//  $('.menu ul li').bind("touchend",function(){
	//     	$(this).find("i").eq(0).innerHTML = "&#xe65e;";
	//     	$(this).find("ul").removeClass("for-on");
	// });

    // $('.nav-second').tap(function () {
    // 	$(this)[0].append('<i class="iconfont6">&#xf0054;</i>');
    // })

    // 导航栏的fixed随着高度的变化而变化
 //    function getHeight(ele){
	// 	var indexHeight = window.getComputedStyle ? window.getComputedStyle(ele,null).height: ele.currentStyle.height;
	// 		//获取元素属性的兼容
	// 	return parseInt(indexHeight);
	// };
    $(window).scroll(function(){
        var a = $(this).offset().top;
        console.log(a);
        var height = $('.part-first').height() + $('.part-second').height();
        console.log(height);
        // var height = 85;
        // if (a > height){
        //     $(".part-third").css("position","fixed");
        //     $(".part-third").css("top","0");
        // }else {
        // 	$(".part-third ul").css("position","fixed");
        // 	$(".part-third ul").css("top","0");
        // }
    });
})