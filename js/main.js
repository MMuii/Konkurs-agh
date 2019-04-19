$(document).ready(function () {

    let currentSection = 0;
    let currentQuery = '';

    getScreenWitdth();

    $(window).on('resize', function(){
        getScreenWitdth();
    });

    $(window).scroll(function(){
        setCurrentSection();

        //FOREGROUND///////////////////////////////////////////////////
        //(el, direction, offset, ratio) 
        if (currentSection === 0) {
            parallaxFade(".header", 0, 750);
            parallax(".header_left", 'top', 0, .09);
            parallax(".header_right", 'top', 0, .09);
        } 

        if (currentSection === 0 || currentSection === 1) {
            parallax(".s1-f1", 'top', 280, -.15);
            parallax(".s1-f3", 'top', 370, -.04);
        }

        if (currentSection === 1 || currentSection === 2) { //PREHISTORIA
            parallax(".s2-f1", 'top', 600, -.15);
            parallax(".s2-f2", 'top', 950, -.05);
            parallax(".s2-f3", 'top', 1050, -.12);
        }

        if (currentSection === 2 || currentSection === 3) { //MEZOPOTAMIA
            if (currentQuery === 'max') {
                parallax(".s3-f1", 'top', 650, -.12);
                parallax(".s3-f2", 'top', 2100, -.19);
            } else if (currentQuery === 'med') {
                parallax(".s3-f1", 'top', 650, -.12);
                parallax(".s3-f2", 'top', 2100, -.19);
            } else if (currentQuery === 'lil') {
                parallax(".s3-f1", 'top', 650, -.12);
                parallax(".s3-f2", 'top', 1650, -.19);
            }

        }

        if (currentSection === 3 || currentSection === 4) { //EGIPT
            if (currentQuery === 'max') {
                parallax(".s4-f1", 'top', 2100, -.19);
                parallax(".s4-f2", 'top', 2950, -.19);      
                parallax(".s4-f3", 'top', 2150, -.10);
                parallax(".s4-f4", 'top', 2500, -.19);      //koniarz
                parallax(".s4-f5", 'top', 2850, -.13);      //postać na samym końcu i liście dookoła
                parallax(".s4-f6", 'top', 3750, -.19);      //postać na samym końcu i liście dookoła
                parallax(".s4-f7", 'top', 2450, -.08);      //postać na samym końcu i liście dookoła
            } else if (currentQuery === 'med') {
                parallax(".s4-f1", 'top', 1600, -.19);
                parallax(".s4-f2", 'top', 2300, -.19);
                parallax(".s4-f3", 'top', 1450, -.10);
                parallax(".s4-f4", 'top', 1900, -.19);
                parallax(".s4-f5", 'top', 2250, -.13);      //postać na samym końcu i liście dookoła
                parallax(".s4-f6", 'top', 3050, -.19);      //postać na samym końcu i liście dookoła
                parallax(".s4-f7", 'top', 1925, -.08);      //postać na samym końcu i liście dookoła
            } else if (currentQuery === 'lil') {
                parallax(".s4-f1", 'top', 1500, -.19);
                parallax(".s4-f2", 'top', 2200, -.19);
                parallax(".s4-f3", 'top', 1450, -.10);
                parallax(".s4-f4", 'top', 1900, -.19);
                parallax(".s4-f5", 'top', 2100, -.13);      //postać na samym końcu i liście dookoła
                parallax(".s4-f6", 'top', 2850, -.19);      //postać na samym końcu i liście dookoła
                parallax(".s4-f7", 'top', 1900, -.08);   
            }

        }

        if (currentSection === 4 || currentSection === 5) { //MEZOAMERYKA
            if (currentQuery === 'max') {
                parallax(".s5-f1", 'top', 85, -.007);       //paralaksa w headerze
                parallax(".s5-f2", 'top', 2700, -.19);      //napis starożytna mezoameryka
                parallax(".s5-f3", 'top', 3700, -.19);      //niebieski kalendarz azteków
                parallax(".s5-f4", 'top', 1600, -.07);      //azteckie malunki
                parallax(".s5-f5", 'top', 3800, -.13);      //azteckie malunki
                parallax(".s5-f6", 'top', 4860, -.19);      //azteckie malunki
                parallax(".s5-f7", 'top', 3650, -.15);      //głowa olemków
            } else if (currentQuery === 'med') {
                parallax(".s5-f1", 'top', 60, -.007);       //paralaksa w headerze
                parallax(".s5-f2", 'top', 2050, -.19);      //napis mezoameryka
                parallax(".s5-f3", 'top', 2700, -.19);      //niebieski kalendarz azteków
                parallax(".s5-f4", 'top', 1700, -.07);      //azteckie malunki
                parallax(".s5-f5", 'top', 3300, -.13);      //azteckie malunki
                parallax(".s5-f6", 'top', 4160, -.19);      //azteckie malunki
                parallax(".s5-f7", 'top', 3150, -.15);      //głowa olemków
            } else if (currentQuery === 'lil') {
                parallax(".s5-f1", 'top', 50, -.007);       //paralaksa w headerze
                parallax(".s5-f2", 'top', 1950, -.19);      //napis mezoameryka
                parallax(".s5-f3", 'top', 2400, -.19);      //niebieski kalendarz azteków
                parallax(".s5-f4", 'top', 1700, -.07);      //azteckie malunki
                parallax(".s5-f5", 'top', 3050, -.13);      //azteckie malunki
                parallax(".s5-f6", 'top', 3810, -.19);      //azteckie malunki
                parallax(".s5-f7", 'top', 2850, -.15);      //głowa olemków
            }

        }

        if (currentSection === 5 || currentSection === 6) {
            if (currentQuery === 'max') {
                parallax(".s6-f1", 'top', 72, -.0045);    //peru tlo w headerze lewo
                parallax(".s6-f2", 'top', 72, -.0045);    
                parallax(".s6-f3", 'top', 82, -.006);      
                parallax(".s6-f4", 'top', 103, -.006);
                parallax(".s6-f5", 'top', 3250, -.19);      
            } else if (currentQuery === 'med') {
                parallax(".s6-f1", 'top', 57, -.0045);    //peru tlo w headerze lewo
                parallax(".s6-f2", 'top', 57, -.0045);    //peru tlo w headerze prawo
                parallax(".s6-f3", 'top', 85, -.006);      //peru chmury lewo
                parallax(".s6-f4", 'top', 110, -.006);      //peru chmury prawo
                parallax(".s6-f5", 'top', 2650, -.19);      //peru napis
            }  else if (currentQuery === 'lil') {
                parallax(".s6-f1", 'top', 50, -.0045);    //peru tlo w headerze lewo
                parallax(".s6-f2", 'top', 50, -.0045);    //peru tlo w headerze prawo
                parallax(".s6-f3", 'top', 78, -.006);      //peru chmury lewo
                parallax(".s6-f4", 'top', 103, -.006);      //peru chmury prawo
                parallax(".s6-f5", 'top', 2350, -.19);      //peru napis
            }              
        }

        if (currentSection === 6 || currentSection === 7) { //CHINY
            if (currentQuery === 'max') {
                parallax(".s7-f1", 'top', 136.5, -.007);
                parallax(".s7-f2", 'top', 136.5, -.007);
                parallax(".s7-f3", 'top', 415, -.02);
                parallax(".s7-f4", 'top', 2800, -.04);
                parallax(".s7-f5", 'top', 1800, -.04);
                parallax(".s7-f6", 'top', 4300, -.04);
                parallax(".s7-f7", 'top', 3300, -.04);
            } else if (currentQuery === 'med') {
                parallax(".s7-f1", 'top', 107.5, -.007);
                parallax(".s7-f2", 'top', 112, -.007);
                parallax(".s7-f3", 'top', 344, -.02);
                parallax(".s7-f4", 'top', 2600, -.04);      //smok wystajacy z boku
                parallax(".s7-f5", 'top', 1570, -.04);      //malunek na tekście z przodu
                parallax(".s7-f6", 'top', 3900, -.04);      //malunek na tekscie z tyłu
                parallax(".s7-f7", 'top', 2900, -.04);      //smok z lewej z tylu
            } else if (currentQuery === 'lil') {
                parallax(".s7-f1", 'top', 91.5, -.007);
                parallax(".s7-f2", 'top', 96, -.007);
                parallax(".s7-f3", 'top', 302.5, -.02);
                parallax(".s7-f4", 'top', 2350, -.04);      //smok wystajacy z boku
                parallax(".s7-f5", 'top', 1370, -.04);      //malunek na tekście z przodu
                parallax(".s7-f6", 'top', 3400, -.04);      //malunek na tekscie z tyłu
                parallax(".s7-f7", 'top', 2760, -.04);      //smok z lewej z tylu
            }
        }

        if (currentSection === 7 || currentSection === 8) { //INDIE
            if (currentQuery === 'max') {
                parallax(".s8-f1", 'top', 5600, -.19);
            } else if (currentQuery === 'med') {
                parallax(".s8-f1", 'top', 4800, -.19);
            } else if (currentQuery === 'lil') {
                parallax(".s8-f1", 'top', 4150, -.19);
            }
        }

        if (currentSection === 8 || currentSection === 9) { //GRECJA
            if (currentQuery === 'max') {
                parallax(".s9-f1", 'top', 7250, -.19);
                parallax(".s9-f2", 'top', 2500, -.04);
                parallax(".s9-f3", 'top', 2850, -.04);
                parallax(".s9-f4", 'top', 3700, -.04);
                parallax(".s9-f5", 'top', 4250, -.04);
            } else if (currentQuery === 'med') {
                parallax(".s9-f1", 'top', 6150, -.19);      //napis grecja
                parallax(".s9-f2", 'top', 2200, -.04);      //pierwszy z prawej od góry 
                parallax(".s9-f3", 'top', 2500, -.04);      //drugi od lewej
                parallax(".s9-f4", 'top', 3100, -.04);      //trzeci od prawej
                parallax(".s9-f5", 'top', 3870, -.04);
            } else if (currentQuery === 'lil') {
                parallax(".s9-f1", 'top', 5400, -.19);      //napis grecja
                parallax(".s9-f2", 'top', 2030, -.04);      //pierwszy z prawej od góry 
                parallax(".s9-f3", 'top', 2750, -.04);      //drugi od lewej
                parallax(".s9-f4", 'top', 3300, -.04);      //trzeci od prawej
                parallax(".s9-f5", 'top', 3600, -.04);
            }
        }

        if (currentSection === 9 || currentSection === 10) { //ISLAM
            if (currentQuery === 'max') {
                parallax(".s10-f1", 'top', 8050, -.19);
            } else if (currentQuery === 'med') {
                parallax(".s10-f1", 'top', 6820, -.19);
            } else if (currentQuery === 'lil') {
                parallax(".s10-f1", 'top', 5800, -.19);
            }
        }



        if (currentSection === 0 || currentSection === 1) {
            if (currentQuery === 'max') {
                parallax(".content_left--1", 'top', 0, .007);
                parallax(".content_right--1", 'top', 7, .007);
            } else if (currentQuery === 'med') {
                parallax(".content_left--1", 'top', -3, .007);
                parallax(".content_right--1", 'top', 4, .007);
            } else if (currentQuery === 'lil') {
                parallax(".content_left--1", 'top', 0, .007);
                parallax(".content_right--1", 'top', 7, .007);
            }
        }

        if (currentSection === 1 || currentSection === 2) { //STAROŻYTNOŚĆ
            parallax(".content_left--2", 'top', -14, .007);
            parallax(".content_right--2", 'top', -14, .007);
        }

        if (currentSection === 2 || currentSection === 3) { //MEZOPOTAMIA
            if (currentQuery === 'max') {
                parallax(".content_left--3", 'top', -33, .007);
                parallax(".content_right--3", 'top', -33, .007);
            } else if (currentQuery === 'med') {
                parallax(".content_left--3", 'top', -33, .007);
                parallax(".content_right--3", 'top', -33, .007);
            } else if (currentQuery === 'lil') {
                parallax(".content_left--3", 'top', -28, .007);
                parallax(".content_right--3", 'top', -28, .007);
            }
        }

        if (currentSection === 3 || currentSection === 4) { //EGIPT
            if (currentQuery === 'max') {
                parallax(".content_left--4", 'top', -48, .007);
                parallax(".content_right--4", 'top', -48, .007);
            } else if (currentQuery === 'med') {
                parallax(".content_left--4", 'top', -46, .007);
                parallax(".content_right--4", 'top', -46, .007);
            } else if (currentQuery === 'lil') {
                parallax(".content_left--4", 'top', -36, .007);
                parallax(".content_right--4", 'top', -36, .007);
            }

        }

        if (currentSection === 4 || currentSection === 5) { //MEZOAMERYKA
            if (currentQuery === 'max') {
                parallax(".content_left--5", 'top', -63, .005);         //.005 bo jak jest .007 to z jakiegoś powodu ta sekcja scrolluje sie wolniej
                parallax(".content_right--5", 'top', -63, .005);
            } else if (currentQuery === 'med') {
                parallax(".content_left--5", 'top', -50, .005);         //.005 bo jak jest .007 to z jakiegoś powodu ta sekcja scrolluje sie wolniej
                parallax(".content_right--5", 'top', -50, .005);
            } else if (currentQuery === 'lil') {
                parallax(".content_left--5", 'top', -48, .005);         //.005 bo jak jest .007 to z jakiegoś powodu ta sekcja scrolluje sie wolniej
                parallax(".content_right--5", 'top', -48, .005);
            }
        }

        if (currentSection === 5 || currentSection === 6) { //PERU
            if (currentQuery === 'max') {
                parallax(".content_left--6", 'top', -115, .007);
                parallax(".content_right--6", 'top', -115, .007);
            } else if (currentQuery === 'med') {
                parallax(".content_left--6", 'top', -94.5, .007);
                parallax(".content_right--6", 'top', -94.5, .007);
            } else if (currentQuery === 'lil') {
                parallax(".content_left--6", 'top', -85.5, .007);
                parallax(".content_right--6", 'top', -85.5, .007);
            }
        }

        if (currentSection === 6 || currentSection === 7) { //CHINY
            if (currentQuery === 'max') {
                parallax(".content_left--7", 'top', -88, .0045);         //.0045 bo jak jest .007 to z jakiegoś powodu ta sekcja scrolluje sie wolniej
                parallax(".content_right--7", 'top', -88, .0045);
            } else if (currentQuery === 'med') {
                parallax(".content_left--7", 'top', -72.5, .0045);         //.0045 bo jak jest .007 to z jakiegoś powodu ta sekcja scrolluje sie wolniej
                parallax(".content_right--7", 'top', -72.5, .0045);
            } else if (currentQuery === 'lil') {
                parallax(".content_left--7", 'top', -62.5, .0045);         //.0045 bo jak jest .007 to z jakiegoś powodu ta sekcja scrolluje sie wolniej
                parallax(".content_right--7", 'top', -62.5, .0045);
            }
        }

        if (currentSection === 7 || currentSection === 8) { //INDIE
            if (currentQuery === 'max') {
                parallax(".content_left--8", 'top', -124, .0045);         //.0045 bo jak jest .007 to z jakiegoś powodu ta sekcja scrolluje sie wolniej
                parallax(".content_right--8", 'top', -124, .0045);
            } else if (currentQuery === 'med') {
                parallax(".content_left--8", 'top', -103, .0045);         //.0045 bo jak jest .007 to z jakiegoś powodu ta sekcja scrolluje sie wolniej
                parallax(".content_right--8", 'top', -103, .0045);
            } else if (currentQuery === 'lil') {
                parallax(".content_left--8", 'top', -89, .0045);         //.0045 bo jak jest .007 to z jakiegoś powodu ta sekcja scrolluje sie wolniej
                parallax(".content_right--8", 'top', -89, .0045);
            }
        }

        if (currentSection === 8 || currentSection === 9) { //GRECJA
            if (currentQuery === 'max') {
                parallax(".content_left--9", 'top', -134, .004);         //.004 bo jak jest .007 to z jakiegoś powodu ta sekcja scrolluje sie wolniej
                parallax(".content_right--9", 'top', -134, .004);
            } else if (currentQuery === 'med') {
                parallax(".content_left--9", 'top', -111, .004);         //.004 bo jak jest .007 to z jakiegoś powodu ta sekcja scrolluje sie wolniej
                parallax(".content_right--9", 'top', -111, .004);
            } else if (currentQuery === 'lil') {
                parallax(".content_left--9", 'top', -96, .004);         //.004 bo jak jest .007 to z jakiegoś powodu ta sekcja scrolluje sie wolniej
                parallax(".content_right--9", 'top', -96, .004);
            }
        }

        if (currentSection === 9 || currentSection === 10) { //ISLAM
            if (currentQuery === 'max') {
                parallax(".content_left--10", 'top', -171, .004);         
                parallax(".content_right--10", 'top', -171, .004);
            } else if (currentQuery === 'med') {
                parallax(".content_left--10", 'top', -145.5, .004);         
                parallax(".content_right--10", 'top', -145.5, .004);
            } else if (currentQuery === 'lil') {
                parallax(".content_left--10", 'top', -128, .004);         
                parallax(".content_right--10", 'top', -128, .004);
            }
        }

        if (currentSection === 10) { //ISLAM
            if (currentQuery === 'max') {
                parallax(".content_left--11", 'top', -167, .004);         
                parallax(".content_right--11", 'top', -167, .004);
            } else if (currentQuery === 'med') {
                parallax(".content_left--11", 'top', -136.5, .004);         
                parallax(".content_right--11", 'top', -136.5, .004);
            } else if (currentQuery === 'lil') {
                parallax(".content_left--11", 'top', -118, .004);         
                parallax(".content_right--11", 'top', -118, .004);
            }
        }
        expandMiddleLine(40);
    });

    function setCurrentSection() {
        if (window.scrollY < $(`.section--1`).offset().top) {
            currentSection = 0;
        } else if ((window.scrollY >= $(`.section--1`).offset().top) && (window.scrollY < $(`.section--2`).offset().top)) {
            currentSection = 1;
        } else if ((window.scrollY >= $(`.section--2`).offset().top) && (window.scrollY < $(`.section--3`).offset().top)) {
            currentSection = 2;
        } else if ((window.scrollY >= $(`.section--3`).offset().top) && (window.scrollY < $(`.section--4`).offset().top)) {
            currentSection = 3;
        } else if ((window.scrollY >= $(`.section--4`).offset().top) && (window.scrollY < $(`.section--5`).offset().top)) {
            currentSection = 4;
        } else if ((window.scrollY >= $(`.section--5`).offset().top) && (window.scrollY < $(`.section--6`).offset().top)) {
            currentSection = 5;
        } else if ((window.scrollY >= $(`.section--6`).offset().top) && (window.scrollY < $(`.section--7`).offset().top)) {
            currentSection = 6;
        } else if ((window.scrollY >= $(`.section--7`).offset().top) && (window.scrollY < $(`.section--8`).offset().top)) {
            currentSection = 7;
        } else if ((window.scrollY >= $(`.section--8`).offset().top) && (window.scrollY < $(`.section--9`).offset().top)) {
            currentSection = 8;
        } else if ((window.scrollY >= $(`.section--9`).offset().top) && (window.scrollY < $(`.section--10`).offset().top)) {
            currentSection = 9;
        } else if (window.scrollY > $(`.section--10`).offset().top) {
            currentSection = 10;
        }
    }

    function getScreenWitdth() {
        if ($(document).width() >= 1550) {
            currentQuery = 'max';
            updateTransparentClasses(currentQuery);
            // console.log(currentQuery);
        } else if ($(document).width() >= 1366 && $(document).width() < 1550) {
            currentQuery = 'med';
            updateTransparentClasses(currentQuery);
            // console.log(currentQuery);
        } else if ($(document).width() < 1366) {
            currentQuery = 'lil';
            updateTransparentClasses(currentQuery);
            // console.log(currentQuery);
        }
    }

    function updateTransparentClasses(query) {

        /////////// MAX /////////////        

        if (query === 'max') {
            if(!$('.s5-pic4').parent().hasClass('makeFloatTransp')) {
                $('.s5-pic4').parent().addClass('makeFloatTransp');
            }

            if ($('.s4-pic10').parent().hasClass('makeFloatTransp')) {
                $('.s4-pic10').parent().removeClass('makeFloatTransp');
            }

            if ($('.s4-pic3').parent().hasClass('makeFloatTransp')) {
                $('.s4-pic3').parent().removeClass('makeFloatTransp');
            }

            if (!($('.text_container--2').hasClass('makeFloatTransp'))) {
                $('.text_container--2').addClass('makeFloatTransp');
            }
        }

        /////////// MED /////////////        

        if ($('.text_container--2').hasClass('makeFloatTransp')) {
            if (query === 'med' || query ==='lil') {
                $('.text_container--2').removeClass('makeFloatTransp');
            }
        }

        if (query === 'med') {
            $('.s3-pic6').parent().addClass('makeFloatTransp');
        } else if (query === 'max'){
            if ($('.s3-pic6').parent().hasClass('makeFloatTransp')) {
                $('.s3-pic6').parent().removeClass('makeFloatTransp');
            } else { return }
        }

        if (query === 'med') {
            $('.s4-pic5').parent().addClass('makeFloatTransp');

            $('.s4-f5').removeClass('floating_element--left').addClass('floating_element--right');
            $('.s4-f6').removeClass('floating_element--left').addClass('floating_element--right');
            $('.s4-f7').removeClass('floating_element--left').addClass('floating_element--right');
        } else if (query === 'max') {
            if ($('.s4-pic5').parent().hasClass('makeFloatTransp')) {
                $('.s4-pic5').parent().removeClass('makeFloatTransp');
            }

            $('.s4-f5').removeClass('floating_element--right').addClass('floating_element--left');
            $('.s4-f6').removeClass('floating_element--right').addClass('floating_element--left');
            $('.s4-f7').removeClass('floating_element--right').addClass('floating_element--left');
        }

        if (query === 'med') {
            $('.s5-pic3').parent().addClass('makeFloatTransp');
            $('.s5-pic5').parent().addClass('makeFloatTransp');

            $('.s5-pic8').parent().removeClass('makeFloatTransp');
        } else if (query === 'max'){
            if ($('.s5-pic3').parent().hasClass('makeFloatTransp')) {
                $('.s5-pic3').parent().removeClass('makeFloatTransp');
            } else { return }
            if ($('.s5-pic5').parent().hasClass('makeFloatTransp')) {
                $('.s5-pic5').parent().removeClass('makeFloatTransp');
            } else { return }
            if (!$('.s5-pic8').parent().hasClass('makeFloatTransp')) {
                $('.s5-pic8').parent().addClass('makeFloatTransp');
            } else { return }
        }

        if (query === 'med') {
            $('.s7-pic4').parent().addClass('makeFloatTransp');
            $('.s7-pic6').parent().addClass('makeFloatTransp');
        } else if (query === 'max'){
            if ($('.s7-pic4').parent().hasClass('makeFloatTransp')) {
                $('.s7-pic4').parent().removeClass('makeFloatTransp');
            } else { return }
            if ($('.s7-pic6').parent().hasClass('makeFloatTransp')) {
                $('.s7-pic6').parent().removeClass('makeFloatTransp');
            } else { return }
        }
        
        if (query === 'med') {
            $('.s9-pic6').parent().addClass('makeFloatTransp');
        } else if (query === 'max'){
            if ($('.s9-pic6').parent().hasClass('makeFloatTransp')) {
                $('.s9-pic6').parent().removeClass('makeFloatTransp');
            } else { return }
        }

        /////////// LIL /////////////

        if (query === 'lil') {
            // $('.s4-pic10').parent().addClass('makeFloatTransp');
            $('.s4-pic3').parent().addClass('makeFloatTransp');
        } else if (query === 'max') {
            // if ($('.s4-pic10').parent().hasClass('makeFloatTransp')) {
            //     $('.s4-pic10').parent().removeClass('makeFloatTransp');
            // } else { return }
            if ($('.s4-pic3').parent().hasClass('makeFloatTransp')) {
                $('.s4-pic3').parent().removeClass('makeFloatTransp');
            } else { return }
        }

        if (query === 'lil') {
            $('.s5-pic3').parent().addClass('makeFloatTransp');
            $('.s5-pic5').parent().addClass('makeFloatTransp');

            $('.s5-pic4').parent().removeClass('makeFloatTransp');
        } else if (query === 'max'){
            if ($('.s5-pic3').parent().hasClass('makeFloatTransp')) {
                $('.s5-pic3').parent().removeClass('makeFloatTransp');
            } else { return }
            if ($('.s5-pic5').parent().hasClass('makeFloatTransp')) {
                $('.s5-pic5').parent().removeClass('makeFloatTransp');
            } else { return }
            if (!$('.s5-pic4').parent().hasClass('makeFloatTransp')) {
                $('.s5-pic4').parent().addClass('makeFloatTransp');
            } else { return }
        }

        if (query === 'lil') {
            $('.s7-pic4').parent().addClass('makeFloatTransp');
            $('.s7-pic6').parent().addClass('makeFloatTransp');
        } else if (query === 'max'){
            if ($('.s7-pic4').parent().hasClass('makeFloatTransp')) {
                $('.s7-pic4').parent().removeClass('makeFloatTransp');
            } else { return }
            if ($('.s7-pic6').parent().hasClass('makeFloatTransp')) {
                $('.s7-pic6').parent().removeClass('makeFloatTransp');
            } else { return }
        }

        if (query === 'lil') {
            $('.s9-pic6').parent().addClass('makeFloatTransp');
        } else if (query === 'max'){
            if ($('.s9-pic6').parent().hasClass('makeFloatTransp')) {
                $('.s9-pic6').parent().removeClass('makeFloatTransp');
            } else { return }
        }
        // console.log('updated');
    }
});

