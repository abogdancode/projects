"use strict";function checkRequired(){var e=""!==document.getElementById("name").value;return e&&phoneValid?(console.log(phoneValid),!0):(alert("Given data is incorrect"),!1)}var winWidth=$(window).width(),winHeight=$(window).height(),getNeededHeight=function(){return winHeight>700?700:winHeight},neededHeight=getNeededHeight(),orderPanel=$("#orderPanel"),shoppingCart=$(".shoppingCart"),shoppingCartClosed=!0,nameValid=!1,phoneValid=!1,orderPanelResize=function(e,n){e.height(n)},unfixed=!1,unfix=function(e){orderPanel.css({position:"absolute",top:e-neededHeight,transform:"translate(0,0)"}),unfixed=!0},fix=function(){orderPanel.css({position:"fixed",top:"50%",transform:"translate(0,-50%)"}),unfixed=!1};winWidth>768&&$(window).scroll(function(){var e=$(this).scrollTop(),n=$("footer")[0].offsetTop,i=e+neededHeight;i>=n&&!unfixed?unfix(n):i<=n&&unfixed&&fix()}),$(window).resize(function(){orderPanelResize(orderPanel,neededHeight)}),$(window).ready(function(){$("#containerForProducts").css("min-height",neededHeight-100),shoppingCart.click(function(){shoppingCartClosed?(orderPanel.animate({left:0},500),shoppingCart.html('<span class="glyphicon glyphicon-remove"></span>'),shoppingCart.css("color","#a80342"),shoppingCartClosed=!1):(orderPanel.animate({left:-orderPanel.width()+5},500),shoppingCart.html('<span class="glyphicon glyphicon-shopping-cart"></span>'),shoppingCart.css("color","#fff"),shoppingCartClosed=!0)}),orderPanelResize(orderPanel,neededHeight),$(window).scrollTop()>250&&$("ul.nav>li").click(function(){$(".navbar-collapse.in").removeClass("in")})}),jQuery(function(e){e.mask.definitions["~"]="[+-]",e("#date").mask("99/99/9999"),e("#phone").mask("8(999) 999-9999",{completed:function(){phoneValid=!0}}),e("#phoneext").mask("(999) 999-9999? x99999"),e("#tin").mask("99-9999999"),e("#ssn").mask("999-99-9999"),e("#product").mask("a*-999-a999"),e("#eyescript").mask("~9.99 ~9.99 999")});