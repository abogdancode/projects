let winWidth = $(window).width(),
    neededHeight = $(window).height(),
    orderPanel = $('#orderPanel'),
    orderPanelResize = (orderPanel,neededHeight) => {
      orderPanel.height(neededHeight);
    };

$(window).scroll(function() {
  let st = $(this).scrollTop();
});
$( window ).resize(function()  {
  orderPanelResize(orderPanel,neededHeight);
});
$( window ).ready(function() {
  orderPanelResize(orderPanel,neededHeight);

if($(window).scrollTop()>250)
  $('ul.nav>li').click(function() {
    $('.navbar-collapse.in').removeClass('in');
  });
});

