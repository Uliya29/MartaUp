   $(function(){
    $('.header__slider').slick({
      infinity: true,
      autoplay: true,
      vertical: true,
      verticalSwiping: true,
      dots: true,
      arrows: false,
      dotsClass: 'header__slider-dots',
    });
  });

function openNav() {
  $('.header__nav').addClass('header__nav--open');
  $('body').addClass('body--no-scroll');
} 

function closeNav() {
  $('.header__nav').removeClass('header__nav--open');
  $('body').removeClass('body--no-scroll');
}

$(document).ready(function() {
// обработчики для открытия и закрытия навигации
  $('.header__nav-btn').click(function() {
    openNav();
  });
  $('.header__nav-close-btn').click(function() {
    closeNav();
  });

 })