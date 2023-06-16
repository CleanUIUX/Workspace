 $(document).ready(function(){
    // 메뉴 호버 시 서브메뉴 등장
    $('.depth1 > li').mouseover(function(){
        $(this).find('.depth2').stop().slideDown();        
    });
    $('.depth1 > li').mouseleave(function(){
        $(this).find('.depth2').stop().slideUp();
    });
});

