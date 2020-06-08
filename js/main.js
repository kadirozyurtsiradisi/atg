


$(document).ready(function () {

var owl = $('#home-slider');
owl.owlCarousel({
    margin: 0,
    nav: true,
    dots: false,
    loop: false,
    rewind: true,
    autoplay:true,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});



var owl = $('#home-slider-mobil');
owl.owlCarousel({
    margin: 0,
    nav: true,
    dots: false,
    loop: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


    setTimeout(function () {
        setInterval(function () {
            setRandomClass();
        }, 800);
        function setRandomClass() {
            var teamList = $('#active-country');
            var teamItem = teamList.find('.pointer');
            var number = teamItem.length;
            var random = Math.floor((Math.random() * number));
            if (teamItem.eq(random).hasClass('active')) {
                var random = random + 1
            }
            // $('#active-country path').addClass('transition');
            $('.active').addClass('active_old')
                .siblings().removeClass('active_old');
            teamItem.eq(random).addClass('active')
                .siblings().removeClass('active');
        }

    }, 3700);

    

    setTimeout(function () {
        $('.logo-loader').addClass('hide-loader');

    }, 4800);

    $('body').addClass('overFlowHidden');

    setTimeout(function () {
        $('body').removeClass('overFlowHidden');
    }, 4800)

});



var a = 0;
$(window).scroll(function () {
    var oTop = $('.home-about-wrapper').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 2200,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});
