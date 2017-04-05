$(window).scroll(function () {
    if ($(window).scrollTop() > $('#fixed-navbar').offset().top && !($('#fixed-navbar').hasClass('posi'))) {
        $('#fixed-navbar').addClass('posi');
    } else if ($(window).scrollTop() <= 768) {
        $('#fixed-navbar').removeClass('posi');
    }
});