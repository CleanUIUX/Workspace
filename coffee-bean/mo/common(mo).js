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
var menuClick = function(){
  if($(".gnb").hasClass("on")){
    $(".gnb").removeClass("on");
    $(".wrap").removeClass("move");
  }else{
    $(".gnb").addClass("on");
    $(".wrap").addClass("move");
  }
}
$(document).on("click", ".menu_trigger", function(){
  menuClick();
});

// 서비스 클릭 시 동작
var serClick = function(){
  if($(".c_service").hasClass("open")){
    $(".c_service").slideUp(500, function(){
      $(".c_service").removeClass("open")
    });
  }else{
    $(".c_service").slideDown(500, function(){
      $(".c_service").addClass("open")
    });
  }
};

$(document).on("click", ".btn_service", function(){
  serClick();
});

// 서브 메뉴 클릭 시 오플
