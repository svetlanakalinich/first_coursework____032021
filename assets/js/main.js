$(document).ready(function(){
  $('.header-navbar__btn').on('click', function(){
      $(this).toggleClass('active');
      $('.header-navbar__list').stop(true, true) .slideToggle(500);
  });
});

//$('.header-navbar__list').stop(true, true).fadeToggle(500);

