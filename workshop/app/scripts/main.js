
$(document).ready(function() {
  $('a[href^="#"]').click(function(){
    try{
      var el = $(this).attr('href');
      $('html').animate({scrollTop: $(el).offset().top}, 1000);
    }
    catch(err){
      return false;
    }
    return false;
  });

});
