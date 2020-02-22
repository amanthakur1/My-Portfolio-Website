$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        $('.bar.half').toggleClass('open');
    });
    $('.top-nav').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.bar.half').removeClass('open');
        $('.top-nav').toggleClass('open');
    });
    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate(keyframes = {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, options = 2000);
        $('.bar.half').removeClass('open');
        // $('.menu-toggler').removeClass('open');

    });
    $('#up').on('click', function() {
        $('html, body').animate(keyframes = {
            scrollTop: 0
        }, options = 2000);
    });
    AOS.init({
        easing: 'ease',
        duration: 1800
    });
});