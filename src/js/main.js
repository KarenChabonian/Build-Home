;

//header fixed
var navElem = document.getElementById('nav');
var navSourceBottom = navElem.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function() {
    if (navElem.classList.contains('nav__fixed') && window.pageYOffset < navSourceBottom) {
        navElem.classList.remove('nav__fixed');
    } else if (window.pageYOffset > navSourceBottom) {
        navElem.classList.add('nav__fixed');
    }
};


// animate({
//     duration: 2000,
//     timing: makeEaseOut(bounce),
//     draw: function(progress) {
//       ball.style.top = height * progress + 'px'
//     }
//   });

//nav scroll
var navLink = document.querySelectorAll('.nav a'),
    V = 0.7;

for (var i = 0; i < navLink.length; i++) {
    navLink[i].onclick = function() {
        var w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);

        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
            window.scrollTo(0, r);
            if (r != w + t) { requestAnimationFrame(step) } else { location.hash = hash }
        }
        return false;
    }
}


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
        centerMode: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
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