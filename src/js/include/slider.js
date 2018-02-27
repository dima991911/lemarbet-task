var Slider = (function () {

    var init = function () {
        setListener();
    };

    var setListener = function () {
        $(window).on('load', function () {
            setSlide();
        });
        $('.dot').click(dotClick);
    };

    var currentSlide = 0;

    var setSlide = function () {
        var slides = $('.slider-content'),
            dotActive = $('.dot-active');
            dots = $('.dot');

        [].forEach.call(slides, function (slide) {
            $(slide).hide();
        });

        $(slides[currentSlide]).show();
        $(dotActive).removeClass('dot-active');
        $(dots[currentSlide]).addClass('dot-active');
    };

    var dotClick = function () {
        var index = $(this).index('.dot');

        currentSlide = index;
        setSlide();
    };

    return {
        init: init
    }
})();

Slider.init();