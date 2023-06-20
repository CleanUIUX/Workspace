 $(document).ready(function(){
    // 메뉴 호버 시 서브메뉴 등장
    $('.depth1 > li').mouseover(function(){
        $(this).find('.depth2').stop().slideDown();        
    });
    $('.depth1 > li').mouseleave(function(){
        $(this).find('.depth2').stop().slideUp();
    });

    // prd-슬라이더
    $('.prd_list').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        dots: true,
        arrows : false,
        autoplaySpeed: 2000,
        speed: 1000,
      });

    $('.news_list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows : false,
        autoplaySpeed: 2000,
        speed: 2000,
    });
});

