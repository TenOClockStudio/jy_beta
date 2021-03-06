define(function (require) {
    'use strict';
    require('jquery');
    require('weui_js');
    //require('mobiscroll_datatime');
    var global = require('common/global'),
        http = require('common/http');

    //$(function () {
    //    var currYear = (new Date()).getFullYear();
    //    var opt={};
    //    opt.date = {preset : 'date'};
    //    //opt.datetime = { preset : 'datetime', minDate: new Date(2012,3,10,9,22), maxDate: new Date(2014,7,30,15,44), stepMinute: 5  };
    //    opt.datetime = {preset : 'datetime'};
    //    opt.time = {preset : 'time'};
    //    opt.default = {
    //        theme: 'android-ics light', //皮肤样式
    //        display: 'modal', //显示方式
    //        mode: 'scroller', //日期选择模式
    //        lang:'zh',
    //        startYear:currYear - 10, //开始年份
    //        endYear:currYear + 10 //结束年份
    //    };
    //
    //    $("#appDate").val('').scroller('destroy').scroller($.extend(opt['date'], opt['default']));
    //    var optDateTime = $.extend(opt['datetime'], opt['default']);
    //    var optTime = $.extend(opt['time'], opt['default']);
    //    //$("#appDateTime").mobiscroll(optDateTime).datetime(optDateTime);
    //    // $("#appTime").mobiscroll(optTime).time(optTime);
    //
    //    //下面注释部分是上面的参数可以替换改变它的样式
    //    //希望一起研究插件的朋友加我个人QQ也可以，本人也建个群 291464597 欢迎进群交流。哈哈。这个不能算广告。
    //    // 直接写参数方法
    //    //$("#scroller").mobiscroll(opt).date();
    //    // Shorthand for: $("#scroller").mobiscroll({ preset: 'date' });
    //    //具体参数定义如下
    //    //{
    //    //preset: 'date', //日期类型--datatime --time,
    //    //theme: 'ios', //皮肤其他参数【android-ics light】【android-ics】【ios】【jqm】【sense-ui】【sense-ui】【sense-ui】
    //    //【wp light】【wp】
    //    //mode: "scroller",//操作方式【scroller】【clickpick】【mixed】
    //    //display: 'bubble', //显示方【modal】【inline】【bubble】【top】【bottom】
    //    //dateFormat: 'yyyy-mm-dd', // 日期格式
    //    //setText: '确定', //确认按钮名称
    //    //cancelText: '清空',//取消按钮名籍我
    //    //dateOrder: 'yymmdd', //面板中日期排列格
    //    //dayText: '日',
    //    //monthText: '月',
    //    //yearText: '年', //面板中年月日文字
    //    //startYear: (new Date()).getFullYear(), //开始年份
    //    //endYear: (new Date()).getFullYear() + 9, //结束年份
    //    //showNow: true,
    //    //nowText: "明天",  //
    //    //showOnFocus: false,
    //    //height: 45,
    //    //width: 90,
    //    //rows: 3}
    //
    //});

    //$("#icon-menu").click(function(){
    //    $(this).children().toggleClass("hide");
    //});
    $("#btn-submit").click(function(){
        $.modal({
            title: "<h2 class='warning-title'><i class='icon-warning'></i>提示</h2>",
            text: "确认要交卷吗？",
            buttons: [
                { text: "<span class='modal-no'></span>", onClick: function(){
                    console.log(1)
                } },
                { text: "<span class='modal-yes'></span>", onClick: function(){
                    console.log(2);
                    $.closeModal();
                    $.modal({
                        title: "",
                        text: "<div><img src='../img/trust-tips.png' width='100%'  alt=''/><p>提交成功，正在计算得分，请稍后</p><p id='waiting-p'>页面将自动跳转，等待时间：5</p></div>",
                        buttons: [
                            { text: "<span class='modal-btn-wt' id='btn-wt'>若到时未自动跳转，请点击</span>", onClick: function(){
                                console.log(1);
                                $.closeModal();
                                $.modal({
                                    title: "<h2 class='modal-re-t'>试卷：2015江柔测试一</h2><p class='modal-re-p'>考试时间：2015-12-11 15:11:28</p>",
                                    text: "<p class='modal-sc'>本次得分：<em>72</em>分</p><img src='../img/mdal-img.png' width='auto' height='120px' alt=''/>",
                                    buttons: [
                                        { text: "<span class='modal-btn-ag'>再来一次</span>", onClick: function(){
                                            console.log(1);
                                            $.closeModal();
                                        } },{ text: "<span class='modal-btn-bk'>点击返回</span>", onClick: function(){
                                            console.log(1);
                                            $.closeModal();
                                        } }
                                    ]
                                });
                            } }
                        ]
                    });
                    setTimeout(function(){
                        if(!$("#waiting-p")){
                            return;
                        }
                        var time = 5;
                        var cycle;
                        var texting= function(){
                            time--;
                            if(time<0){
                                clearInterval(cycle);
                                console.log("002");
                                $("#btn-wt").trigger("click");
                                return;
                            }
                                $("#waiting-p").text("页面将自动跳转，等待时间："+time);
                        };
                        cycle = setInterval(texting,1000);
                    },1000);
                }}
            ]
        });
    });

    $("#top-icon-menu").click(function(){
        $('.top-trig').toggleClass("hide");
        $('.top-menu-list').toggleClass("hide");
    });
});
