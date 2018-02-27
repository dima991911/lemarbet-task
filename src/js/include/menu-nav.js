var MenuNav = (function () {
    var init = function () {
        setListener();
    };

    var setListener = function () {
        $('.hamburger').click(hamburgerClick);
        $(window).resize(resizeWindow);
    };

    var hamburgerClick = function () {
        var navMenu = $('.navigation-mobile');

        if(navMenu.is(':visible')) {
            navMenu.slideUp(200);
        } else {
            navMenu.slideDown(200);
        }
    };

    var resizeWindow = function () {
        var navMenu = $('.navigation-mobile'),
            hamburger = $('.hamburger');

        console.log($(window).width());

        if ($(window).width() > 785) {
            navMenu.show();
            hamburger.hide();
        } else {
            navMenu.hide();
            hamburger.show();
        }
    };

    return {
        init: init
    }
})();

MenuNav.init();