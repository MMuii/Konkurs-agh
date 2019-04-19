function parallax(el, direction, offset, ratio) {
    let wScroll = $(window).scrollTop();                //window scroll

    $(`${el}`).css(`${direction}`, offset + (wScroll * ratio) + '%');
}

function bgParallax(el, offset, ratio) {
    let wScroll = $(window).scrollTop();   

    $(`${el}`).css('background-position', 'center ' + (offset + (wScroll*ratio)) + 'px');
}

function parallaxFade(el, offset, ratio) {    
    if ($(window).scrollTop() >= ($(el).offset().top - $(window).height()) + offset) {
        $(`${el}`).css('opacity', 1 - ($(window).scrollTop() / ratio));
        $(`${el}`).css('transform', `scale(${1 - ($(window).scrollTop() / ratio / 25)})`);
    } 

    let elOpacity = document.querySelector(el).style.opacity;
    if (elOpacity <= 0) {
        $(`${el}`).css('user-select', 'none');
        $(`${el} li`).css('cursor', 'default');
        // console.log("changed to 0");
    } else if (elOpacity > 0 ) {
        $(`${el}`).css('user-select', 'auto');
        $(`${el} li`).css('cursor', 'pointer');
    }
    // console.log(elOpacity);
}