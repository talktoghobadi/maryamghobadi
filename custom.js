$(function () {

  "use strict";

  var wind = $(window);

  

  /* smooth scroll
  -------------------------------------------------------*/
  $.scrollIt({

    upKey: 40,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 1500,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    
  });

  
  /* navbar scrolling background
  -------------------------------------------------------*/
  wind.on("scroll",function () {

      var bodyScroll = wind.scrollTop(),
          navbar = $(".navbar-default");

      if(bodyScroll > 300){

          navbar.addClass("nav-scroll");

      }else{

          navbar.removeClass("nav-scroll");
      }

  });


    
  /* typejs
  -------------------------------------------------------*/
  $('.info h3 span').typed({
    strings: ["Technical Writer","Researcher","Publicist"],
    loop: true,
    startDelay: 1000,
    backDelay: 2000
  });


  /* matchHeight
  -------------------------------------------------------*/
  $('.half').matchHeight({ property: 'min-height' });


  /* Progress Bars
  -------------------------------------------------------*/
  wind.on("scroll",function () {
    
      var bodyScroll = wind.scrollTop()

      if(bodyScroll > 500){

        $('#bar2').barfiller({
            // color of bar
            barColor: '#2e353e',
            // duration in ms
            duration: 2000
        });

        $('#bar3').barfiller({
            // color of bar
            barColor: '#2e353e',
            // duration in ms
            duration: 1600
        });

        $('#bar4').barfiller({
            // color of bar
            barColor: '#2e353e',
            // duration in ms
            duration: 1200
        });

        $('#bar5').barfiller({
            // color of bar
            barColor: '#2e353e'
        });
    }

  });


  /* owlCarousel
  -------------------------------------------------------*/
  $('.testimonel .owl-carousel').owlCarousel({

      items:1,
      mouseDrag:true,
      autoplay:true,
      smartSpeed:500

  });

      
  /* magnificPopup
  -------------------------------------------------------*/
  $('.portfolio .link').magnificPopup({

    delegate: 'a',
    type: 'image'

  });


  /* stellar
  -------------------------------------------------------*/
  wind.stellar();


  /* isotope
  -------------------------------------------------------*/
  $('.gallery').isotope({

    // options
    itemSelector: '.item-img'

  });


  var $gallery = $('.gallery').isotope({
    // options
  });

  
  /* filter items on button click
  -------------------------------------------------------*/
  $('.filtering').on( 'click', 'button', function() {

      var filterValue = $(this).attr('data-filter');

      $gallery.isotope({ filter: filterValue });

  });

  $('.filtering').on( 'click', 'button', function() {

      $(this).addClass('active').siblings().removeClass('active');

  });



  /* sparallax
  -------------------------------------------------------*/
  $('.parallax').sparallax();



  /* Preloader
    -------------------------------------------------------*/
  $(window).on("load",function (){

    $("#preloader").fadeOut(500);

  });

  $('#iconified').on('keyup', function() {
        var input = $(this);
        if(input.val().length === 0) {
            input.addClass('empty');
        } else {
            input.removeClass('empty');
        }
    });

  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator
  // contact form
 // contact form
 $('#contact-form').validator();
 
     $('#contact-form').on('submit', function (e) {
         if (!e.isDefaultPrevented()) {
             var url = "contact.php";
 
             $.ajax({
                 type: "POST",
                 url: url,
                 data: $(this).serialize(),
                 success: function (data)
                 {
                     var messageAlert = 'alert-' + data.type;
                     var messageText = data.message;
 
                     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                     if (messageAlert && messageText) {
                         $('#contact-form').find('.messages').html(alertBox);
                         $('#contact-form')[0].reset();
                     }
                 }
             });
             return false;
         }
     });

});


$(window).load(function(){
       
    /* isotope
    -------------------------------------------------------*/
    var $gallery = $('.gallery').isotope({});
    $('.gallery').isotope({
  
      // options
      itemSelector: '.item-img'
  
    });
  
    
    /* filter items on button click
    -------------------------------------------------------*/
    $('.filtering').on( 'click', 'button', function() {
  
      var filterValue = $(this).attr('data-filter');
  
      $gallery.isotope({ filter: filterValue });
  
      });
  
    $('.filtering').on( 'click', 'button', function() {
  
        $(this).addClass('active').siblings().removeClass('active');
  
    });
  
})