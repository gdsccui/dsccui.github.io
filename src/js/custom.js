
$(window).on('load', function() {
  'use strict';
  $('#loading').addClass('hidden');
});

var $iframe = $('iframe'),
    src = $iframe.data('src');

if (window.matchMedia("(min-width: 720px)").matches) {
    $iframe.attr('src', src);
}else{
    $iframe.css('display', 'none');
}

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });

  AOS.init({
    easing: "ease",
    duration: 1200,
    once: false
  })

});

(function($) {
  'use strict';

  var navBar = $('.custom-menu'),
    navbarLinks = $('.custom-menu .nav-link');


  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
      $(navBar).addClass('navbar-is-sticky');
    } else {
      $(navBar).removeClass('navbar-is-sticky');
    }
  });

  $('.navbar-toggler').on('click', function(e) {
    $(this).toggleClass('menu-is-expanded');
  });

  $(document).on('click', '.navbar-collapse.show', function(e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
      $('.navbar-toggler').toggleClass('menu-is-expanded');
      // $('.Menu-Icon--Circle').css('transform', 'translateX(-50%) translateY(-50%) scale(1)');
    }
  });


  $(navbarLinks).on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });



  //initialize new hammer instance and swipe functionalities
var slider = new Hammer.Manager(document.getElementById('carouselExample'), { inputClass: Hammer.TouchInput});
var Swipe = new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL});
slider.add(Swipe);

//implement swipe action on the carousel
slider.on('swiperight swipeleft', function(e) {
  e.preventDefault();
  if (e.type == 'swiperight') {
    $(this).carousel('prev');
    checkitem();
  } else {
    $(this).carousel('next');
    checkitem();
  }
});


$('#carouselExample').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

  $('.js-tabs a').on('click', function(e) {
    e.preventDefault();
    $(this).tab('show');
  });


  $('[data-toggle="tooltip"]').tooltip();

})(jQuery);