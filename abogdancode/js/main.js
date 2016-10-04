/**
 * Created by AlexBogdan on 16.07.2016.
 */

$(document).ready(function(){
var animate = true;
   transform();
        $(document).scroll(function () {
            if(animate){
                animate = transform();
            }
        });
});

function transform() {
    var s_top = $(window).scrollTop() + $(window).height() - 60;
    var yes = $('#portfolio').offset().top;
    if (s_top > yes) {
        $(".img-items-cont").addClass("animation-rotate-45");
        return false;
    }
    return true;
}