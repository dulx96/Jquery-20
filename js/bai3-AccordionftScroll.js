$(function () {
    //xu ly thay doi mau
    $(".content").slideUp();
    $(".menu h3").click(function (event) {
        $(this).toggleClass("xanh");
        $(this).next().slideToggle(500);
        $("body").animate({scrollTop:$(this).offset().top},500);
    });

    // code phan phong to anh



});