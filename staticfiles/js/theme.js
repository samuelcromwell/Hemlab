/*
 Theme Name: Quera
 Theme URI: https://themeforest.net/user/themewar/portfolio
 Author: themewar
 Author URI: 
 Description: Quera - Business & Finance Consultancy Responsive HTML5 Template
 Version: 1.0
 License:
 License URI:
*/
 
/*=======================================================================
 [Table of contents]
 =========================================================================
 1. Init Obj
 2. All Carousel
 3. Skills
 4. Fun Fact Count
 5. Back To Top
 6. All PopUP
 7. Sticky Header
 8. Mobile Menu
 9. Preloader
 10. Select
 11. Google Maps
 12. Contact Form Submission
 13. All Filter & Suffle
 14. Date & Time picker
*/

(function ($) {
    'use strict';
    /*--------------------------------------------------------
    / 1. Init Obj
    /---------------------------------------------------------*/
    var folioSlider01           = $('.folioSlider01'),
        folioSlider02           = $('.folioSlider02'),
        testi_slider01          = $('.testimonialslider01'),
        testi_slider02          = $('.testimonialslider02'),
        helpSlider              = $('.helpSlider'),
        chooseSlider            = $('.chooseSlider'),
        popup_video             = $('.popup_video'),
        popup_img               = $('.popup_img'),
        funfact                 = $('.funfact'),
        select                  = $('.input-field select');
    
    /*--------------------------------------------------------
    / 2. Rev Slider
    /---------------------------------------------------------*/
    var revapi = jQuery('#rev_slider_1').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1220, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "auto",
        minHeight: '880',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 700,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 150,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 150,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
    });
    var revapi = jQuery('#rev_slider_2').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1220, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "auto",
        minHeight: '850',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 700,
                hide_onleave: false,
                left: {
                    container: "layergrid",
                    h_align: "right",
                    v_align: "center",
                    h_offset: -80,
                    v_offset: 47 
                },
                right: {
                    container: "layergrid",
                    h_align: "right",
                    v_align: "center",
                    h_offset: -80,
                    v_offset: -47
                }
            },
            bullets: {
                enable: false
            }
        },
    });
    var revapi = jQuery('#rev_slider_3').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1220, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            bullets: {
                enable: true,
                style: 'metis',
                hide_onmobile: true,
                hide_under: 700,
                h_align: "right",
                v_align: "bottom",
                h_offset: 180,
                hide_onleave: false,
                v_offset: 60,
                space: 15,
                tmp: '<span class="tp-bullet-img-wrap"><span class="tp-bullet-image"></span></span>'
            },
            arrows: {
                enable: false,
            }
        },
    });
    /*--------------------------------------------------------
    / 2. All Carousel
    /---------------------------------------------------------*/
    /*--- Folio Silder ---*/
    if (folioSlider01.length > 0) {
        var folioSlider01_obj = folioSlider01.owlCarousel({
            margin: 0,
            autoplay: false,
            loop: true,
            nav: false,
            smartSpeed: 500,
            dots: false,
            items: 3,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }
    if (folioSlider02.length > 0) {
        var folioSlider02_obj = folioSlider02.owlCarousel({
            margin: 0,
            autoplay: false,
            loop: true,
            nav: true,
            navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
            smartSpeed: 500,
            dots: false,
            items: 1
        });
    }
    /*--- Testimonial Silder ---*/
    if(testi_slider01.length > 0){
        var testi_slider01_obj = testi_slider01.owlCarousel({
            autoplay: false,
            loop: false,
            margin: 30,
            responsiveClass: true,
            nav: false,
            navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
            }
        });
    }
    if(testi_slider02.length > 0){
        var testi_slider02_obj = testi_slider02.owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-up1"></i>', '<i class="twi-arrow-down1"></i>'],
            dots: false,
            animateOut: 'slideOutDown',
            animateIn: 'zoomIn',
            smartSpeed: 550,
            items: 1,
        });
    }
    
    /*--- Client Silder ---*/
    if($(".client-slider").length > 0){
       $('.client-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            dots: false,
            smartSpeed: 600,
            items: 4,
            responsive: {
                0: {
                    items: 1
                },
                760: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }
    /*--- Help Silder ---*/
    helpSlider.owlCarousel({
        autoplay: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        smartSpeed: 350,
        items:1,
        margin:0,
        dots: false,
        loop: true,
        nav: true,
        navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
    });
    /*--- Help Silder ---*/
    chooseSlider.owlCarousel({
        autoplay: true,
        animateOut: 'slideOutDown',
        animateIn: 'zoomIn',
        smartSpeed: 350,
        items:1,
        margin:0,
        dots: false,
        loop: true,
        nav: true,
        navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
    });
    
    /*--------------------------------------------------------
    / 3. Skills
    /----------------------------------------------------------*/
    if ($(".single_skill").length > 0){
        $('.single_skill').appear();
        $('.single_skill').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills(){
        $(".single_skill").each(function () {
            var datacount = $(this).attr("data-parcent");
            $(".ss_child", this).animate({'width': datacount + '%'}, 2000);
            $(".ss_parent span", this).animate({'left': datacount + '%'}, 2000);
            if (coun){
                $(this).find('.ss_parent span').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
            }
        });
        coun = false;
    }
    $(window).on('load', function (event) {
        if ($(".circle-skill").length > 0) {
            var ast1 = true;
            $('.circle-skill').appear();
            $('.circle-skill').on('appear', function () {
                if (ast1 == true) {
                    $(".circle-skill").each(function () {
                        var pint = $(this).attr('data-skills');
                        var decs = pint * 100;
                        var grs = $(this).attr('data-gradientstart');
                        var gre = $(this).attr('data-gradientend');
                        var bg = $(this).attr('data-bg');

                        $(this).circleProgress({
                            value: pint,
                            startAngle: -Math.PI / 3 * 1,
                            fill: {gradient: [[grs, 1], [gre, .2]], gradientAngle: Math.PI / 4 * 2},
                            lineCap: 'square',
                            thickness: 4,
                            animation: {duration: 1800},
                            size: 73,
                            emptyFill: bg
                        }).on('circle-animation-progress', function (event, progress) {
                            $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
                        });
                    });
                    ast1 = false;
                }
            });
        }
    });
    
    /*--------------------------------------------------------
    / 4. Fun Fact Count
    /---------------------------------------------------------*/
    $('.counter').appear();
    $(document.body).on('appear', '.counter', function(e, $affected) {
        $affected.each(function() {
            var $this = $(this);
            if(!$this.hasClass('completed')){
                var $this = $(this);
                var datacount = $(this).attr("data-count") * 1;
                if(datacount > 1000 && datacount % 1000 != 0){
                    var count = datacount / 1000;
                    count = count.toFixed(1);
                    $({Counter: 0}).animate({Counter: count}, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(this.Counter.toFixed(1));
                        }
                    });
                }else if(datacount >= 1000  && datacount % 1000 == 0){
                    var count = datacount / 1000;
                    $({Counter: 0}).animate({Counter: count}, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                }else{
                    var count = datacount;
                    $({Counter: 0}).animate({Counter: count}, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                }
                $this.addClass('completed');
            }
        });
    });
    
    /*--------------------------------------------------------
    / 5. Back To Top
    /---------------------------------------------------------*/
    var back = $("#backtotop"),
        body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            back.css({bottom: '30px', opacity: '1', visibility: 'visible'});
        } else {
            back.css({bottom: '-30px', opacity: '0', visibility: 'hidden'});
        }
    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });
    
    /*--------------------------------------------------------
    / 6. All PopUP
    /--------------------------------------------------------*/
    popup_video.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        showCaption: false,
        controls: true
    });
    popup_img.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: true,
        swipe: true,
        showTitle: false,
        controls: true
    });
    $('.searchBtn a').on('click', function (e) {
        e.preventDefault();
        $('.searchBtn').toggleClass('active');
    });
    $('.tmsToggle').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });
    
    /*--------------------------------------------------------
    / 7. Sticky Header
    /---------------------------------------------------------*/
    if($(".isSticky").length > 0){
        var header_height = $(".isSticky").height();
        $(window).on('scroll', function(){
            if($(window).scrollTop() > 300){
                $(".isSticky").addClass('fixedHeader animated slideInDown');
            }else{
                $(".isSticky").removeClass('fixedHeader animated slideInDown');
            }
        });
    }
    
    /*--------------------------------------------------------
    / 8. Mobile Menu
    /---------------------------------------------------------*/
    $(document).on('click', '.menuToggler', function (e) {
        e.preventDefault();
        $('.sidebarMenu').toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.sidebarMenuOverlay, .SMACloser').on('click', function () {
        $('.sidebarMenu').removeClass('active');
        $('.menuToggler').removeClass('active');
    });
    $('.SMABody ul li.menu-item-has-children > a').on('click', function (e) {
        e.preventDefault();
        $(this).parent('li.menu-item-has-children').toggleClass('active');
        $(this).siblings('ul.sub-menu').slideToggle();
    });
    
    /*--------------------------------------------------------
    / 9. Preloader
    /---------------------------------------------------------*/
    $(window).on('load', function () {
        var preload = $('.preloader');
        if (preload.length > 0) {
            preload.delay(800).fadeOut('slow');
        }
    });

    /*--------------------------------------------------------
    / 10. Select
    /---------------------------------------------------------*/
    if (select.length > 0) {
        select.niceSelect();
        select.parent().addClass('select-area');
    };
    
    /*--------------------------------------------------------
    / 11. Google Maps
    /----------------------------------------------------------*/
    if ($("#google_map").length > 0){
        var map;
        map = new GMaps({
            el: "#google_map",
            lat: -37.815340,
            lng: 144.963230,
            zoom: 10,
        });
        var image = "";
        map.addMarker({
            lat: -37.815340,
            lng: 144.963230,
            icon: "static/images/marker.png",
            animation: google.maps.Animation.DROP,
            title: 'WH. Center',
            infoWindow: {
                content: '<p><span>WH. Center</span>30 Memorial Drive, Avon MA 2322</p>'
            },
            verticalAlign: "bottom",
            horizontalAlign: "center",
            backgroundColor: "#d3cfcf"
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#fde293"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#9cc0f9"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#f4f5f6"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#2c2c2c"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#9cc0f9"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#2c2c2c"}
                ]
            }

        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }

    /*--------------------------------------------------------
    / 12. Contact Form Submission
    /---------------------------------------------------------*/
    $('#contact_form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);
        $('button[type="submit"]', this).attr('disabled', 'disabled').val('Processing...');
        var form_data = $this.serialize();
        var required = 0;
        $(".required", this).each(function () {
            if ($(this).val() === ''){
                $(this).addClass('reqError');
                required += 1;
            } else{
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0) {
            $.ajax({
                type: 'POST',
                url: 'mail/mail.php',
                data: {form_data: form_data},
                success: function (data) {
                    $('button[type="submit"]', $this).removeAttr('disabled').val('Message');

                    $('.con_message', $this).fadeIn().html('<strong>Congratulations!</strong> Your query successfully sent to site admin.').removeClass('alert-warning').addClass('alert-success');
                    setTimeout(function () {
                        $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
                    }, 5000);
                }
            });
        } else {
            $('button[type="submit"]', $this).removeAttr('disabled').val('Message');
            $('.con_message', $this).fadeIn().html('<strong>Opps!</strong> Error found. Please fix those and re submit.').removeClass('alert-success').addClass('alert-warning');
            setTimeout(function () {
                $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
            }, 5000);
        }
    });
    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });

    /*--------------------------------------------------------
    / 13. All Filter & Suffle
    /---------------------------------------------------------*/
    $(window).on('load', function () {
        if ($(".shaff_grid").length > 0)
        {
            var $grid = $('.shaff_grid');
            $grid.shuffle({
                itemSelector: '.shaff_item',
                sizer: '.shaff_size'
            });
            $('.shaff_filter li').on('click', function () {
                $('.shaff_filter li').removeClass('active');
                $(this).addClass('active');
                var groupName = $(this).attr('data-group');
                $grid.shuffle('shuffle', groupName);
            });
        }
    });

    /*--------------------------------------------------------
    / 14. Date & Time picker
    /---------------------------------------------------------*/
    $('.date-picker').datetimepicker({
        timepicker: false,
        datepicker: true,
        format: 'y-m-d',
        hours12: false,
        step: 30
    });
    $('.time-picker').datetimepicker({
        timepicker: true,
        datepicker: false,
        format: 'H:i',
        hours12: false,
        step: 30
    });

})(jQuery);