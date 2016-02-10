define(function (require) {
    'use strict';
    require('jquery');
    require('weui_js');
    require('mobiscroll_datatime');
    var global = require('common/global'),
        http = require('common/http');
	console.log("cla");

    $(function () {
        var currYear = (new Date()).getFullYear();
        var opt={};
        opt.date = {preset : 'date'};
        //opt.datetime = { preset : 'datetime', minDate: new Date(2012,3,10,9,22), maxDate: new Date(2014,7,30,15,44), stepMinute: 5  };
        opt.datetime = {preset : 'datetime'};
        opt.time = {preset : 'time'};
        opt.default = {
            theme: 'android-ics light', //Ƥ����ʽ
            display: 'modal', //��ʾ��ʽ
            mode: 'scroller', //����ѡ��ģʽ
            lang:'zh',
            startYear:currYear - 10, //��ʼ���
            endYear:currYear + 10 //�������
        };

        $("#appDate").val('').scroller('destroy').scroller($.extend(opt['date'], opt['default']));
        var optDateTime = $.extend(opt['datetime'], opt['default']);
        var optTime = $.extend(opt['time'], opt['default']);
        //$("#appDateTime").mobiscroll(optDateTime).datetime(optDateTime);
        // $("#appTime").mobiscroll(optTime).time(optTime);

        //����ע�Ͳ���������Ĳ��������滻�ı�������ʽ
        //ϣ��һ���о���������Ѽ��Ҹ���QQҲ���ԣ�����Ҳ����Ⱥ 291464597 ��ӭ��Ⱥ����������������������档
        // ֱ��д��������
        //$("#scroller").mobiscroll(opt).date();
        // Shorthand for: $("#scroller").mobiscroll({ preset: 'date' });
        //���������������
        //{
        //preset: 'date', //��������--datatime --time,
        //theme: 'ios', //Ƥ������������android-ics light����android-ics����ios����jqm����sense-ui����sense-ui����sense-ui��
        //��wp light����wp��
        //mode: "scroller",//������ʽ��scroller����clickpick����mixed��
        //display: 'bubble', //��ʾ����modal����inline����bubble����top����bottom��
        //dateFormat: 'yyyy-mm-dd', // ���ڸ�ʽ
        //setText: 'ȷ��', //ȷ�ϰ�ť����
        //cancelText: '���',//ȡ����ť������
        //dateOrder: 'yymmdd', //������������и�
        //dayText: '��',
        //monthText: '��',
        //yearText: '��', //���������������
        //startYear: (new Date()).getFullYear(), //��ʼ���
        //endYear: (new Date()).getFullYear() + 9, //�������
        //showNow: true,
        //nowText: "����",  //
        //showOnFocus: false,
        //height: 45,
        //width: 90,
        //rows: 3}

    });

    $("#icon-menu").click(function(){
        $(this).children().toggleClass("hide");
    });
});
