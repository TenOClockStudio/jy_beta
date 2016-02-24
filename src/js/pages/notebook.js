define(function (require) {
    'use strict';
    require('jquery');
    var global = require('common/global'),
        http = require('common/http');
    //后台管理详情table切换
	$(".note-ul").find("li").click(function(){
	  $(this).css('background','#1FB5AC');
	  $(this).siblings().css('background','#95B85E');
	  var name = $(this).attr('li-link');
    $("#"+name).css('display','block');
    $("#"+name).siblings().css('display','none');
	 });
    $("#top-icon-menu").click(function(){
        $('.top-trig').toggleClass("hide");
        $('.top-menu-list').toggleClass("hide");
    });
    //查看详情特效
    $('.bac').find('.alg-r').click(function(){
        var $t = $(this);
        var $tp = $(this).parent().next();

        if ($tp.hasClass('note-sty')) {
            $tp.slideDown("slow");
            $t.text('收起回复');
            $tp.removeClass('note-sty');
        }else{
            $tp.slideUp("slow");
            $t.text('查看回复');
            $tp.addClass('note-sty');
        }
    });
});