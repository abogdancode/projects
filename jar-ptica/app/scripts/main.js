
let homeBg = $("#home"),
    carouselItem = $('.item'),
    neededHeight = $(window).height(),
    homeBgResize = (homeBg,neededHeight,carouselItem) => {
      homeBg.height(neededHeight);
      carouselItem.height(neededHeight);
};
$( window ).resize(()=> {
  homeBgResize(homeBg,neededHeight,carouselItem);
});
$( window ).ready(()=> {
  homeBgResize(homeBg,neededHeight,carouselItem);
  $('#myCarousel').carousel({
    interval: 5000
  });
});
