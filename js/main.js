$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed: 700,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('autoplay.play.owl',[4000])
})
$('.stop').on('click',function(){
    owl.trigger('autoplay.stop.owl')
})

$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>390){
            $('.red-back-block').addClass('fixed');
        }
        else if ($(this).scrollTop()<390){
            $('.red-back-block').removeClass('fixed');
        }
    });
});

$('#user-success').on('change', function () {
    if ($(this).prop('checked')) {
        $('#send-order').removeAttr('disabled');
    } else {
        $('#send-order').attr('disabled', true);
    }
});
$('.js-open-user-success').on('click', function () {
    $('.js-modal-user-success').toggleClass('is-active');
});

$(document).ready(function() {
    $('#cart').bind('click', function () {
        $('#cart, #cart_content').toggleClass('show');
        var time;
        $('#cart_content').mouseout(function () {
            time = setTimeout(function () {
                $('#cart, #cart_content').removeClass('show');
            }, 3000);
        });
        $('#cart_content').mouseover(function () {
            clearTimeout(time);
        });
        if ($('.cart_content .mini-cart-info tr').length != 0) {
            $('.quick_order').addClass('show')
        }
    });
});
$('.cart-go').click(function(){
    $('#cart, #cart_content').toggleClass('show');
});
$(document).ready(function(){
    $(".navbar-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});