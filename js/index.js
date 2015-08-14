Zepto(function ($) {
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
    $('.menu').tap(function () {
    	// var a = $(this).index();
    	// $(this).first().css("display","block");
    	// if ($('.nav-second').css("display")=='none') {
    		// $('.nav-second').css("display","block");
    	// }else {
    	// 	$('.nav-second').css("display","none");
    	// }
    	
    	// $(this).siblings().find('ul').css("display","none");
    })

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