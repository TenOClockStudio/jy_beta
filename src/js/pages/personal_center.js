define(function (require) {
    'use strict';
    require('jquery');
    require('circliful');
    var global = require('common/global'),
        http = require('common/http');
    //百分比
	$('#myStat1').circliful();
	$('#myStat2').circliful();

	$("#top-icon-menu").click(function(){
        $('.top-trig').toggleClass("hide");
        $('.top-menu-list').toggleClass("hide");
    });
});
