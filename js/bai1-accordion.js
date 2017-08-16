
/* simple */
// $(function () {
//     $(".one-block > p").slideUp();
//
//     $(".one-block h3").click(function () {
//         $(this).next().slideToggle();
//         $(this).toggleClass("slide-down");
//     });
// });

/* advanced */

var toggle_p = document.querySelectorAll(".one-block p");
toggle_p.forEach(function(item) {
    item.style.display = "none";
});

$(".one-block h3").click(function () {
    $(".one-block > p").slideUp();
    if($(this).hasClass("slide-down")){
        $(this).removeClass("slide-down");
    }
   else {
        $(".one-block h3").removeClass("slide-down");
        $(this).addClass("slide-down");
        $(this).next().slideDown();
    }
});


