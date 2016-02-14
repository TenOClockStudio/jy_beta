define(function (require) {
    'use strict';
    require('jquery');
    var global = require('common/global'),
        http = require('common/http');
	$("#top-icon-menu").click(function(){
        $('.top-trig').toggleClass("hide");
        $('.top-menu-list').toggleClass("hide");
    });
});
