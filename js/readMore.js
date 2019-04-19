$(document).ready(function () {
    // console.log($.browser.name);
    // document.write("You are using " + $.browser.name +
    //            " v" + $.browser.versionNumber + 
    //            " on " + $.browser.platform);

    $('.img_container').hover(function () {
        // over
        if (checkForHoverContent($(this))) {
            makeFloatingTransparent(true, $(this), 'img');
            $(this).children(":first").css("transform", "translate(0%)");
        } else {
            return;
        }
        }, function () {
            // out
            if (checkForHoverContent($(this))) {
                makeFloatingTransparent(false, $(this), 'img');            
                if ($(this).find('.img_read-more--left').length !== 0) {
                    $(this).children(":first").css("transform", "translate(100%)");
                } else if ($(this).find('.img_read-more--left').length === 0) {
                    $(this).children(":first").css("transform", "translate(-100%)");
                }
            }
        }
    );

    $('.text_container').hover(function () {
            // over
            makeFloatingTransparent(true, $(this), 'text');
        }, function () {
            // out
            makeFloatingTransparent(false, $(this), 'text');
        }
    );

    $(".btn").hover(function () {
        // over
        $(this).css("transform", "translateY(-5px)");
        $(this).parent().parent().css("background-color", "rgba(0, 0, 0, .95)");
        }, function () {
            // out
            $(this).css("transform", "translateY(0px)");
            $(this).parent().parent().css("background-color", "rgba(0, 0, 0, .9)");
        }
    );
});

function checkForHoverContent(el) {
    if ($(el).children(":first").hasClass("img_read-more")) {
        return true;
    } else {
        return false;
    }
}

function makeFloatingTransparent(transparent, el, type) {
    let sectionEl = $(el).parent().parent();
    let floatingEl = $(sectionEl).find('.floating');

    if ($(el).hasClass('makeFloatTransp')) {
        if (transparent === true) {
            if (type === 'img') {
                if ($(el).find('.img_read-more--left').length !== 0) {
                    $(floatingEl).find('.floating_element--left').css('opacity', '.1');
                } else if ($(el).find('.img_read-more--right').length !== 0) {
                    $(floatingEl).find('.floating_element--right').css('opacity', '.1');
                }
            } else if (type === 'text') {
                if ($(el).parent().hasClass('content_left')) {
                    $(floatingEl).find('.floating_element--left').css('opacity', '.1');
                } else if ($(el).parent().hasClass('content_right')) {
                    $(floatingEl).find('.floating_element--right').css('opacity', '.1');
                }
            }
        } else {
            $('.floating_element').css('opacity', '1')
        }
    } else {
        return;
    }
}