$(document).ready(function() {
    $(".clickMe").css("cursor", "pointer");
    $(".toggleInfo").click(function() {
        $(this).children("p").toggle();
    });
});