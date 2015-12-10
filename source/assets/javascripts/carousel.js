//= require "./jquery-1.11.3.min.js"
//= require "./owl.carousel.js"

    $(document).ready(function() {
      
      // alert("HELLO MARS");

      $("#owl-demo").owlCarousel({
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
      }); 
      
    });