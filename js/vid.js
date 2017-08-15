$(document).ready(function () {
    $(".dangnhap").animate({opacity: 0, marginLeft: -100});

    $("#dang_ky").click(function (evemt) {
        $(".dangnhap").animate({opacity: 1, marginLeft: 0});
        $(".dangky").animate({opacity: 0, marginLeft: -100});
    });

    $("#dang_nhap").click(function (evemt) {
        $(".dangky").animate({opacity: 1, marginLeft: 0});
        $(".dangnhap").animate({opacity: 0, marginLeft: -100});
    });
});