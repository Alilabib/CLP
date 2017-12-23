/*global $, alert, console*/

$(function () {
    'use strict';
   //adjust header height
   
    var myHeader = $('.header');
   
    $(myHeader).height($(window).height());
   
    $(window).resize(function () {
        $(myHeader).height($(window).height());
    });
   
   //links active class 
   
    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    //
    $('.bx-wrapper').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('ul.bxslider li').height()) / 2);
    });
    
    //Trigger bx slider 
    
    $('.bxslider').bxSlider({
        pager: false
    });
   
   //adjust bx slider item center 
  
   
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    
    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    
    // Trigger  mix it up
    
   
    
    //Adjust  Shuffle Links
    
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    
});




