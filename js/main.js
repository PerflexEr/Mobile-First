$(function () {
  $('.head__slider').slick({
    dots: true,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/nextArrow.svg" alt=" nextArrow"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prevArrow.svg" alt=" prevArrow"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {

        }
      },
      {
        breakpoint: 1024,
        settings: {

        }
      },
      {
        breakpoint: 768,
        settings: {

        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 320,
        settings: {

        }
      }
    ]
  });
});