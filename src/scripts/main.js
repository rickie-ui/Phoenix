AOS.init({
  easing: 'ease-in-out-sine',
});

$(document).on('click', '#switch_nav', function () {
  if ($('#nav').is(':visible')) {
    $('#nav').fadeOut('slow');

    $(this).html('<i class="pr-4 fal fa-bars"></i>');
  } else {
    $('#nav').fadeIn('slow');

    $(this).html('<i class="pr-4 fal fa-times"></i>');
  }
});

$(document).on('mouseenter', '#menu li', function () {
  $(this).removeClass('md:list-none');
});

$(document).on('mouseleave ', '#menu li', function () {
  $(this).addClass('md:list-none');
});
// load headers
$(function () {
  $('#header').load('header.html');
  $('#custom_header').load('custom_header.html');
  $('#menu_bar').load('menu.html');
});
//overview
$(document).on('click', '#open_menu', function () {
  $('#menu').show('slow');
});

$(document).on('click', '#close_menu', function () {
  $('#menu').hide('slow');
});
