/**
 * Created by AlexBogdan on 16.07.2016.
 */
$(window).scroll(function () {
    var st = $(this).scrollTop();
    $("#bgvid").css({
        "transform": "translate(0%,"+st /19+"%"
    } );

    $(".header .container").css({
        "transform": "translate(0%, -"+st /10+"%"
    } );
console.log(st);
});
