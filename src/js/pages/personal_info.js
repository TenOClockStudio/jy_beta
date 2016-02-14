define(function (require) {
    'use strict';
    require('jquery');
    require('weui_js');
    require('mobiscroll_datatime');
    var global = require('common/global'),
        http = require('common/http');
    $(function () {
		var currYear = (new Date()).getFullYear();
	    var opt={};
	    opt.date = {preset : 'date'};
	    //opt.datetime = { preset : 'datetime', minDate: new Date(2012,3,10,9,22), maxDate: new Date(2014,7,30,15,44), stepMinute: 5  };
	    opt.datetime = {preset : 'datetime'};
	    opt.time = {preset : 'time'};
	    opt.default = {
	        theme: 'android-ics light', //皮肤样式
	        display: 'modal', //显示方式
	        mode: 'scroller', //日期选择模式
	        lang:'zh',
	        startYear:currYear - 10, //开始年份
	        endYear:currYear + 10 //结束年份
	    };

	    $("#appDate").val('').scroller('destroy').scroller($.extend(opt['date'], opt['default']));
	    var optDateTime = $.extend(opt['datetime'], opt['default']);
	    var optTime = $.extend(opt['time'], opt['default']);
    });
    $('#submit').click(function(){
    	var a = $('.per1').val();
    	var b = $('.per2').val();
    	var c = $('.per3').val();
    	var d = $('.per4').val();
    	if (a=="") {
    		$.alert("昵称不能为空");
    	}else if (b=="") {
    		$.alert("生日不能为空");
    	}else if (c=="") {
    		$.alert("QQ不能为空");
    	}else if (d=="") {
    		$.alert("邮箱不能为空");
    	}else{
    		$.alert("提交成功");
    	}
		
    });
    $('#reset').click(function(){
    	$('.per1').val("");
    	$('.per2').val("");
    	$('.per3').val("");
    	$('.per4').val("");
    });
    $("#top-icon-menu").click(function(){
        $('.top-trig').toggleClass("hide");
        $('.top-menu-list').toggleClass("hide");
    });
});
