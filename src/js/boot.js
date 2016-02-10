
requirejs.config({
    urlArgs: "v=0.0.1",
    baseUrl:"/",
    paths:{
        "jquery": "js/lib/jquery-2.1.4",
        "weui_js":"js/lib/jquery-weui",
        "common": "js/common",
        "circliful": "js/lib/jquery.circliful.min",
        "mobiscroll_datatime":"js/lib/mobiscroll_datetime/mobiscroll.custom-2.5.2.min"
        //"plugins": "common/plugins",
        //"templates": "templates",
        //"page" : "page"
    },
    shim: {
        'jquery':{'exports':'$'},
        "weui_js":{deps: ['jquery']},
        "circliful":{deps: ['jquery']},
        "mobiscroll_datatime":{deps: ['jquery']}
    }
});
