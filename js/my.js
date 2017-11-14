/*
* @Author: Lenovo
* @Date:   2017-08-07 10:26:35
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-12 16:52:11
*/

'use strict';
$(function(){
	var num=0;
	var timer;
	$('.screen1').children('.title').removeClass('no');
	$('.side li').click(function(event) {
		/* Act on the event */
		 num=$(this).index();
		 $('section').animate({'top':-100*num+'%'}, 500);
		 $(this).addClass('current').siblings('li').removeClass('current');
		 $('section>div').eq(num).children('.title').removeClass('no').parent().siblings('div').children('.title').addClass('no');
	});

	$('.music').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('music');
		var i=$(this).hasClass('music');
		if(i==true){
			$('audio').get(0).play();
		}else{
			$('audio').get(0).pause();
		}
	});

	$(document).mousewheel(function(e,d){
		clearTimeout(timer);
		timer=setTimeout(function(){
			num=num-d;
			if(num>6){
				num=6
			}
			if(num<0){
				num=0
			}
			$('section').animate({'top':-100*num+'%'}, 500);
		$('.side li').eq(num).addClass('current').siblings('li').removeClass('current');
			 $('section>div').eq(num).children('.title').removeClass('no').parent().siblings('div').children('.title').addClass('no');
		},100)
	})



	

})