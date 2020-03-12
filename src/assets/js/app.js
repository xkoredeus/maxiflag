$(() => {
    if ($(window).width() > 1200) {
        $('.about__list-item').hover(function aboutListItemHover() {
            $('.about__list-item').removeClass('active');
            $('.about__image').removeClass('active');
            $('.about__image[data-about="' + $(this).attr('data-about') + '"]').addClass('active');
            $(this).addClass('active');
        });
    };
});
$(() => {
    $(window).scroll(function windowScroll() {
        $(this).scrollTop() > 4 ? $('body').addClass('sticky-header') : $('body').removeClass('sticky-header');
    });
});
$(() => {
    $('.cat__btn').on('click', function categoryBtnClick() {
        if ($(this).hasClass('active')) {
            $(this)
                .removeClass('active')
                .find('span')
                .text('Смотреть все');
            $('body').removeClass('cat-open');
            $('body,html').animate({scrollTop: 0}, 300);
        } else {
            $(this).addClass('active')
                .find('span')
                .text('Скрыть');
            $('body').addClass('cat-open');
            $('body,html').animate({scrollTop: 0}, 300);
        }
    });
    $('.body__overlay').on('click', function bodyOverlayClick() {
        $('.cat__btn').removeClass('active')
            .find('span')
            .text('Смотреть все');
        $('body').removeClass('cat-open');
    });
});
$(() => {
    $('[data-fancybox]').fancybox({
        animationDuration : 600,
        animationEffect   : 'slide-in-in',
        touch : false
    });
    $('.menu__close').on('click', function () {
        $.fancybox.close();
    });
});