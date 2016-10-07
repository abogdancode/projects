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
            console.log ('do');
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
/*---------------------------------------- MAIN ----------------------------------------------------------------------*/
var marginForNav = 50;
$(document).ready(function(){
    var animate =[];
    
    fillingClassesArr('animation-rotate-45',animate,AnimationConstr);
    fillingClassesArr('animation-margin-left',animate,AnimationConstr);
    fillingClassesArr('animation-increase',animate,AnimationConstr);
    fillingClassesArr('animation-margin-right',animate,AnimationConstr);
    fillingClassesArr('animation-increase-font',animate,AnimationConstr);

    loopForAnimate(animate);

    $(document).scroll(function () {
        loopForAnimate(animate);
    });
});








