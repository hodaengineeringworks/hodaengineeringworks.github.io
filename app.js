$(".secondPart").hide();
$(".more").click(function() {
    if ($(this).hasClass("active")) {
        $(this).html("Read More").removeClass("active");
        $(this).prev(".secondPart").slideUp();
    } else {
        $(this).html("Read Less").addClass("active");
        $(this).prev(".secondPart").slideDown();
    }
})