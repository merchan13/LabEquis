;
(function () {

        'use strict';

        var isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        var scrollNavBar = function () {

            if ($(window).scrollTop() > 500) {
                $('body').addClass('scrolled');
            } else {
                $('body').removeClass('scrolled');
            }

            $(window).scroll(function () {
                    if ($(window).scrollTop() > $(".about-us-title").position().top {
                            alert($(".about-us-title").position().top());
                            $('body').addClass('scrolled');
                        } else {
                            $('body').removeClass('scrolled');
                        }
                    });


            };

            var goToTop = function () {

                $('.js-gotop').on('click', function (event) {

                    event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $('html').offset().top
                    }, 500, 'easeInOutExpo');

                    return false;
                });

                $(window).scroll(function () {

                    var $win = $(window);
                    if ($win.scrollTop() > 200) {
                        $('.js-top').addClass('active');
                    } else {
                        $('.js-top').removeClass('active');
                    }

                });

            };

            $(function () {
                scrollNavBar();
                goToTop();
            });

        }());