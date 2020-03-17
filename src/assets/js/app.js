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
    $('.menu__close').on('click', function menuCloseBtnClick() {
        $.fancybox.close();
    });
});
$(() => {
    $('.upload__file').change(function() {
        let filename = [];
        for (let i = 0; i < $(this).get(0).files.length; ++i) {
            filename.push($(this).get(0).files[i].name.slice(0, 18) + '...');
        }
        $(this).next('.filename').text(filename.join(', '));
    });
});
$(() => {
    $('.js-service-page__item-btn').on('click', function serviceItemBtnClick() {
        const top = $(this).offset().top;
        $('body,html').animate({scrollTop: top - 100}, 300);
        $(this)
            .parent('.service-page__item')
            .toggleClass('active')
            .find('.service-page__item-in')
            .slideToggle();
    });
});
$(() => {
    $('.tabs__content-item:not(:first-child)').hide();
    $('.tabs__list-item:first-child').addClass('active');
    $('.tabs__list > .tabs__list-item').click(function tabListLiClick() {
        if (!($(this).hasClass('active'))) {
            const thisLi = $(this);
            const numLi = thisLi.index();
            thisLi.addClass('active').siblings().removeClass('active');
            thisLi.parent().next().children('div').hide()
                .eq(numLi)
                .fadeIn('slow');
        }
    });
});