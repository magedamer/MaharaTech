/*global $ ,jQuery ,alert, console, google */

$(function () {
    
    "use strict";
    
    // Add Class Active
    
    $(".menu ul li").on("click", function () {
        
        $(this).addClass("active").siblings().removeClass("active");
        
    });
    
    // Smooth Scroll Down
    
    $(".about .info a, .nav .hire a").on("click", function () {
        
        $("html, body").animate({
            
            scrollTop : $("#contact").offset().top
            
        }, 2000);
        
    });
    
    // Menu & Smooth Scroll To Section
    
    var scroll = $(".menu ul li a, footer ul li a"),
        scrolltop = $('.scrolltop'),
        menu = $(".menu ul"),
        bodyEl = $("body"),
        navToggleBtn = bodyEl.find(".nav-toggle-btn");
    
    navToggleBtn.on("click", function (e) {
        
        bodyEl.toggleClass("active-nav");
        e.preventDefault();
        
    });
     
    scroll.on("click", function () {
        
        $("html, body").animate({
            
            scrollTop : $("#" + $(this).data("value")).offset().top
            
        }, 1000);
        
        
    });
    
    // Google Map
    
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: {lat: -33, lng: 151},
            zoomControl: false,
            scaleControl: false,
            mapTypeControl: false
        });
    }
    
    // Remove The Scroll To Zoom Google Maps
    
    $('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready
        
    $('#overlay').on("mouseup", function () {          // lock it when mouse up
        
        $('#map').addClass('scrolloff');
        
        //somehow the mouseup event doesn't get call...
        
    });
    
    $('#overlay').on("mousedown", function () {        // when mouse down, set the mouse events free
        
        $('#map').removeClass('scrolloff');
        
    });
    
    $("#map").mouseleave(function () {              // becuase the mouse up doesn't work... 
        
        $('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
        
                                                    // or you can do it on some other event
    });
    
});

// Loading Screen 
    
$(window).on('load', function () {
    
    "use strict";

    $('.loading-overlay .cssload-loader').fadeOut(1000, function () {

        $(this).parent().fadeOut(1000, function () {

            $('body').css('overflow', 'auto');
            $(this).remove();

        });

    });

});