define(function (require) {
    'use strict';
    require('jquery');
    var global = require('common/global'),
        http = require('common/http');
	console.log("vedio");

    $(".video-nav .nav-ct").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var target = $(this).attr("targetid");
        $(".video-tab-wrap .video-ct").each(function(){
            $(this).addClass("hide");
            if(this.id===target){
                $(this).removeClass("hide");
            }
        });
    });
});
