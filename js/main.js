$(window).load(function () {
    "use strict";
    (function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { }
        else {
            try {
                $.stellar({ horizontalScrolling: false, responsive: true, });
            } catch (e) {
                console.log(e);
            }
        }
    }());
});

$(document).ready(function () {
    $("body").queryLoader2({
        backgroundColor: "#34495e",
        barHeight: 1,
        minimumTime: 1000,
        fadeOutTime: 2000,
        percentage: false,
    });

    // Sticky Menu
    $(".header-area").sticky({ topSpacing: 0 });

    // Text Rotator
    if ($('#js-rotating').length > 0) {
        $("#js-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "lightSpeedIn",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 6000,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });
    }

    $('.page-scroll').on('click', function (event) {
        var $anchor = $(this),
            headerH = '55';
        $('html , body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px",
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

    $("ul.nav.navbar-nav li a").click(function () {
        $(".navbar-collapse").removeClass("in");
    });

    $('body').scrollspy({ target: '.navbar-collapse', offset: 70 });
});
