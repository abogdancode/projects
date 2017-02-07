let winWidth = $(window).width(),
    homeBg = $('#home'),
    carouselItem = $('.item'),
    neededHeight = $(window).height(),
    navLogo = $('#nav-logo'),
    navLogoHeight = navLogo.height(),
    translateHeight = navLogoHeight*5,
    navH1 = $('#navH1'),
    navLogoSmallText = $('#logoSmallText'),
    myCarousel = $('#myCarousel'),
    translateOff = false,
    cycleOff = false,
    homeBgResize = (homeBg,neededHeight,carouselItem) => {
      homeBg.height(neededHeight);
      carouselItem.height(neededHeight);
    },
    logoReplace=null,
    carouselSwitcher = (st) => {
      switch (cycleOff) {
        case true:
          if(st<250){
            myCarousel.carousel('cycle');
            cycleOff = false;
            console.log('play');
          }
          break;
        case false:
          if(st>250){
            myCarousel.carousel('pause');
            cycleOff=true;
            console.log('pause');
          }
          break;
      }
    },
    carouselPause = ()=>myCarousel.carousel('pause');

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
}

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
  myCarousel.carousel({
    interval: 4000,
    pause: false
});

if($(window).scrollTop()>250)
  setTimeout(carouselPause, 100);

  $('ul.nav>li').click(function() {
    $('.navbar-collapse.in').removeClass('in');
  });
});

