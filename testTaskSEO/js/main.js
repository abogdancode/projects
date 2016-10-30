/**
 * Created by AlexBogdan on 29.10.2016.
 */
var marginForNav = 50;
var swipeYOff = false;
$(document).ready(function(){
    var leftItem = $(".colLeft");
    var rightItem = $(".colRight");
    var container = $(".rowLeft");

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if(st<window.innerHeigh){
            $("#bgvid").css({
                "transform": "translate(0%,"+st /40+"%"
            } );

            $(".header .container").css({
                "transform": "translate(0%, -"+st /10+"%"
            } );
        }
    });

    $( window ).resize(function() {
        if(window.innerWidth>992){
            $("#home").css({
                "height": window.innerHeight-1+"px"
            } );
            /*to replace html OurCase*/
            for(var i=0; i<container.length; i++ ){
                $(container[i]).html("<div class=\" colLeft col-lg-6 col-md-6 wow fadeIn\" data-wow-delay=\"0.3s\">" +$(leftItem[i]).html() + "</div>"+" "+  $(rightItem[i]).html()+"<hr>");
                
            }
        }
        else{
            $("#home").css({
                "height": "auto"
            } );
            /*to replace html OurCase*/
            for(var i=0; i<container.length; i++ ){
                $(container[i]).html($(rightItem[i]).html() + " "+ $(leftItem[i]).html());
            }
        }

        $("#bgvid").css({
            "width": window.innerWidth+"px"
        } );
        if($("#bgvid")[0].clientHeight<window.innerHeight){
            $("#bgvid").css({
                "width": "auto"
            } );
        }
    });

    $("#bgvid").css({
        "width": window.innerWidth+"px"
    } );
    if($("#bgvid")[0].clientHeight<window.innerHeight){
        $("#bgvid").css({
            "width": "auto"
        } );
    }

    if(window.innerWidth>992){
        $("#home").css({
            "height": window.innerHeight-1+"px"
        } );

    }
    else{
        for(var i=0; i<container.length; i++ ){
            $(container[i]).html($(rightItem[i]).html() + " "+ $(leftItem[i]).html());
        }
    }

    $(".imgCont").mouseover(function () {
        var tag = $(this)[0];


            $(tag.firstElementChild).css({
                "display": "block"
            } );



    });

    $(".imgCont").mouseout(function () {
        $($(this)[0].firstElementChild).css({
            "display": "none"
        } );
    });

    $('ul.nav>li').click(function() {
        $('.navbar-collapse.in').removeClass('in');
    });

    /*to fix map issue*/
        $('#map')[0].addEventListener('touchstart', function (event) {
            initialPoint = event.changedTouches[0];
        }, false);


        $('#map')[0].addEventListener('touchmove', function (event) {
            event.preventDefault();
        }, false);

        $('#map')[0].addEventListener('touchend', function (event) {
            if (!swipeYOff) {
                finalPoint = event.changedTouches[0];
                getFinalPoint(initialPoint, finalPoint);
                setTimeout(swipeYOffTimePassed, 500);
            }
        }, false);

});



function getFinalPoint(initialPoint,finalPoint) {
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (yAbs > 80) {
        if (finalPoint.pageY < initialPoint.pageY) {
                $('html, body').animate({scrollTop: getOffset($('#map')[0]).top - marginForNav}, 500);
                swipeYOff = true;
        }
        else {

                $('html, body').animate({scrollTop: getOffset($('#map')[0]).top - window.innerHeight}, 500);
                swipeYOff = true;

        }

    }
}


function swipeYOffTimePassed() {
    swipeYOff = false;
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