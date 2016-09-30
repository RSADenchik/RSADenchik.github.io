$(document).ready( function () {
   /* Slider-slick */
    $('.slider-slick').slick({
        dots: false,
        variableWidth: false,
        infinite: true,
        speed: 700,
        prevArrow: "<img class='arrow arrow-fix slick-prev arrow-left' src='img/arrow-left.png'>",
        nextArrow: "<img class='arrow arrow-fix slick-next arrow-right' src='img/arrow-right.png'>",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 873,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('.carousel').carousel({
        interval: 6000,
        pause: 'hover',
        wrap: true
    });
    }
);