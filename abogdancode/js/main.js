/**
 * Created by AlexBogdan on 16.07.2016.
 */

function AnimationConstr(className, offsetTop, index) {
    this.className = className;
    this.offsetTop = offsetTop;
    this.animationAlement = $('.'+className)[index];
    this.done = false;
}

AnimationConstr.prototype = {
    iterate: function() {
        if (!this.done){
            var scrollTop = $(window).scrollTop() + $(window).height()-marginForNav;
            var offsetTop = this.offsetTop;
            if (scrollTop > offsetTop) {
                this.animationAlement.classList.remove(this.className);
                this.done = true;
        }
        }
    }
    };

function fillingClassesArr(classElem,classArr,ClassConstr){
    for (var i = 0; i < $('.'+classElem).length ; i++) {
        classArr.push([]);
        classArr[i].push(new ClassConstr(classElem, getOffset($('.'+classElem)[i]).top, i));
    }
}

function loopForAnimate(animate) {
    for (var i = 0; i < animate.length; i++) {
        for (var j = 0; j < animate[i].length; j++) {
            animate[i][j].iterate();
        }
    }
}

function getOffset(elem) {
    if (elem.getBoundingClientRect) {
        return getOffsetRect(elem);
    } else {
        return getOffsetSum(elem);
    }
}

function getOffsetSum(elem) {
    var top=0, left=0;
    while(elem) {
        top = top + parseInt(elem.offsetTop);
        left = left + parseInt(elem.offsetLeft);
        elem = elem.offsetParent;
    }
    return {top: top, left: left}
}

function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docElem = document.documentElement;
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return { top: Math.round(top), left: Math.round(left) };
}

function imgResize(){
    var widthImg;
   if($(window).width()<=736&&$(window).height()<=414){
        widthImg = $(window).height()*0.4;
   } else{
        widthImg = ($(window).width()*-0.000260416+0.53333312)*$(window).width();
   }
    var widthImgCalc = widthImg*1.416666666666667;
    var marginImg = widthImg*0.2066666666666667;
    $('.img-items').css('width',widthImgCalc);
    $('.img-items').css('height',widthImgCalc);
    $('.img-items').css('margin-left',-marginImg );
    $('.img-items').css('margin-top',-marginImg );
    $('.img-items-cont').css('width',widthImg );
    $('.img-items-cont').css('height',widthImg );
    $('.item-image-cont').css('width',widthImg);
    $('.item-image-cont').css('height',widthImg);
}

function onFrameOffFun() {
        var onFrameOff = false;
        var scrollTop = $(window).scrollTop() + $(window).height()-marginForNav;
        var offsetTop = getOffset( $('#portfolio')[0]).top;
        if (scrollTop >= offsetTop*1.8) {
            onFrameOff = true;
        } else {
            onFrameOff = false;
        }
        return onFrameOff;

}
/*---------------------------------------- MAIN ----------------------------------------------------------------------*/
onFrameOff = false;
var swipeYOff = false;
var marginForNav = 50;
$(document).ready(function(){

    $('ul.nav>li').click(function() {
        $('.navbar-collapse.in').removeClass('in');
    });

    var initialPoint;
    var finalPoint;
    var anchorIndex = Math.round($(window).scrollTop()/($(window).height()-marginForNav));
    var maxAnchorIndex = Math.round(($(document).height()-marginForNav)/($(window).height()-marginForNav))-1;


    $('body')[0].addEventListener('touchstart', function (event) {
            initialPoint = event.changedTouches[0];
    }, false);


    $('body')[0].addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);

    $('body')[0].addEventListener('touchend', function (event) {
        if (!swipeYOff){
            finalPoint = event.changedTouches[0];
            getFinalPoint(anchorIndex,initialPoint,finalPoint,maxAnchorIndex);
            setTimeout(swipeYOffTimePassed, 500);
        }
    }, false);

    var animate =[];
    imgResize();
    fillingClassesArr('animation-rotate-45',animate,AnimationConstr);
    fillingClassesArr('animation-x-left',animate,AnimationConstr);
    fillingClassesArr('animation-increase',animate,AnimationConstr);
    fillingClassesArr('animation-x-right',animate,AnimationConstr);
    fillingClassesArr('animation-increase-font',animate,AnimationConstr);

    loopForAnimate(animate);

    $(document).scroll(function () {
        loopForAnimate(animate);
        onFrameOff = onFrameOffFun();
        anchorIndex = Math.round($(window).scrollTop()/($(window).height()-marginForNav));
    });

    $(window).resize(function(){
        imgResize();
    });
});

function getFinalPoint(index,initialPoint,finalPoint,maxAnchorIndex) {
        var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
        if (yAbs > 20) {
            if (finalPoint.pageY < initialPoint.pageY) {
                if(index!=maxAnchorIndex){
                    index +=1;
                    $('html, body').animate({scrollTop: getOffset($('.anchorForScroll')[index]).top - marginForNav}, 500);
                    swipeYOff = true;
                }
            }
            else {
                if(index!=0) {
                    index -= 1;
                    $('html, body').animate({scrollTop: getOffset($('.anchorForScroll')[index]).top - marginForNav}, 500);
                    swipeYOff = true;
                }
            }

        }
        return index;
}


function swipeYOffTimePassed() {
    swipeYOff = false;
}

