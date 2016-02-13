$(document).ready(function () {
    
    /***enable sticky navigation menu***/
    $('.js-features-section').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
    
    /***scroll to sign-up section***/
    $('.js-scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js-sign-up').offset().top - 60
        }, 1000);
    });
    
    /***scroll to features section***/
    $('.js-scroll-to-features').click(function () {
        $('html, body').animate({
            scrollTop: $('.js-features-section').offset().top - 60
        }, 1000);
    });
    
    /***naviagation scroll***/
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 60
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /***features animation***/
    $('.js-features-section').waypoint(function (direction) {
        $('.js-animate-features').addClass('animated fadeIn');
    }, {
        offset: '200px'
    });
    
    /***iphone animation***/
    $('.js-works-section').waypoint(function (direction) {
        $('.js-animate-works-phone').addClass('animated fadeInLeft');
    }, {
        offset: '400px'
    });
    
    /***works steps animation***/
    $('.js-works-section').waypoint(function (direction) {
        $('.js-animate-works-steps').addClass('animated fadeInRight');
    }, {
        offset: '400px'
    });
    
    
    
});