$(function () {
  // slider
  $('.owl-carousel').owlCarousel({
    rtl: true
  });

  // scroll to top
  $('.scroll-up').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
});