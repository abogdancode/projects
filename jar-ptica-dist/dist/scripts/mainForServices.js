"use strict";var winWidth=$(window).width(),neededHeight=$(window).height(),orderPanel=$("#orderPanel"),orderPanelResize=function(e,n){e.height(n)};$(window).scroll(function(){$(this).scrollTop()}),$(window).resize(function(){orderPanelResize(orderPanel,neededHeight)}),$(window).ready(function(){orderPanelResize(orderPanel,neededHeight),$(window).scrollTop()>250&&$("ul.nav>li").click(function(){$(".navbar-collapse.in").removeClass("in")})}),jQuery(function(e){e.mask.definitions["~"]="[+-]",e("#date").mask("99/99/9999"),e("#phone").mask("8(999) 999-9999"),e("#phoneext").mask("(999) 999-9999? x99999"),e("#tin").mask("99-9999999"),e("#ssn").mask("999-99-9999"),e("#product").mask("a*-999-a999"),e("#eyescript").mask("~9.99 ~9.99 999")});