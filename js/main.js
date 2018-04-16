$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('.header').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
});

$('.header').on('sticky-start', function () {
  $('.description').html('Welcome to my site!');
});

$('.header').on('sticky-end', function () {
  $('.description').html('Welcome! :)');
});

$('.work').sticky({
  topSpacing: 60,
  getWidthFrom: '.container',
  responsiveWidth: true
});


























