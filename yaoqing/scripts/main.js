jQuery(window).load(function() { 
    jQuery("#bokeh").fadeOut(); 
    jQuery("#loading").delay(400).fadeOut("slow"); 
});
function play_music(){
    if ($('#mc_play').hasClass('on')){
      $('#mc_play audio').get(0).pause();
      $('#mc_play').attr('class','stop');
    }else{
      $('#mc_play audio').get(0).play();
      $('#mc_play').attr('class','on');
    }
    $('#music_play_filter').hide();
  }
  var app = (function(app, $){

  var currentScene = 0;

  $cache = {
    scenes: $('.scene')
  }

  function _constructor(){
    _bindEvents();
  }

  function _bindEvents(){
    $('body').swipe({
      swipe: function(event,direction) {
        if(direction == 'up') {
          slideHandle('down');
        } else if(direction == 'down') {
          slideHandle('up');
        }
      }
    });
    $('body, a, iframe').on('touchmove',function(e){
      e.stopPropagation();
      e.preventDefault();
    });
    $('a, iframe').on('mouseenter',function(e){
      e.stopPropagation();
      e.preventDefault();
    });
    $.browserSwipe({
      up: function(){
        slideHandle('up');
      },
      down: function(){
        slideHandle('down');
      }
    });
  }

  function slideHandle(direction) {
    switch(direction) {
      case 'up':
        if(currentScene > 0) {
          currentScene--;
          sceneHandle();
        }
      break;
      case 'down':
        if(currentScene < ($cache.scenes.length - 1)) {
          currentScene++;
          sceneHandle();
        }
      break;
    }
  }

  function sceneHandle(){
    $cache.scenes.each(function(){
      if($(this).index() == currentScene) {
        $(this).addClass('active').removeClass('after');
      } else if($(this).index() < currentScene){
        $(this).addClass('after').removeClass('active');
      } else {
        $(this).removeClass('after').removeClass('active');
      }
    });
  }

  return _constructor;

})(window.app || {}, jQuery)

$(document).ready(function(){
  app();
  $('#bmForm').submit(function(){
      if($('#name').val() == 0){
        showTips('请填写姓名！');
        return false;
      }
      if($('#name').val().length == 1 || $('#name').val().length >=5 ){
        showTips('请填写真实姓名！');
        return false;
      }
      if(!$('input[name="sex"]:checked').val())
      {
        showTips('请选择性别！');
        return false;
      }
      if($('#tel').val() == 0){
        showTips('请填写手机号码！');
        return false;
      }
      if(!$('#tel').val().match(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/)){
        showTips('手机号码格式不正确！');
        return false;
      }
      showTips('报名成功！',3000);
      return true;
    });
});
//表单验证提示
function showTips(txt,time,status)
{
  var htmlCon = '';
  if(txt != ''){
    if(status != 0 && status != undefined){
      htmlCon = '<div class="overtip"><div class="tipsBox ok">'+txt+'</div></div>';
    }else{
      htmlCon = '<div class="overtip"><div class="tipsBox error">'+txt+'</div></div>';
    }
    $('body').prepend(htmlCon);
    if(time == '' || time == undefined){
      time = 1500;
    }
    setTimeout(function(){ $('.overtip').remove(); },time);
  }
}