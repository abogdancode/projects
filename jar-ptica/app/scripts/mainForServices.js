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

jQuery(function($) {

  $.mask.definitions['~']='[+-]';

  $('#date').mask('99/99/9999');

  $('#phone').mask('8(999) 999-9999');

  $('#phoneext').mask('(999) 999-9999? x99999');

  $('#tin').mask('99-9999999');

  $('#ssn').mask('999-99-9999');

  $('#product').mask('a*-999-a999');

  $('#eyescript').mask('~9.99 ~9.99 999');

});
