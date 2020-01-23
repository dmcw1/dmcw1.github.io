(function($) {
    "use strict";
    $(function() {

        /*--------------------------------------------------------------
        1.MENU TOGGLE JS
        ------------------------------------------------------------*/
        $(".menu-toggle").on("click", function() {
            $(".main-meun").slideToggle(500);
        });

        /*--------------------------------------------------------------
        2.STICKU MENU
        ------------------------------------------------------------*/
        $(window).scroll(function() {
            if ($(window).scrollTop() > 50) {
                $('.menu-and-logo-section').addClass('sticky-menu');
            } else {
                $('.menu-and-logo-section').removeClass('sticky-menu');
            }
        });

        /*--------------------------------------------------------------
        3.VAGAS ANIMATE JS
        ------------------------------------------------------------*/
        if ($('#loded').length > 0) {

            $('#loded').vegas({
                slides: [
                    { src: 'img/accommodation-bg.jpg' },
                    { src: 'img/welcome-bg.jpg' },
                    { src: 'img/welcome-bg-2.jpg' },
                    { src: 'img/welcome-bg-3.jpg' }
                ],
                animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight']
            });

        }

        /*--------------------------------------------------------------
        4.AUTO HEIGHT FUNCTION JS
        ------------------------------------------------------------*/
        function theHeartautoHeight() {
            var introduction_image = $('.intruduction-content-img'),
                introduction_txt = $('.intruduction-content-txt');
            var mamorey_image = $('.memoragble-days-img'),
                memorey_txt = $('.memoragble-days-content');
            if (window.matchMedia("(max-width: 479px)").matches) {
                memorey_txt.css('height', 65);
                introduction_txt.css('height', 165);
                $('#hk').css('vertical-align', 'bottom');
                $('#hk').css('height', 230);
            } else {
                $('#hk').css('vertical-align', 'middle');
                memorey_txt.css('height', mamorey_image.outerHeight());
                introduction_txt.css('height', introduction_image.outerHeight());
                // $('#hk').css('margin-top', 0);
            }
            var attending_content = $('.attending-content'),
                attending_form = $('.attending-form');
            attending_content.css('height', attending_form.outerHeight());
        }
        theHeartautoHeight();

        /*--------------------------------------------------------------
        5.JARALAX JS
        ------------------------------------------------------------*/
        if ($('.jarallax').length > 0) {
            jarallax(document.querySelectorAll('.jarallax'));
            jarallax(document.querySelectorAll('.jarallax-keep-img'), {
                keepImg: true,
            });
        }

        /*--------------------------------------------------------------
        6.SLIDER JS
        ------------------------------------------------------------*/
        if ($('.slider').length > 0) {

            $('.slider').owlCarousel({
                // rtl:true,
                loop: true,
                // margin:10,
                nav: true,
                items: 1,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                navText: ["<img src='img/slidernav-left.png' alt='Slider Nav' />",
                    "<img src='img/slidernav-right.png' alt='Slider Nav' />"
                ],
                navigation: true,
            });

        }

        /*--------------------------------------------------------------
        7.GIFT REGISTY GALLERY JS
        ------------------------------------------------------------*/
        if ($('.gift-registy-gallery').length > 0) {

            $('.gift-registy-gallery').owlCarousel({
                // rtl:true,
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                // animateOut: 'fadeOut',
                // animateIn: 'fadeIn',
                // navText: ["<i class=\"fa fa-angle-left\"></i>",
                //   "<i class=\"fa fa-angle-right\"</i>"],
                pagination: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    }
                }
            });

        }

        /*--------------------------------------------------------------
        7.GROOMSMAN SLIDER JS
        ------------------------------------------------------------*/
        if ($('.groomsman-slider').length > 0) {

            $('.groomsman-slider').owlCarousel({
                // rtl:true,
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                // animateOut: 'fadeOut',
                // animateIn: 'fadeIn',
                // navText: ["<i class=\"fa fa-angle-left\"></i>",
                //   "<i class=\"fa fa-angle-right\"</i>"],
                pagination: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });

        }
        /*--------------------------------------------------------------
        7.GROOMSMAN SLIDER 2 JS JS
        ------------------------------------------------------------*/
        if ($('.groomsman-slider-2').length > 0) {

            $('.groomsman-slider-2').owlCarousel({
                // rtl:true,
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                // animateOut: 'fadeOut',
                // animateIn: 'fadeIn',
                // navText: ["<i class=\"fa fa-angle-left\"></i>",
                //   "<i class=\"fa fa-angle-right\"</i>"],
                pagination: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });

        }

        /*--------------------------------------------------------------
        8.MAGNIFIC POPUP JS
        ------------------------------------------------------------*/
        if ($('.popup').length > 0) {

            $('.popup').magnificPopup({
                // delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                },
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 500, // don't foget to change the duration also in CSS
                    opener: function(element) {
                        return element.find('img');
                    }
                }
            });

        }

        /*--------------------------------------------------------------
        9.V7 JS
        ------------------------------------------------------------*/
        if ($('.bg_heart').length > 0) {

            var love = setInterval(function() {
                var r_num = Math.floor(Math.random() * 40) + 1;
                var r_size = Math.floor(Math.random() * 65) + 10;
                var r_left = Math.floor(Math.random() * 100) + 1;
                var r_bg = Math.floor(Math.random() * 25) + 100;
                var r_time = Math.floor(Math.random() * 5) + 5;
                $('.bg_heart').append("<div class='heart_7' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love_7 " + r_time + "s ease;-moz-animation:love_7 " + r_time + "s ease;-ms-animation:love_7 " + r_time + "s ease;animation:love_7 " + r_time + "s ease'></div>");

                $('.bg_heart').append("<div class='heart_7' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love_7 " + (r_time + 5) + "s ease;-moz-animation:love_7 " + (r_time + 5) + "s ease;-ms-animation:love_7 " + (r_time + 5) + "s ease;animation:love_7 " + (r_time + 5) + "s ease'></div>");

            }, 500);

        }
        /*--------------------------------------------------------------
        10.WOW JS
        ------------------------------------------------------------*/
        if ($('.wow').length > 0) {

            new WOW().init();
        }


        if ($('#heart_countdown').length > 0) {
            $('#heart_countdown').countDown({
                targetDate: {
                    'day': 1,
                    'month': 2,
                    'year': 2020,
                    'hour': 12,
                    'min': 39,
                    'sec': 0
                },
                omitWeeks: true
            });
        }




        /*--------------------------------------------------------------
          11. CONTACT FORM INIT
        --------------------------------------------------------------*/
        // $("#heart-rsvp-form").on("submit", function(e) {

        //     //Stop form submission & check the validation
        //     e.preventDefault();

        //     // Variable declaration
        //     var error = false,
        //         name = $('#the_heart_name').val(),
        //         email = $('#the_heart_email').val(),
        //         guests = $('#the_heart_guest').val(),
        //         mail_fail = $('#mail_fail'),
        //         mail_success = $('#mail_success'),
        //         submit_btn = $('#rsvp_submit');

        //     // Form field validation
        //     if (name.length <= 1) {
        //         var error = true;
        //         $('#the_heart_name').after('<div class="field_error"><i class="fa fa-exclamation-triangle"></i></div>');
        //     } else {
        //         $('#the_heart_name').next('.field_error').remove();
        //     }
        //     if (email.length <= 6 || email.indexOf('@') == '-1') {
        //         var error = true;
        //         $('#the_heart_email').after('<div class="field_error"><i class="fa fa-exclamation-triangle"></i></div>');
        //     } else {
        //         $('#the_heart_email').next('.field_error').remove();
        //     }


        //     if (error == true) {
        //         $(mail_success).fadeOut(500);
        //         $(mail_fail).slideDown(800);
        //     };

        //     // If there is no validation error, next to process the mail function
        //     if (error == false) {

        //         $(mail_success).hide();
        //         $(mail_fail).hide();
        //         $.ajax({
        //             url: $(this).attr('action'),
        //             data: $(this).serialize(),
        //             type: 'POST',
        //             success: function() {
        //                 $('.single-form-item input, .single-form-item textarea').val('');
        //                 $(mail_fail).fadeOut(500);
        //                 $(mail_success).slideDown(800);
        //                 $('.filed_error').remove();
        //             },
        //             error: function() {
        //                 $(mail_success).fadeOut(500);
        //                 $(mail_fail).slideDown(800);
        //             }
        //         });

        //     }
        // });


        /*--------------------------------------------------------------
          MENU SOOMTH SCROLL JS
        --------------------------------------------------------------*/

        if ($('.main-meun ul li a').length > 0) {
            $('.main-meun ul li a').click(function(e) {
                var href = $(this).attr("href"),
                    hrefFirst = href[0];


                if (href.length > 1 && hrefFirst === '#' && $(href).offset()) {
                    var offsetTop = href === "#" ? 0 : $(href).offset().top - 0;
                    $('html, body').stop().animate({
                        scrollTop: offsetTop,
                    }, 500, "easeInOutCirc");
                    e.preventDefault();
                }

            });
        }



    }); /*End document ready*/


    $(window).on("load", function() {

        /*--------------------------------------------------------------
        12.PRELOADER JS
        ------------------------------------------------------------*/
        $('#prelaoder').fadeOut(850);

        /*--------------------------------------------------------------
        13.THE HEAR GALLERY GRID JS
        ------------------------------------------------------------*/
        if ($('.gallery-grid').length > 0) {

            var $container = $('.gallery-grid'),
                colWidth = function() {
                    var w = $container.width(),
                        columnNum = 1,
                        columnWidth = 0;
                    if (w > 1200) {
                        columnNum = 3;
                    } else if (w > 900) {
                        columnNum = 3;
                    } else if (w > 600) {
                        columnNum = 2;
                    } else if (w > 450) {
                        columnNum = 2;
                    } else if (w > 385) {
                        columnNum = 1;
                    }
                    columnWidth = Math.floor(w / columnNum);
                    $container.find('.gallery-item').each(function() {
                        var $item = $(this),
                            multiplier_w = $item.attr('class').match(/gallery-item-w(\d)/),
                            multiplier_h = $item.attr('class').match(/gallery-item-h(\d)/),
                            width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
                            height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
                        $item.css({
                            width: width,
                            //height: height
                        });
                    });
                    return columnWidth;
                },
                isotope = function() {
                    $container.isotope({
                        resizable: false,
                        itemSelector: '.gallery-item',
                        masonry: {
                            columnWidth: colWidth(),
                            gutterWidth: 3
                        }
                    });
                };
            isotope();
            $(window).resize(isotope);
            var $optionSets = $('.rs-portfolio-nav .option-set'),
                $optionLinks = $optionSets.find('li');
            $optionLinks.click(function() {
                var $this = $(this);
                var $optionSet = $this.parents('.option-set');
                $optionSet.find('.selected').removeClass('selected');
                $this.addClass('selected');

                // make option object dynamically, i.e. { filter: '.my-filter-class' }
                var options = {},
                    key = $optionSet.attr('data-option-key'),
                    value = $this.attr('data-option-value');
                // parse 'false' as false boolean
                value = value === 'false' ? false : value;
                options[key] = value;
                if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
                    // changes in layout modes need extra logic
                    changeLayoutMode($this, options)
                } else {
                    // creativewise, apply new options
                    $container.isotope(options);
                }
                return false;
            });

        } // End Lenght


        /*--------------------------------------------------------------
        14.JOURNAL GRID JS
        ------------------------------------------------------------*/

        if ($('.journal-grid').length > 0) {

            var $container = $('.journal-grid'),
                colWidth = function() {
                    var w = $container.width(),
                        columnNum = 1,
                        columnWidth = 0;
                    if (w > 1200) {
                        columnNum = 3;
                    } else if (w > 900) {
                        columnNum = 3;
                    } else if (w > 600) {
                        columnNum = 2;
                    } else if (w > 450) {
                        columnNum = 2;
                    } else if (w > 385) {
                        columnNum = 1;
                    }
                    columnWidth = Math.floor(w / columnNum);
                    $container.find('.journal-grid-item').each(function() {
                        var $item = $(this),
                            multiplier_w = $item.attr('class').match(/journal-grid-item-w(\d)/),
                            multiplier_h = $item.attr('class').match(/journal-grid-item-h(\d)/),
                            width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
                            height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
                        $item.css({
                            width: width,
                            //height: height
                        });
                    });
                    return columnWidth;
                },
                isotope = function() {
                    $container.isotope({
                        resizable: false,
                        itemSelector: '.journal-grid-item',
                        masonry: {
                            columnWidth: colWidth(),
                            gutterWidth: 3
                        }
                    });
                };
            isotope();
            $(window).resize(isotope);
            var $optionSets = $('.rs-portfolio-nav .option-set'),
                $optionLinks = $optionSets.find('li');
            $optionLinks.click(function() {
                var $this = $(this);
                var $optionSet = $this.parents('.option-set');
                $optionSet.find('.selected').removeClass('selected');
                $this.addClass('selected');

                // make option object dynamically, i.e. { filter: '.my-filter-class' }
                var options = {},
                    key = $optionSet.attr('data-option-key'),
                    value = $this.attr('data-option-value');
                // parse 'false' as false boolean
                value = value === 'false' ? false : value;
                options[key] = value;
                if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
                    // changes in layout modes need extra logic
                    changeLayoutMode($this, options)
                } else {
                    // creativewise, apply new options
                    $container.isotope(options);
                }
                return false;
            });
        } // End Lenght



    }); // End window LODE


})(jQuery);