var ancho = window.innerWidth;
var altura = window.innerHeight;
jQuery(document).ready(function ($) {
  if (ancho>767){
    $('#slider ul li').css({ 'width':ancho -15 + 'px', 'height':altura -30 + 'px' });
    $('#slider ul li img').css({ 'width':ancho -15 + 'px', 'height':altura - 30 + 'px' });
  }
  else{
      $('#slider ul li').css({ 'width': ancho + 'px'});
      $('#slider ul li img').css({ 'width': ancho + 'px'});
  }

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

      $('#slider ul li:last-child').prependTo('#slider ul');

      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };

      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };

      $('.control_prev').click(function () {
          moveLeft();
      });

      $('.control_next').click(function () {
          moveRight();
      });
  });
