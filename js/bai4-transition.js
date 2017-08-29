$(function () {
    // $(".load-more").slideUp(0);
    TweenMax.staggerFrom($(".row .container1 figure"),0.5,{bottom:100,opacity:0},0.3);
    $("#loadmore-button").click(function () {
        $(".load-more").slideDown(500);
        $("body").animate({scrollTop:$("#loadmore-button").offset().top},500);
        TweenMax.staggerFrom($(".load-more figure"),0.5,{top:100,opacity:0},0.3);
    });

});
