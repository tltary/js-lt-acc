"use strict"

$(document).ready(function() {
  $('.js-lt-acc .accordion__item.active')
    .find('.accordion__content')
    .show(200, 'linear');
})

const accordion = $('.js-lt-acc');
const accordionBlock = accordion.find('.accordion__item');

accordionBlock.on('click', function() {
  const mainBlock = $(this).parents('.js-lt-acc');
  if ($(this).hasClass('active')) {
    $(this).toggleClass('active');
    $(this)
      .find('.accordion__content')
      .hide(200, 'linear')
    return false;
  }
  if (!mainBlock.data('multiple')) {
    mainBlock
      .find('.accordion__item')
      .removeClass('active');
    mainBlock
      .find('.accordion__item .accordion__content')
      .hide(200, 'linear');
  }
  $(this).toggleClass('active');
  $(this).find('.accordion__content').show(200, 'linear');
});
