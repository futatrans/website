/*-----------------------------------------------------------------
FUTA TRANS - Optimized Main JavaScript
Description: Optimized version with only used functionalities
-------------------------------------------------------------------*/

(function ($) {
    "use strict";

    $(document).ready(function () {
        /*-----------------------------------
          01. Sticky Header 
        -----------------------------------*/
        $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        /*-----------------------------------
          02. Wow Animation 
        -----------------------------------*/
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }

        /*-----------------------------------
          03. Tilt Effect
        -----------------------------------*/
        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
                max: 10,
                speed: 400,
                glare: true,
                "max-glare": 0.5,
            });
        }

        /*-----------------------------------
          04. Back to top    
        -----------------------------------*/
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $("#back-top").addClass("show");
            } else {
                $("#back-top").removeClass("show");
            }
        });
        
        $("#back-top").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 800);
            return false;
        });

        /*-----------------------------------
          05. Swiper Initialization
        -----------------------------------*/
        if (typeof Swiper !== 'undefined') {
            // Initialize Swiper for brand slider
            const brandSlider = document.querySelector('.brand-slider');
            if (brandSlider) {
                new Swiper(brandSlider, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        }
                    }
                });
            }
        }

        /*-----------------------------------
          06. Mobile Menu Toggle (Vue.js handled)
        -----------------------------------*/
        // Mobile menu is handled by Vue.js components
        // No jQuery meanmenu needed

        /*-----------------------------------
          07. Preloader (if needed)
        -----------------------------------*/
        $(window).on('load', function () {
            $('.preloader').fadeOut('slow');
        });

    });

})(jQuery); 