$(function() {
    $('.menu-toggle').click(function() {
        $('.menu').toggle();
    });

    $(window).scroll(function(e) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function() {
        $("body, html").stop().animate({ scrollTop:0 });
    });
});
