let winWidth = $(window).width(),
    winHeight = $(window).height(),
    getNeededHeight = ()=>{
      if(winHeight>700)
        return  700;
      else
        return winHeight;
    },
    neededHeight = getNeededHeight(),
    orderPanel = $('#orderPanel'),
    shoppingCart = $('.shoppingCart'),
    shoppingCartClosed = true,
    phoneValid = false,
    orderPanelResize = (orderPanel,neededHeight) => {
      orderPanel.height(neededHeight);
    };

  let unfixed = false;

let unfix = (footerOffset)=>{
  orderPanel.css({
    'position':'absolute',
    'top': footerOffset-neededHeight,
    'transform':'translate(0,0)'
  });
  unfixed = true;
};


let fix = ()=>{
  orderPanel.css({
    'position':'fixed'
  });
  if(winHeight<=700) {
    orderPanel.css({
      'top': '50%',
      'transform': 'translate(0,-50%)'
    });
  }else{
    orderPanel.css({
      'top': 0,
      'transform': 'translate(0,0)'
    });
  }
  unfixed = false;
};
let scrollStarter = ()=>{
  $(window).scroll(function() {
    let st = $(this).scrollTop(),
      footerOffset = $('footer')[0].offsetTop,
      marker = st+neededHeight;

    if(marker >= footerOffset && !unfixed)
      unfix(footerOffset);
    else
    if(marker <= footerOffset && unfixed)
      fix();
  });
};

if(winWidth>768)
  scrollStarter();


$( window ).resize(function()  {

  if($(window).width()!== winWidth){

    console.log('resize');
    console.log(orderPanel.width());
    winHeight = $(window).height();
    neededHeight = getNeededHeight();
    executeIterator();
    /*$('#extServicesList').height(neededHeight-75);*/
    orderPanelResize(orderPanel,neededHeight);
    winWidth = $(window).width();
    if(winWidth>=768)
      orderPanel.css('left','0');
    else
      orderPanel.css({
        'left':-orderPanel.width()+'px',
        'display': 'inherit'
      });
    if(winWidth>768)
      scrollStarter();
  }


});


$( window ).ready(function() {
  $('#containerForProducts').css('min-height',neededHeight-100);


  OrderPanelStarter();
  if(winWidth<768){
    orderPanel.css({'left':-orderPanel.width(), 'display':'inherit'},500);
  }

  orderPanelResize(orderPanel,neededHeight);
});

function OrderPanelStarter() {
  shoppingCart.click(()=>{
    if(shoppingCartClosed){
      orderPanel.animate({'left':0},500);
      shoppingCart.html('<span class="glyphicon glyphicon-remove"></span>');
      shoppingCart.css('color','#a80342');
      shoppingCartClosed = false;
    }else {
      orderPanel.animate({'left':-orderPanel.width()},500);
      shoppingCart.html('<span class="glyphicon glyphicon-shopping-cart"></span>');
      shoppingCart.css('color','#fff');
      shoppingCartClosed = true;
    }
  });
}

jQuery(function($) {

  $.mask.definitions['~']='[+-]';

  $('#date').mask('99/99/9999');

  $('#phone').mask('8(999) 999-9999',{
    completed: function(){ phoneValid = true; }
  });

  $('#phoneext').mask('(999) 999-9999? x99999');

  $('#tin').mask('99-9999999');

  $('#ssn').mask('999-99-9999');

  $('#product').mask('a*-999-a999');

  $('#eyescript').mask('~9.99 ~9.99 999');

});

function checkRequired(){
  let form_valid = (document.getElementById('name').value !== '');
  if(!form_valid || !phoneValid){
    alert('Введите верные данные');
    return false;
  }
  return true;
}
