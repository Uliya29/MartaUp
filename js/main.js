$(function(){
  $('.header__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    dots: true,
    arrows: false,
    dotsClass: 'header__slider-dots',
  });
});