var japps = {};

$(function() {
    japps.init_menu();
    japps.showHide();


    var height_vid = $(window).height();

    var widths = $(window).width();

    if (widths/height_vid>1.777777777777778){
        $('video').css('width', widths);
    }

    /// for popup
    $('.open-popup-link').magnificPopup({
      type:'inline',
      midClick: true 
    });
        

    // for scroll 
    $("nav li.menuitem a.sct").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash); 
    });
        
    // video mute
    $('#vcontrol').click(function(){
    	var mutedata = $("video").prop('muted');
    	
    	if(mutedata){
            //new add
            $(this).css('background-image', 'url(./img/speaker.png)');
    		$("video").prop('muted', false); 	
    	}else{
            //new add
            $(this).css('background-image', 'url(./img/speaker-off.png)');
    		$("video").prop('muted', true); 
    	}
    	
    });
        
        
       

});

japps.init_menu = function () {
    $('.menujsbtn').prepend('<span style="opacity:0" />');
    $('.menujsbtn').hover(function() {
        $(this).children('span:first').stop().animate({ 'opacity':'0' },255);
    }, function() {
        $(this).children('span:first').stop().animate({ 'opacity':'0' },255);
    });

    $('.menujsopen').click(function(e) {

        e.preventDefault();
        var $openBtn = $(this).parent();
        var width = $openBtn.width();
        $openBtn.stop().animate({ 'right':-width, 'opacity':'0' },
            {
                duration:200,
                easing:'easeInOutCubic',
                complete: function() {
                    var currDelay = 0;
                    $openBtn.hide();
                    var $ul = $openBtn.parent().parent().find('ul');
                    for (var i=0; i < $ul.children('li').length; i++) {
                        $ul.css('display','block').children('li').eq(i).stop().delay(currDelay).animate(
                            { 'right':'0px', 'opacity':'1' },{ duration:200, easing:'easeInOutCubic' });
                        currDelay += 80;
                    }
                }
            })
    });

    $('.menuclosebtn').click(function(e) {
        e.preventDefault();
        var $ul = $(this).parent().parent();
        var currDelay = 0;
        for (var i=$ul.children('li').length-1; i >= 0; i--) {
            var width = $ul.children('li').width();
            $ul.show().children('li').eq(i).stop().delay(currDelay).animate({
                'right':-width,
                'opacity':'0'
            },{
                duration:200,
                easing:'easeInOutCubic',
                complete: function () {
                    if ($(this).is(':first-child')) {
                        $ul.hide();
                        var $openBtn = $ul.parent().parent().find('.menujsopen').parent().show();
                        $openBtn.stop().animate({ 'right': 0, 'opacity': '1'
                        }, { duration:200, easing: 'easeInOutCubic'
                        });
                    }
                }
            });
            currDelay += 80;
        }
    });
};


japps.showHide = function(){

    $('.viewmore a').click(function(e){
        e.preventDefault();
        var cls = $(this).attr('class');
        console.log(cls);
        if(cls == 'show'){
            $(this).html("View Less");
            $(this).removeClass('show');
            $(this).addClass('hides');
            $('#morecontent').slideDown(1000);
        }else{
            $(this).html("View More");
            $(this).removeClass('hides');
            $(this).addClass('show');
            $('#morecontent').slideUp(1000);
        }
    });


};


window.settings = {
    easing: 'easeInOutCirc'
}

function absolute(base, relative) {
    var stack = base.split("/"),
        parts = relative.split("/");
    stack.pop(); // remove current file name (or empty string)
                 // (omit if "base" is the current folder without trailing slash)
    for (var i=0; i<parts.length; i++) {
        if (parts[i] == ".")
            continue;
        if (parts[i] == "..")
            stack.pop();
        else
            stack.push(parts[i]);
    }
    return stack.join("/");
}

 

(function ($) {
    
    $(function () {

        var fixedLogoScroll = function () {
            var top = $(this).scrollTop();
            var windowHeight = $(window).height();
            var s1bHeight = $('.section-2').height();
            //console.log((windowHeight * .45) + 205);
            
           
                if (top > (windowHeight * .45) + 260) {
                    $('.section-2').removeClass('fixedbg');
                } else {
                    $('.section-2').addClass('fixedbg');
                }
            
        }

        
        /** Scroll Spying **/
        var dataPanel = '';
        var sections = $('section[data-panel]');

        var scrollActions = function () {
            fixedLogoScroll();
        }

        $(window).on('scroll', function () {
           
                scrollActions();
            
        });

        $(window).on('resize', function () {
            
                scrollActions();
            
        });

        setTimeout( function() {
            scrollActions();
        }, 100);

        /** Scroll To Top **/
        $('.scroll-up').on('click', function (e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, "slow", settings.easing);
        });

    });
})(jQuery);




