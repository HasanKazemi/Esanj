$(function () {
    $(".faq-header").click(function () {
        if ($(this).next().css("display") === "none") {
            $(this).css({ color: "#45c4a9" });
            $(this).children("i").removeClass("fa-plus").addClass("fa-minus");
            $(this).next().slideDown(500);
        } else {
            $(this).parent(".faq-item").css("border", "1px solid #ccc");
            $(this).css({ color: "black" });
            $(this).children("i").removeClass("fa-minus").addClass("fa-plus");
            $(this).next().slideUp(500);
        }
    });

});
