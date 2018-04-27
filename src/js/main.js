;

// nav scroll
$(function() {
    $(document).ready(function() {
        $('.nav a').click(function(event) {
            var getHref = $(this).attr('href');
            var jump = $(getHref).offset().top - -1;

            $('html, body').animate({ scrollTop: jump }, 1000);

        });
    });
});


//top slick slider
$(document).ready(function() {
    $('.center').slick({
        centerMode: true,
        centerPadding: '12.8%',
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slideToScroll: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

//services slick slider
$(document).ready(function() {
    $('.services__slider').slick({
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slideToScroll: 4,

        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});






// //header scroll
// $(document).scroll(function() {

//     if (($(document).scrollTop() > 530)) {
//         $('.header').addClass('header-scroll');

//         if (($(document).scrollTop() > 1100)) {
//             $('.header').removeClass('header-scroll');
//             $('.header').addClass('header-hidden');
//         } else {
//             $('.header').removeClass('header-hidden');
//         }
//         return;
//     }

//     $('.header').removeClass('header-scroll');

// });