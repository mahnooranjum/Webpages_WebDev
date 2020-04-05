$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-skills').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '40px;'
    });

    /* Scroll on buttons */
    $('.js--scroll-to-projects').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-projects').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-repertoire').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-repertoire').offset().top}, 1000); 
    });
    
    /*Nav*/
    
        $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({ 
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    $('.js--animate-1').waypoint(function(direction){
        $('.js--animate-1').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    
    $('.js--animate-2').waypoint(function(direction){
        $('.js--animate-2').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    
    $('.js--animate-3').waypoint(function(direction){
        $('.js--animate-3').addClass('animated slideInUp');
    }, {
        offset: '60%'
    });
    
    $(".js--nav").click(function(){
        var nav = $(".js--main");
        var icon = $(".js--nav i")
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');            
        }
    }) 

});
    /*
    https://dimsemenov.com/plugins/magnific-popup/
    https://iamceege.github.io/tooltipster/
    http://ch-ny.com/content/themes/bridge-child/js/libs/maplace.js/
    https://steven.codes/typerjs/
    https://www.thepetedesign.com/demos/onepage_scroll_demo.html
    
    https://www.javascripting.com/
    */