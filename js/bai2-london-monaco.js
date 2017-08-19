$(function () {
    $("nav ul li:nth-child(1) a").on("click",function (event) {
        event.preventDefault();
        $("body").animate({scrollTop:$("#c1").offset().top},1000,"easeOutBack");
        });
    $("nav ul li:nth-child(2) a").on("click",function (event) {
        event.preventDefault();
        $("body").animate({scrollTop:$("#c2").offset().top},1000,"easeOutBack");
        });
    $("nav ul li:nth-child(3) a").on("click",function (event) {
        event.preventDefault();
        $("body").animate({scrollTop:$("#c3").offset().top},1000,"easeOutBack");
        });
    $("nav ul li:nth-child(4) a").on("click",function (event) {
        event.preventDefault();
        $("body").animate({scrollTop:$("#c4").offset().top},1000,"easeOutBack");
        });
    $("button").on("click",function (event) {
        event.preventDefault();
        $("body").animate({scrollTop:0},2000,"easeOutCubic");
    });
    if($(window).scrollTop < 2000) {
        document.querySelector("button").style.display = "none";
    }
    else
        document.querySelector("button").style.display = "fixed";

});
