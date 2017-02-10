var     intervalForCarousel;
let winWidth = $(window).width(),
    windowScrollTop = $(window).scrollTop(),
    homeBg = $('#home'),
    carouselItem = $('.item'),
    neededHeight = $(window).height(),
    navLogo = $('#nav-logo'),
    navLogoHeight = navLogo.height(),
    translateHeight = navLogoHeight*5,
    navH1 = $('#navH1'),
    navLogoSmallText = $('#logoSmallText'),
    myCarousel = $('#myCarousel'),
    wowElements = $('.wow'),
    translateOff = false,
    cycleOff = false,
    homeBgResize = (homeBg,neededHeight,carouselItem) => {
      homeBg.height(neededHeight);
      carouselItem.height(neededHeight);
    },
    logoReplace=null;


function cycleCarousel() {
  intervalForCarousel = setInterval(function(){
    myCarousel.carousel('next');
  },6000);
}

function carouselSwitcher(st) {
  switch (cycleOff) {
    case true:
      if(st<250){
        clearInterval(intervalForCarousel);
        cycleCarousel();
        cycleOff = false;
      }
      break;
    case false:
      if(st>250){
        clearInterval(intervalForCarousel);
        cycleOff=true;
      }
      break;
  }
}

if(winWidth>=768){
  logoReplace = (st) => {
    if(st<translateHeight){
      navLogo.css({
        'transform': 'translate('+st/8*-1+'%,'+st/5*-1+'%'} );
      navH1.css({
        'transform': 'translate('+st/10.2*-1+'%,0%'} );
      navLogoSmallText.css({
        'color': 'transparent'} );
    }else{
      navLogo.css({
        'display':'none'} );
      navH1.css({
        'transform': 'translate(0%,0%',
        'margin-left':'0'});
      translateOff=true;
    }
  }
} else{
  wowElements.removeAttr('data-wow-offset');
  wowElements.removeAttr('data-wow-delay');
}


  myCarousel.carousel({
    interval: false,
    pause: false
  });



$(window).scroll(function() {
  let st = $(this).scrollTop();
  if(!translateOff && logoReplace)
    logoReplace(st);
  carouselSwitcher(st);
});
$( window ).resize(function()  {
  homeBgResize(homeBg,neededHeight,carouselItem);
});
$( window ).ready(function() {

  homeBgResize(homeBg,neededHeight,carouselItem);
  $('body').css( 'visibility','visible');

  if(windowScrollTop==0) cycleCarousel();
  $('ul.nav>li').click(function() {
    $('.navbar-collapse.in').removeClass('in');
  });
});

