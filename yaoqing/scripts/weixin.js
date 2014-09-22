var dataForWeixin={
 
   appId: "",
 
   MsgImg: "http://wx.wb1688.com/resources/images/logo.png",
 
   TLImg: "http://wx.wb1688.com/resources/images/logo.png",
 
   url: "http://wx.wb1688.com/public/index?id=54088cf9f86ef2949927ab88",
 
   title: "2014电商服务创新论坛邀请函",
 
   desc: "2014第二届中国(深圳)！\n电子商务服务创新论坛，\n邀您共同参与！",
 
   fakeid: "",
 
   callback:function(){}
 
};
 
(function(){

    var onBridgeReady = function() {

        WeixinJSBridge.on('menu:share:appmessage', function(argv) {

            WeixinJSBridge.invoke('sendAppMessage', {

                "appid": dataForWeixin.appId, 

                "img_url": dataForWeixin.MsgImg, 

                "img_width": "120", 

                "img_height": "120", 

                "link": dataForWeixin.url, 

                "desc": dataForWeixin.desc, 

                "title": dataForWeixin.title

            }, function(res) {
                (dataForWeixin.callback)();
            });
        });

        WeixinJSBridge.on('menu:share:timeline', function(argv) {

            (dataForWeixin.callback)();

            WeixinJSBridge.invoke('shareTimeline',{

                "img_url": dataForWeixin.TLImg, 

                "img_width": "120", 

                "img_height": "120", 

                "link": dataForWeixin.url, 

                "desc": dataForWeixin.desc, 

                "title": dataForWeixin.title

            }, function(res) {
            });
        });

        WeixinJSBridge.on('menu:share:weibo', function(argv) {

            WeixinJSBridge.invoke('shareWeibo',{

                "content": dataForWeixin.title, 

                "url": dataForWeixin.url

            }, function(res){
                (dataForWeixin.callback)();
            });
        });

        WeixinJSBridge.on('menu:share:facebook', function(argv) {

            (dataForWeixin.callback)();

            WeixinJSBridge.invoke('shareFB', {

                "img_url": dataForWeixin.TLImg, 

                "img_width": "120", 

                "img_height": "120", 

                "link": dataForWeixin.url, 

                "desc": dataForWeixin.desc, 

                "title": dataForWeixin.title

            }, function(res) {
            });
        });
    };
 
    if (document.addEventListener) {

        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
     
    } else if (document.attachEvent) {

        document.attachEvent('WeixinJSBridgeReady'   , onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);
    }
})();