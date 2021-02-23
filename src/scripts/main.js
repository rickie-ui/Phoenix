AOS.init({
  easing: 'ease-in-out-sine',
});

$(document).on('click', '#switch_nav', function () {
  if ($('#nav').is(':visible')) {
    $('#nav').fadeOut('slow');

    $(this).html('<i class="pr-4 fa fa-bars"></i>');
  } else {
    $('#nav').fadeIn('slow');

    $(this).html('<i class="pr-4 fas fa-times"></i>');
  }
});

$(document).on('mouseenter', '#menu li', function () {
  $(this).removeClass('md:list-none');
});

$(document).on('mouseleave ', '#menu li', function () {
  $(this).addClass('md:list-none');
});

$(document).on('click', 'html', function () {
  $(this).css({ 'scroll-behavior': 'smooth' });
});

// load headers
$(function () {
  $('#header').load('header.html');
  $('#custom_header').load('custom_header.html');
  $('#menu_bar').load('menu.html');
});
//New menu
function openNav() {
  document.getElementById('menu').style.width = '300px';
}

function closeNav() {
  document.getElementById('menu').style.width = '0';
  document.getElementById('menu').style.width = '';
}
//accordion
$(document).on('click', '#dropdown', function () {
  $('#accordion').toggle('slow');
});
//data tables
$(document).ready(function () {
  $('#level_1,#level_2, #level_3,#pledges,#transactions').DataTable({
    columnDefs: [
      {
        targets: '_all',
        className: 'dt-head-left',
      },
    ],
  });
});
