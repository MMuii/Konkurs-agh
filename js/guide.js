$(document).ready(function () {

    let isVisible = false;

    const guide = $('.guide');

    $(document).scroll(function () { 
        if (!isVisible && window.scrollY >= 1500) {
            // console.log('showing');
            showGuide();
        }
    });

    $(document).on('click', function(){
        hideGuide();
    });

    function showGuide() {
        $(guide).css('opacity', 1);
        isVisible = true;
    }

    function hideGuide() {
        $(guide).css('opacity', 0);
        // isVisible = false;
    }
});