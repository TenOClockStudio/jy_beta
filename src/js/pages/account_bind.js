define(function (require) {
    'use strict';
    require('jquery');
    require('weui_js');
    var global = require('common/global'),
        http = require('common/http');
    $('.bangding').click(function(){
		$.confirm("你确定解除绑定该微信号吗？", function() {
			$.alert("解除成功");
			$('.bangding').removeClass("acc-clo");
			$('.guanlian').addClass("acc-clo");
			}, function() {

			});
    });
    $(function  () {
		//获取短信验证码
		var validCode=true;
		$(".msgs").click (function  () {
			var a= $('.phone').val();
			if (a=="") {
				$.alert("请填写手机号码");
			}else{
				var time=60;
				var code=$(this);
				if (validCode) {
					validCode=false;
					code.addClass("msgs1");
				var t=setInterval(function  () {
					time--;
					code.html(time+"秒");
					if (time==0) {
						clearInterval(t);
					code.html("重新获取");
						validCode=true;
					code.removeClass("msgs1");

					}
				},1000)
				}
			}
			
		});
	});
	$('#submit').click(function(){
    	
    	var b = $('.code').val();

    	if (b=="") {
    		$.alert("请填写验证码");
    	}else{
    		$.alert("提交成功");
    	}
		
    });

    $('#reset').click(function(){
    	$('.phone').val("");
    	$('.code').val("");
    });

    $('.acc_btn').click(function(){
    	var c=$('.bd-number').val();
    	if (c=="") {
    		$.alert("请输入新的手机号码");
    	}else{
    		$.confirm("你确定更换为该手机号码吗？", function() {
				$('.bd-number').attr('placeholder',c);
			}, function() {});
    	}
    });
});
