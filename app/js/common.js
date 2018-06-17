;(function ($) {
    // Scripts that will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.

    var mobmenu = $('.mobmenu__item');

    $(document).ready(function () {
        // Пользовательские функции

        /*-----------Mobile menu-----------*/

        $('.header__mobmenu').on('click',function () {

            $(this).toggleClass('header__mobmenu--active');

            if ($(this).hasClass('header__mobmenu--active')) {
                mobmenu.first().css("transform", "rotate(45deg) translateX(4px) translateY(4px)");
                mobmenu.eq(1).css("display", "none");
                mobmenu.eq(2).css("transform", "rotate(-45deg) translateX(2px) translateY(-3px)");
            } else {
                mobmenu.each(function () {
                    mobmenu.removeAttr("style");
                });
            }

            var elem = $('.header__menu').hasClass('header__menu--active');
            if ( !elem ) {
                $('.header__menu').addClass('header__menu--active');
                $('.header__menu--active').slideDown(1000);

            } else {
                if ( $('.header__menu--active').is( ":hidden" ) ) {
                    $('.header__menu--active').slideDown(1000);
                } else {
                    $('.header__menu--active').slideUp(500);
                }
            }
        });

        /*--------------Tabs--------------*/

        $('.tabs__link').on('click', function (e) {

            e.preventDefault();
            $('.tabs__link').removeClass('tabs__link--active');
            $(this).addClass('tabs__link--active');
        })
    });


    // Scripts that will run after the whole page is loaded (images, videos, iframes. etc)
    $(window).on('load', function () {

    });

    // Scripts that will run on window resize
    $(window).on('resize', function (e) {

        /*-----------Mobile menu-----------*/
        if (window.innerWidth > 992) {
            $('.header__menu').removeClass('header__menu--active').removeAttr('style');
            mobmenu.removeAttr("style");
            $('.header__mobmenu').removeClass('header__mobmenu--active');

        }
    });
})(jQuery); // Fully reference jQuery after this point.
