$(document).ready(function(){
  $('.main-slider__slider-container').slick({
    arrows:false,
    autoplay:true,
    // pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed:5000
  });

  $(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st<600){
      $('.main-slider__image').css({
        'transform': 'translate(-50%,'+ (-50 +st/19) +'%'
      } );

    }
  });
});
