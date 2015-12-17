$(document).ready(function(){
  $('.bxslider').bxSlider();
});


$('a[href^="#"]').on('click',function(e){
var target_position = $(this.hash).offset().bottom; // целевая позиция скролла
$('body,html').animate({'scrollTop':target_position},550); // анимируем прокрутку
});