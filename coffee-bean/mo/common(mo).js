$(document).ready(function(){
  // slide
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

// 메뉴 클릭 시 오픈
var test = function(){
  if($(".gnb").hasClass("on")){
    $(".gnb").removeClass("on");
    $(".wrap").removeClass("test");
  }else{
    $(".gnb").addClass("on");
    $(".wrap").addClass("test");
  }
}
$(document).on("click", ".menu_trigger", function(){
  test();
});
