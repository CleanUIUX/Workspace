$(document).ready(function(){
  $('.prd_list').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    dots: true,
    arrows : false,
    autoplaySpeed: 1000,
    speed: 1000,
    pauseOnHover: true,
  });

  $('.news_list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows : false,
    autoplaySpeed: 1000,
    speed: 1000,
    pauseOnHover: true,
  });
});