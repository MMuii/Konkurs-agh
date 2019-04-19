$(document).ready(function () {
        initMiddleLine();
});

function expandMiddleLine(ratio) {
        if (window.scrollY <= 1500) {
            $(".middle_line").css("height", `${75 + $(window).scrollTop() / ratio}%`);
                
        } else {
            return;
        }
        // console.log('expanding');
}

function initMiddleLine() {
        if (window.scrollY <= 1000) {
                $('.middle_line').css('height', '75%');
        } else {
                $('.middle_line').css('height', '100%');
        }
}