//= require "./jquery-1.11.3.min.js"
//= require "./owl.carousel.js"

    $(document).ready(function() {
      
      $("#owl-demo").owlCarousel({
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          items : 1,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [2979,3]
      }); 
      
    });