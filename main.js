$(document).ready(function () {

    $('.menu__link').click(function () {
        var target = $(this).attr('href')

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500)
    })

    $('.up').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    })

    var menuPos, windowPos;

    function posmenu() {
        menuPos = $('.menu').offset().top
        
    }
    posmenu()
    $(window).resize(posmenu)

    $(window).scroll(function(){
        windowPos = $(window).scrollTop()
        console.log(windowPos)

        if(windowPos >= menuPos){
            $('.menu').addClass('fixed')
        }
        else{
            $('.menu').removeClass('fixed')
        }
    })

})