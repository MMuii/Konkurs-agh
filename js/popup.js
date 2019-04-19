let isPopupActive = false;

$(document).ready(function () {

    $(".btn--read-more").on("click", function() {
        // console.log('dziala');
        showPopup($(`.popup--${$(this).attr("data-popup")}`));
    });

    $(".popup_close").on("click", function () {
        hidePopup($(this).parent());
    });

    $(document).on('keyup', function(e) {
        if (e.keyCode == 27 && isPopupActive) {
            hidePopup($('.popup'));
        }
    });
});

function hidePopup(el) {
    // $('html').removeClass('scrollbar-inactive').addClass('scrollbar-active');   
    $('body').enableScroll();

    $(el).css("opacity", 0);
    setTimeout(() => {
        $(el).css("display", "none");
    }, 305);

    isPopupActive = false;
}

function showPopup(el) {
    // $('html').removeClass('scrollbar-active').addClass('scrollbar-inactive');
    $('body').disableScroll();

    $(el).css("display", "initial");
    setTimeout(() => {
        $(el).css("opacity", 1);
    }, 10);

    isPopupActive = true;
}

$.fn.disableScroll = function() {
    window.oldScrollPos = $(window).scrollTop();

    $(window).on('scroll.scrolldisabler',function ( event ) {
       $(window).scrollTop( window.oldScrollPos );
       event.preventDefault();
    });
};

$.fn.enableScroll = function() {
    $(window).off('scroll.scrolldisabler');
};