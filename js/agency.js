// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 52)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict
/*$(function () {
    var header = $('header');
    var backgrounds = [
      'url(../datarget.github.io/img/team/office.jpg)', 
      'url(../datarget.github.io/img/team/office2.jpg)',
      'url(../datarget.github.io/img/team/office3.jpg)'];
    var current = 0;

    function nextBackground() {
        header.css(
            'background-image',
        backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 6000);
    }
    setTimeout(nextBackground, 6000);
    header.css('background-image', backgrounds[0]);
});*/

$(document).ready(function(){
$(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
});
[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});

})
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}