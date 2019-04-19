$(document).ready(function () {
    const timelineButton = document.querySelector('.timeline_button');

    $(window).on("scroll", function () {
        moveTimelineButton(timelineButton);
    });

    $('.timeline_marker').click(function(){
        if ($(this).hasClass('timeline_marker--home')) {
            scrollToSection('home');
        } else {
            let className = $(this).attr('class');
            let sectionNumber = -1;

            if ((className.indexOf('--10') === -1) && (className.indexOf('--11') === -1)) {
                sectionNumber = className[className.length - 1];
            } else if (!(className.indexOf('--10') === -1)) {
                sectionNumber = 10;
            } else if (!(className.indexOf('--11') === -1)) {
                sectionNumber = 11;
            }
    
            scrollToSection(sectionNumber);
        }
    });
});

function moveTimelineButton(btn) {
    let scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    $(btn).css('top', `${scrollPercent}%`);
}

function scrollToSection(section) {
    if (section === 'home') {
        $('html,body').stop(true, false).animate({
            scrollTop: 0
        }, 1000);
    } else {
        $('html,body').stop(true, false).animate({
            scrollTop: $(`.section--${section}`).offset().top
        }, 1000);
    }
}