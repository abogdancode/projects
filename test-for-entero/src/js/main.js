$(document).ready(function(){
    let navUl = $('.navbar__nav-ul'),
        navBtn = $('.navbar__btn'),
        navSvg = $('.navbar__menu-btn');
    navBtn.click(()=>{
        navUl.toggleClass('_collapsed');
        navSvg.toggleClass('_collapsed');
    });
});
