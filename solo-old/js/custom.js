/*====================================================
                Preloader
====================================================*/

$(window).on('load', function () { // makes sure the whole site is loaded 

    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    //$('body').delay(350).css({'overflow': 'visible'});

});

/*====================================================
                Set BG image (safari)
====================================================*/

// in case of safari, show backgorund image since video is not supported
$(function () {
    
    // look for ios device
    /*if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        //alert('this is safari');
        $("#home-bg-video").hide();
        $("#home-bg-img").show();
    }*/

    /*
        http://stackoverflow.com/questions/7411662/simple-way-to-identify-ios-user-agent-in-a-jquery-if-then-statement
        http://stackoverflow.com/questions/6849086/jquery-target-only-safari
    
    */
    
    if ((navigator.userAgent.match(/(iPod|iPhone|iPad)/))
       ||(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
       ) {
         $("#home-bg-video").hide();
        $("#home-bg-img").show();
    }
    
});


/*====================================================
                Animate
====================================================*/
$(window).on('load', function () {

    $("#home-heading-1").addClass("fadeInDown");
    $("#home-heading-2").addClass("fadeInLeft");
    $("#home-text").addClass("zoomIn");
    $("#home-btn").addClass("zoomIn");
    $("#arrow-down i").addClass("fadeInDown");

});

/*====================================================
             Animation On Scroll
====================================================*/
$(function () {

    // animate on scroll
    new WOW().init();
});


/*====================================================
                TEAM
====================================================*/
$(function () {

    $("#team-members").owlCarousel({
        items: 2,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        /* Look like does work with autoplay */
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });
});


/*====================================================
                    TABS
====================================================*/

$(function () {

    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/*====================================================
                    PORTFOLIO
====================================================*/
// Note: does not in IE 
//$(function () { 
  
$(window).on('load', function () {
    // 4 column layout
    var isotopeContainer = $('#isotope-container');
    //if( !isotopeContainer.length || !jQuery().isotope ) return;

 

        isotopeContainer.isotope({
            itemSelector: '.isotope-selector'
        });


        $('#isotope-filters').on('click', 'button', function (e) {
           // alert("test");

            // active link
            $('#isotope-filters').find('.active').removeClass('active');
            $(this).addClass('active');
           
            // get filter value
            var filterValue = $(this).attr('data-filter');
           //  alert(filterValue);
            
            // filter portfolio
            isotopeContainer.isotope({
                filter: filterValue
            });
            
           
        });
});

//});

/*====================================================
                    MAGNIFIER
====================================================*/

$(function ($) {

    $(".portfolio-section").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        },
        fixedContentPos: false

    });
});


/*====================================================
                    TESTIMONIALS
====================================================*/
$(function () {

    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],

    });
});

/*====================================================
                        STATS
====================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});



/*====================================================
                        CLIENTS
====================================================*/
$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }

    });
});

/*====================================================
                    GOOGLE MAP
====================================================*/
//Check resource https://www.w3schools.com/howto/howto_google_maps.asp
// http://stackoverflow.com/questions/5006922/window-load-inside-a-document-ready

$(function () {

    $(window).on('load', function () {

        // 1. Render map
        var myLatlng = new google.maps.LatLng(40.712784, -74.005941);
        var imagePath = 'img/map/pin-location.png';
        var mapOptions = {
            zoom: 11,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        // 2. Add Marker
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: imagePath,
            title: 'Click To See Our Address'
        });

        // 3. Info window
        var addressString = '201 Oak Street Building 27 <br>Manchester, USA';
        //Set window width + content
        var infowindow = new google.maps.InfoWindow({
            content: addressString,
            maxWidth: 500
        });

        // Show address on marker click    
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });


        // 4.Resize Function
        // Add while responsive section
        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

    });
});

/*====================================================
                SMOOTH SCROLLING
====================================================*/
// Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

/*====================================================
                MAIN MENU
====================================================*/
// Show/Hide white navigation
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() > 50) {
            // show white bg nav
            $("nav").addClass("white-nav-top");

            // change menu color 
            $(".navbar-nav>li>a").addClass("white-nav-item");

            // show dark logo 
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            // show back to top button
            $("#back-to-top").fadeIn();

        } else {
            // hide white bg nav
            $("nav").removeClass("white-nav-top");

            // change menu color
            $(".navbar-nav>li>a").removeClass("white-nav-item");

            // show white logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            // hide back to top button
            $("#back-to-top").fadeOut();
        }
    });
});

/*====================================================
                    MOBILE MENU
====================================================*/
$(function () {
    // show mobile nav
    $("#mobile-nav-open-btn").click(function () {

        $("#mobile-nav").css("height", "100%");
    });

    // hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a ").click(function () {

        $("#mobile-nav").css("height", "0%");

    });
});



/*====================================================
                    Progress Bars
====================================================*/
$(function () {
	
	// progressBar.css({width: 0});
   
	  $("#progress-element").waypoint(function() {
      
	    var progressBar = $(".progress-bar");

        progressBar.each(function(){
         
		$(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 2000);
      });
	  
	   this.destroy();
	}, {
     
      offset: 'bottom-in-view'
    });
   
   
});