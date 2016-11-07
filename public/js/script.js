$(document).ready(function(){

  // Nav Responsive
  $(".button-collapse").sideNav();

  // Scroll
  $('.arrow-top, .arrow-bottom, .move').click(function () {
    var page = $(this).attr('href');
    var speed = 1000;
    $('html, body').animate({
      scrollTop: $(page).offset().top
    }, speed);
    return false;
  });

  // Effet sur le scroll
  $(document).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $('.arrow-top').fadeIn('slow');
    }
    else {
      $('.arrow-top').fadeOut('slow');
    }
  });
});
