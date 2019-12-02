
let slick = require('slick-carousel');

$(".product-slider").slick({
 
    // normal options...
    infinite: false,
   
    // the magic
    responsive: [{
   
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true
        }
   
      }, {
   
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
   
      }, {
   
        breakpoint: 300,
        settings: "unslick" // destroys slick
   
      }]
  });