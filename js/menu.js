$(document).ready(function () {
    let mainList = $('.header_nav_list--main');

    let listItemsMain = $('.header_nav_list_item--main');

    let listItemsMainArr = Array.from(listItemsMain);

    let leftMainList = $('.header_left_wrapper--main');

    let listItemsLeftMain = $('.header_left_wrapper_item--main');
    let listItemsLeftMainArr = Array.from(listItemsLeftMain);

    let guideItems = $('.header_nav_list_item--guide');
    let guideItemsArr = Array.from(guideItems);

    let aboutSiteItems = $('.header_nav_list_item--about-site');
    let aboutSiteItemsArr = Array.from(aboutSiteItems);

    let aboutPageItems = $('.header_nav_list_item--about-page');
    let aboutPageItemsArr = Array.from(aboutPageItems);

    let aboutAuthorItems = $('.header_nav_list_item--about-author');
    let aboutAuthorItemsArr = Array.from(aboutAuthorItems);

    let bibliographyItems = $('.header_nav_list_item--bibliography');
    let bibliographyItemsArr = Array.from(bibliographyItems);

    let currentDisplaying = 'main';

    $('.header_nav_list_item--main').on('click', function() {
        const maxLoops = listItemsMainArr.length;
        let counter = 0;

        let nextContent = $(this).attr('data-menu');

        (function next() {
            if (counter++ > maxLoops - 1) {
                setTimeout(() => {
                    resetPosition();                 //resetuje pozycje do 0, żeby po zmianie treści animacja znów wystartowała od lewej 
                }, 259);
                setTimeout(() => {
                    changeContent(nextContent);                 //zmienia content
                }, 260);
                return;
            }
    
            setTimeout(function() {
                $(listItemsMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(3rem)').css('opacity', '0').css('pointer-events', 'none');
                $(listItemsLeftMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(-3rem)').css('opacity', '0');

                next();
            }, 50);
        })();
    });

    $('.header_nav_list_item--icon-back').on('click', function() {
        var counter = 0;
        let maxLoops = 0;

        let currentIconBack;

        switch (currentDisplaying) {
            case 'guide':
                maxLoops = guideItemsArr.length;
                break;
            case 'about-site':
                maxLoops = aboutSiteItemsArr.length;
                break;
            case 'about-page':
                maxLoops = aboutPageItemsArr.length;
                break;
            case 'about-author':
                maxLoops = aboutAuthorItemsArr.length; 
                break;
            case 'bibliography':
                maxLoops = bibliographyItemsArr.length+1;   //+1 bo bez tego była jedna iteracja za mało względem lewej strony headera
                break;
            default:
                maxLoops = listItemsLeftMainArr.length;
                break;
        }

        switch (currentDisplaying) {
            case 'guide': 
                currentIconBack = $('.header_nav_list_item--icon-back--guide');
                break;
            case 'about-site': 
                currentIconBack = $('.header_nav_list_item--icon-back--about-site');
                break;
            case 'about-page': 
                currentIconBack = $('.header_nav_list_item--icon-back--about-page');
                break;
            case 'about-author':
                currentIconBack = $('.header_nav_list_item--icon-back--about-author');
                break;
            case 'bibliography':
                currentIconBack = $('.header_nav_list_item--icon-back--bibliography');
                break;
            default:
                console.log('nie dziala');
                break;
        }

        (function next() {
            if (counter++ > maxLoops - 1) {
                setTimeout(() => {
                    $(currentIconBack).css('transition', 'all .3s').css('transform', 'translateX(3rem)').css('opacity', '0');            //to jest tu a nie niżej i w timeoucie, bo icon back nie ma klasy --main, więc nie łapie się do tablic używanych niżej, musi być oddzielnie i mieć swój oddzielny timeout
                }, 50);

                setTimeout(() => {
                    resetPosition();                 //resetuje pozycje do 0, żeby po zmianie treści animacja znów wystartowała od lewej 
                }, 259);
                setTimeout(() => {
                    goBack();               //zmienia content na defaultowy
                }, 260);
                return;
            }
    
            switch (currentDisplaying) {
                case 'guide':
                    setTimeout(function() {
                        $(guideItemsArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(3rem)').css('opacity', '0');
                        $(listItemsLeftMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(-3rem)').css('opacity', '0');
                        // console.log('huj kurwa');
                        next();
                    }, 50);
                    break;
                case 'about-site':
                    setTimeout(function() {
                        $(aboutSiteItemsArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(3rem)').css('opacity', '0');
                        $(listItemsLeftMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(-3rem)').css('opacity', '0');
                        next();
                    }, 50);
                    break;
                case 'about-page':
                    setTimeout(function() {
                        $(aboutPageItemsArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(3rem)').css('opacity', '0');
                        $(listItemsLeftMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(-3rem)').css('opacity', '0');
                        next();
                    }, 50);
                    break;
                case 'about-author':
                    setTimeout(function() {
                        $(aboutAuthorItemsArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(3rem)').css('opacity', '0');
                        $(listItemsLeftMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(-3rem)').css('opacity', '0');
                        next();
                    }, 50);
                    break;
                
                case 'bibliography':
                    setTimeout(function() {
                        $(bibliographyItemsArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(3rem)').css('opacity', '0');
                        $(listItemsLeftMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(-3rem)').css('opacity', '0');
                        next();
                    }, 50);
                    break;
            
                default:
                    setTimeout(function() {
                        $(listItemsMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(3rem)').css('opacity', '0');
                        $(listItemsLeftMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(-3rem)').css('opacity', '0');
        
                        next();
                    }, 50);
                    break;
            }
        })();
    })

    function resetPosition() {
        listItemsMainArr.forEach(el => {
            $(el).css('transition', 'all 0s').css('transform', 'translateX(-3rem)');               //resetuje pozycje rzeczy z prawej
        });
        guideItemsArr.forEach(el => {
            $(el).css('transition', 'all 0s').css('transform', 'translateX(-3rem)');               //resetuje pozycje rzeczy z prawej
        });
        aboutSiteItemsArr.forEach(el => {
            $(el).css('transition', 'all 0s').css('transform', 'translateX(-3rem)');               //resetuje pozycje rzeczy z prawej
        });
        aboutPageItemsArr.forEach(el => {
            $(el).css('transition', 'all 0s').css('transform', 'translateX(-3rem)');               //resetuje pozycje rzeczy z prawej
        });
        aboutAuthorItemsArr.forEach(el => {
            $(el).css('transition', 'all 0s').css('transform', 'translateX(-3rem)');               //resetuje pozycje rzeczy z prawej
        });
        bibliographyItemsArr.forEach(el => {
            $(el).css('transition', 'all 0s').css('transform', 'translateX(-3rem)');               //resetuje pozycje rzeczy z prawej
        });
        listItemsLeftMainArr.forEach(el => {
            $(el).css('transition', 'all 0s').css('transform', 'translateX(3rem)');                 //resetuje pozycje rzeczy z lewej
        });
        $('.header_nav_list_item--icon-back--guide').css('transition', 'all 0s').css('transform', 'translateX(-3rem)'); //resetuje pozycje przycisku do cofania (z prawej)
        $('.header_nav_list_item--icon-back--about-site').css('transition', 'all 0s').css('transform', 'translateX(-3rem)'); //resetuje pozycje przycisku do cofania (z prawej)
        $('.header_nav_list_item--icon-back--about-page').css('transition', 'all 0s').css('transform', 'translateX(-3rem)'); //resetuje pozycje przycisku do cofania (z prawej)
        $('.header_nav_list_item--icon-back--about-author').css('transition', 'all 0s').css('transform', 'translateX(-3rem)'); //resetuje pozycje przycisku do cofania (z prawej)
        $('.header_nav_list_item--icon-back--bibliography').css('transition', 'all 0s').css('transform', 'translateX(-3rem)'); //resetuje pozycje przycisku do cofania (z prawej)
    }
    
    function changeContent(type) {
        // let maxLoops = listItemsMainArr.length;
        let counter = 0;
        let maxLoops = 0;

        currentDisplaying = type;

        switch (type) {
            case 'guide':
                maxLoops = guideItemsArr.length;
                break;
            case 'about-site':
                maxLoops = aboutSiteItemsArr.length;
                break;
            case 'about-page':
                maxLoops = aboutPageItemsArr.length;
                break;
            case 'about-author':
                maxLoops = aboutAuthorItemsArr.length; 
                break;
            case 'bibliography':
                maxLoops = bibliographyItemsArr.length+1;       //+1 bo bez tego była jedna iteracja za mało względem lewej strony headera
                break;
            default:
                maxLoops = listItemsLeftMainArr.length;
                break;
        }

        (function next() {
            if (counter++ > maxLoops - 1) {
                switch (type) {
                    case 'guide':
                        $('.header_nav_list_item--icon-back--guide').css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1').css('pointer-events', 'all'); 
                        break;
                    case 'about-site':
                        $('.header_nav_list_item--icon-back--about-site').css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1').css('pointer-events', 'all'); 
                        break;
                    case 'about-page':
                        $('.header_nav_list_item--icon-back--about-page').css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1').css('pointer-events', 'all'); 
                        break;
                    case 'about-author':
                        $('.header_nav_list_item--icon-back--about-author').css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1').css('pointer-events', 'all'); 
                        break;
                    case 'bibliography':
                        $('.header_nav_list_item--icon-back--bibliography').css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1').css('pointer-events', 'all'); 
                        break;
                    default:
                        break;
                }
                return;
            }
            
            switch (type) {  
                case 'guide':
                    const textsLeftGuide = ['Instrukcja', 'Jak nawigować po stronie, aby niczego nie przegapić', ''];
                    
                    setTimeout(function() {
                        $(guideItemsArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1');
                        
                        $(listItemsLeftMainArr[counter - 1]).text(`${textsLeftGuide[counter - 1]}`);
                        $(listItemsLeftMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1');
                        next();
                    }, 50);
                    break;

                case 'about-site':
                    const textsLeftAboutSite = ['O stronie', 'Geneza pomysłu oraz opis zawartości i przesłanie strony', ''];
                    
                    setTimeout(function() {
                        $(aboutSiteItemsArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1');
                        
                        $(listItemsLeftMainArr[counter - 1]).text(`${textsLeftAboutSite[counter - 1]}`);
                        $(listItemsLeftMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1');
                        next();
                    }, 50);
                    break;

                case 'about-page':
                    const textsLeftAboutPage = ['Wykorzystane programy', 'Wykorzystane programy i technologie, informacje dotyczące przeglądarek', ''];
                    
                    setTimeout(function() {
                        $(aboutPageItemsArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1');
                        
                        $(listItemsLeftMainArr[counter - 1]).text(`${textsLeftAboutPage[counter - 1]}`);
                        $(listItemsLeftMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1');
                        next();
                    }, 50);
                    break;

                case 'about-author':
                    const textsLeftAboutAuthor = ['O autorze', 'Nazywam się Marcin Świderek, mam 20 lat i obecnie jestem uczniem klasy maturalnej technikum o profilu ekonomicznym w Zespole Szkół nr 3 w Skierniewicach.', 'Intersuję się przede wszystkim informatyką, matematyką oraz historią.'];

                    setTimeout(function() {
                        $(aboutAuthorItemsArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1');
                        
                        $(listItemsLeftMainArr[counter - 1]).text(`${textsLeftAboutAuthor[counter - 1]}`);
                        $(listItemsLeftMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1');
                        next();
                    }, 50);
                    break;

                case 'bibliography':
                    const textsLeftBibliography = ['Źródła', 'Bibliografia, linki do źródeł wszystkich informacji zawartych na stronie oraz wykorzystanych skryptów i fontów.', '']; 
                    
                    $('.header_nav_list--bibliography').css('pointer-events', 'all');   //włącza pointer eventy, żeby lista bibliografii sie scrollowała, potem wyłącza przy funkcji goBack()
                    // const textsRightBibliography = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6'];

                    setTimeout(function() {
                        // $(listItemsMainArr[counter - 1]).text(`${textsRightBibliography[counter - 1]}`);
                        $(bibliographyItemsArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1');
                        
                        $(listItemsLeftMainArr[counter - 1]).text(`${textsLeftBibliography[counter - 1]}`);
                        $(listItemsLeftMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1');
                        next();
                    }, 50);
                    break;
                case '#':
                    console.log('tu bedzie coś później');
                    break;
                default:
                    break;
            }
        })();
    }

    function goBack() {
        var maxLoops = listItemsMainArr.length;
        var counter = 0;

        const defaultTextsLeft = ['Matematyka przodków', '<i>"Dlaczego ludzie uczą się matematyki? Aby nauczać matematyki innych."</i><br><br> - Hugo Steinhaus', ''];
        const defaultTextsRight = ['O stronie', 'O autorze', 'Źródła', 'Użyte programy<br>i technologie']; // DODAĆ , 'Instrukcja'
    
        $('.header_nav_list--bibliography').css('pointer-events', 'none');  //wyłącza pointer eventy po tym jak funkcja changeContent() je włączała, żeby lista w bibliografii sie scrollowała

        (function next() {
            if (counter++ > maxLoops - 1) {
                $('.header_nav_list_item--icon-back').css('transition', 'all .3s').css('transform', 'translateX(3rem)').css('opacity', '0').css('pointer-events', 'none');
                return;
            }
    
            setTimeout(function() {
                $(listItemsMainArr[counter - 1]).html(`${defaultTextsRight[counter - 1]}`);
                $(listItemsMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1').css('pointer-events', 'all');
                
                $(listItemsLeftMainArr[counter - 1]).html(`${defaultTextsLeft[counter - 1]}`);  //html żeby dało się uzywac htmlowych tagów <br> itp
                $(listItemsLeftMainArr[counter - 1]).css('transition', 'all .3s').css('transform', 'translateX(0rem)').css('opacity', '1');
                next();
            }, 50);
        })();
    }
});
