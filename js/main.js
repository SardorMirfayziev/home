$(document).ready(function(){
    $(".swiper-wrapper").owlCarousel({
        items: 1,
        loop: true,
        dots: true
    });


    
    $('.hamburger').click(function () { 
        $(this).toggleClass('active')
        $('.nav_ul').toggleClass('open');
        $('body').toggleClass('over')
        $('.ham-span').toggleClass('white')
        
    });

    $('.target').click(function (e) {
        
        if($(this).parent().hasClass('active')){ 
            $(this).siblings().slideUp()
            $(this).parent().removeClass('active')
            
            
        }else {
            $(this).siblings().slideDown().css('display','flex');
            // $('.arrow').after().css('transform','rotate(180deg)')
            $(this).parent().addClass('active').siblings().removeClass('active').children('.s-list__items').slideUp()
        }
        
        
    });

});

