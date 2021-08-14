// 02/03/21 22:04

$(window).on('load', function () {
  $('.preloader').fadeOut('slow'); // и скрываем сам блок прелоудера.
  $('.MCI, .ml, .post-wrap, .a, .main-link').fadeIn('slow'); // показываем блок с контентом
  $('.MCI, .ml, .post-wrap, .a, .main-link').css('opacity', '1');
});
