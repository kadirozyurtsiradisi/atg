$(document).ready(function () {
	
	
	
	$('.burger-wrapper').click(function () {
		if ($(window).width() <= 1024) {
			$('.menu-wrapper2').css({ 'visibility': 'visible', 'left': -($(window).width() + 350), 'top': -($(window).width() + 90), 'width': $(window).width() * 2 + 1600, 'height': $(window).width() * 2 + 1600 });
		}

		else {
			$('.menu-wrapper2').css({ 'visibility': 'visible', 'left': -($(window).width() + 250), 'top': -($(window).width() + 90), 'width': $(window).width() * 2 + 300, 'height': $(window).width() * 2 + 300 });
		}

		$('body').toggleClass('nav-opened');
		
		$('header').toggleClass('open');


	});
	
		
		
	if($(window).width()<640){
		$('.online-teklif-popup').height($(window).height());
	}
	
    $('.popup-bg').click(function(){
		$(this).removeClass('active');
		$('.online-teklif-popup .close').trigger('click');
	});
	
	
	

	
	$('.online-teklif-popup .close').click(function(){
		$('.popup-bg').removeClass('active');
		$('.online-teklif-popup').removeClass('active');
	});
	
	$('.online-teklif').click(function(){
		$('.popup-bg').addClass('active');
		$('.online-teklif-popup').addClass('active');
	});
	

	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		if (scroll > 42) {
			$("header").addClass("fixed-header");
			
		} else {
			$("header").removeClass("fixed-header");
			
		}
	});

	var scroll = $(window).scrollTop();
		if (scroll > 42) {
			$("header").addClass("fixed-header");
			
		} else {
			$("header").removeClass("fixed-header");
			
		}


		$('.menu-wrapper .center nav a').click(function(){
			if($('header .right-header .menu-btn').hasClass('active')){
				$('header .right-header .menu-btn').trigger('click');
			}
		});

    //anim
   
    new WOW().init();
    

	
	
    $('.menu-btn .burger-wrapper').click(function () {
		$(this).toggleClass('active');
		$('.menu-wrapper').fadeToggle();
		$('body').toggleClass('overFlowHidden');
		$('header').removeClass('fixed-header');

		if($(this).hasClass('active')){
			$('body').removeClass('fixed-header');
			$('header').addClass('white');
		}
		else{
			$('body').addClass('fixed-header');
			$('header').removeClass('white');
		}

    });



    // var owl = $('.home-slider');
	// owl.owlCarousel({
		// margin: 0,
		// nav: false,
		// loop: true,
		// center: true,
		// smartSpeed: 500,
		// autoplay: true,
		// autoplayTimeout: 5000,
		// autoplayHoverPause: true,
		// responsive: {
			// 0: {
				// items: 1
			// }
		// }
    // });
	 var owl = $('.home-slider');
        owl.owlCarousel({ loop: true, mouseDrag: true, touchDrag: true, smartSpeed: 500, margin: 0, autoplay: 6000, responsiveClass: true, dots: true, nav: false, responsive: { 0: { items: 1 }} });
		owl.on('changed.owl.carousel', function (event) {
	        var currentItem = event.item.index - 2;
	        $('.slideNum span').html('0' + (currentItem + 1) + '');
            owl.trigger('to.owl.carousel', [currentItem, 0, true])
            // if ($('.slideNum span').text() == 04 )
            // {
                // $('.slideNum span').text('01');
            // }
	    });

	var owl2 = $('.detail-slider');
	owl2.owlCarousel({
		margin: 0,
		nav: true,
		loop: true,
		dots:false,
		center: true,
		smartSpeed: 500,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			}
		}
    });

});




	

    $('#telefonOnline').inputmask({ "mask": "(599) 999-9999" });
	$('#telefon').inputmask({ "mask": "(599) 999-9999" });

   
	var form = $("#form").validate({
		rules: {
			adiSoyadiOnline: "required",
			mesajOnline: "required",
			telefonOnline: {
				required: true,
				minlength: 4
			},
			emailOnline: {
				required: true,
				email: true,
				remote: "emails.action",
				regex: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i
			}
		},
		messages: {
			adiSoyadiOnline: "Adınızı yazın",
			mesajOnline: "Mesaj yazın",
			telefonOnline: "Geçerli bir telefon yazın",
			emailOnline: {
				required: "Lütfen e-posta adresinizi yazın",
				minlength: "Lütfen e-posta adresinizi yazın"
			}
		},
		// the errorPlacement has to take the table layout into account
		errorPlacement: function (error, element) {
			error.appendTo(element.parent());

		},
		// specifying a submitHandler prevents the default submit, good for the demo
		submitHandler: function () {
			alert("Form Gönderildi");

			
		},
		// set this class to error-labels to indicate valid fields
		success: function (label) {
			// set &nbsp; as text for IE
			label.html("&nbsp;").addClass("checked");
		},
		highlight: function (element, errorClass) {
			$(element).parent().find("." + errorClass).removeClass("checked");
		}
	});
	
	//form();



	var formIletisim = $("#formIletisim").validate({
		rules: {
			adiSoyadi: "required",
			mesaj: "required",
			telefon: {
				required: true,
				minlength: 4
			},
			email: {
				required: true,
				email: true,
				remote: "emails.action",
				regex: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i
			}
		},
		messages: {
			adiSoyadi: "Adınızı yazın",
			mesaj: "Mesaj yazın",
			telefon: "Geçerli bir telefon yazın",
			email: {
				required: "Lütfen e-posta adresinizi yazın",
				minlength: "Lütfen e-posta adresinizi yazın"
			}
		},
		// the errorPlacement has to take the table layout into account
		errorPlacement: function (error, element) {
			error.appendTo(element.parent());

		},
		// specifying a submitHandler prevents the default submit, good for the demo
		submitHandler: function () {
			alert("Form Gönderildi");

			
		},
		// set this class to error-labels to indicate valid fields
		success: function (label) {
			// set &nbsp; as text for IE
			label.html("&nbsp;").addClass("checked");
		},
		highlight: function (element, errorClass) {
			$(element).parent().find("." + errorClass).removeClass("checked");
		}
	});
	
	




$(window).resize(function(){
	if($(window).width()<640){
		$('.online-teklif-popup').height($(window).height());
	}
});
