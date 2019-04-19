$(document).ready(function () {

    // const imgContainer = $('.content_right').find('.img_container');
    // const imgContainerImgs = $('.content_right').find('.img_container').find('.img');
    // // console.log(imgContainer.length);

    if ($.browser.name === 'mozilla' || $.browser.name === 'msedge') {
        console.log($.browser.name);

        const imgContainer = $('.content_right').find('.img_container');
        const imgContainerImgs = $('.content_right').find('.img_container').find('.img');

        for (let i = 0; i < imgContainer.length; i++) {
            // console.log(imgContainer[i]);
            
            $(imgContainerImgs[i]).on('load', function() {
                $(imgContainer[i]).width($(imgContainerImgs[i]).width());
                console.log('img container width set');
            });
        }
    } else {
        return;
    }
});