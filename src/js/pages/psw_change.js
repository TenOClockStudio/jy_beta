define(function (require) {
    'use strict';
    require('jquery');
    require('weui_js');
    var global = require('common/global'),
        http = require('common/http');
    $('#submit').click(function(){
    	var a = $('.psw').val();
    	var b = $('.psw1').val();
    	var c = $('.psw2').val();
    	if (a=="") {
    		$.alert("原密码不能为空");
    	}else if (b=="") {
    		$.alert("新密码不能为空");
    	}else if (c=="") {
    		$.alert("确认密码不能为空");
    	}else{
    		$.alert("修改密码成功");
    	}
		
    });
    $("#top-icon-menu").click(function(){
        $('.top-trig').toggleClass("hide");
        $('.top-menu-list').toggleClass("hide");
    });
});
