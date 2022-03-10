$('.slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 2.03,
    arrows: true,
    prevArrow:"<button class='slick-prev'>Prev</button>",
    nextArrow:"<button class='slick-next'>Next</button>",
    responsive: [
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

  $(document).ready(function() {
    $('.custom-slider').slick({
      dots: true,
      speed: 150,
      centerMode: true
    });
  });
  
  $(document).ready(function() {
    $('.slider').slick({
      dots: true,
      speed: 150,
      centerMode: true
    });
  });