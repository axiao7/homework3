$(function(){
	var container = document.getElementById('container'),
	    allImg = container.getElementsByTagName('div')[0],
	    index = 0,
	    Timer = null;
	function getWidth(ele){
		var indexWidth = window.getComputedStyle ? window.getComputedStyle(ele,null).width: ele.currentStyle.width;
			//获取元素属性的兼容
		return parseInt(indexWidth);
	};
	var len = getWidth(allImg.getElementsByTagName('img')[0]);
	container.onmouseover = function () {
		clearInterval(playTimer);
	};
	
	container.onmouseleave = function () {
		playTimer = setInterval(next, 3000);
	};
	function startMove(iTarget) {
		if (Timer) {
            clearInterval(Timer);
        };
		Timer = setInterval(function () {
			doMove(iTarget);
		}, 30)	
	}

	function doMove (iTarget) {		
		var iSpeed = (iTarget - allImg.offsetLeft) / 10;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);		
		allImg.offsetLeft == iTarget ? clearInterval(Timer) : allImg.style.left = allImg.offsetLeft + iSpeed + "px";
	}

	function next() {
		if (index==4) {
			index = 0;
		}else {
			index++;
		}
		startMove(-(index * len));
	}
	playTimer = setInterval(next, 3000);
})