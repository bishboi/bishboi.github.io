$.fn.jQuerySimpleCounter = function(options) {
    var settings = $.extend(
      {
        start: 0,
        end: 100,
        easing: "swing",
        duration: 400,
        complete: ""
      },
      options
    );
  
    var thisElement = $(this);
  
    $({ count: settings.start }).animate(
      { count: settings.end },
      {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
          var mathCount = Math.ceil(this.count);
          thisElement.text(mathCount);
        },
        complete: settings.complete
      }
    );
  };
  
  $( document ).ready(function() {
    // Main variables
      var $aboutTitle = $('.about-myself .content h2');
      var $pcounter = $('.sectionClass')
      var $developmentWrapper = $('.development-wrapper');
      var developmentIsVisible = false;  
  
var flag=0;
$(window).scroll( function(){
  
      var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        /* ##### ABOUT MYSELF SECTION #### */
        if( bottom_of_window > ($aboutTitle.offset().top + $aboutTitle.outerHeight())){
            $('.about-myself .content h2').addClass('aboutTitleVisible');
          } 
        if( bottom_of_window > ($pcounter.offset().top + $pcounter.outerHeight()) && flag===0){
            $("#number1").jQuerySimpleCounter({ end: 12, duration: 2000 });
            $("#number2").jQuerySimpleCounter({ end: 19, duration: 2000 });
            $("#number3").jQuerySimpleCounter({ end: 159, duration: 1000 });
            $("#number4").jQuerySimpleCounter({ end: 24, duration: 1500 });
            flag=1;
        } 

        
      /* ##### EXPERIENCE SECTION #### */
  
        // Check the location of each element hidden */
        $('.experience .content .hidden').each( function(i){
  
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
  
            /* If the object is completely visible in the window, fadeIn it */
            if( bottom_of_window > bottom_of_object ){
  
              $(this).animate({
                'opacity':'1',
                'margin-left': '0'
              },600);
            }
        });
      /*###### SKILLS SECTION ######*/

      var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

      if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){
  
        $('.skills-bar-container li').each( function(){
  
          var $barContainer = $(this).find('.bar-container');
          var dataPercent = parseInt($barContainer.data('percent'));
          var elem = $(this).find('.progressbar');
          var percent = $(this).find('.percent');
          var width = 0;
  
          var id = setInterval(frame, 15);
  
          function frame() {
            if (width >= dataPercent) {
                clearInterval(id);
            } else {
              width++;
              elem.css("width", width+"%");
              percent.html(width+" %");
            }
          }
        });
        developmentIsVisible = true;
      }
    }); // -- End window scroll --
  });




