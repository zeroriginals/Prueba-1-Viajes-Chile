/* jquery  */

$(document).ready(function () {

    /*tooltip - iconos - quienes somos */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    /* Toggle - img - card */
    $(".card1").on("click", function () {
        $(".card-text1").toggle();
    });
    $(".card2").on("click", function () {
        $(".card-text2").toggle();
    });
    $(".card3").on("click", function () {
        $(".card-text3").toggle();
    });
    $(".card4").on("click", function () {
        $(".card-text4").toggle();
    });

});





