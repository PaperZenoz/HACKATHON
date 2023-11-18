$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});

$(document).ready(function () {
    function faq() {
        const $head = $('.faq__head')

        $head.on('click', function () {
            $(this).toggleClass('open')
            $(this).siblings('.faq__body').fadeToggle()
        })
    }

    faq()

})