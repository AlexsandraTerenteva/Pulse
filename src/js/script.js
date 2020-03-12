$(document).ready(function(){
		$('.carousel__inner').slick({
			infinite: true,
			speed: 1200,
			variableWidth: true,
			prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.png" alt="arrow"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arroow-right.png" alt="arrow"></button>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: true,
						arrows: false
					}					
				},
				{
					breakpoint: 768,
					settings: {
					  arrows: false,
					  dots: true
					}
				  },
				  {
					breakpoint: 768,
					settings: {
					  arrows: false
					}
				  },
				    
			]
		});
		 $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    		$(this)
      			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  		});
	
		function toggleClass(item) {
			$(item).each(function(i){
				$(this).on('click', function(e){
					e.preventDefault();
					$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
					$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
				});
			});
		}

		toggleClass('.catalog-item__link');
		toggleClass('.catalog-item__back');

		$('[data-modal=consiltation]').on('click', function(){
			$('.overlay, #consiltation').fadeIn();
		});

		$('.modal__close').on('click', function(){
			$('.overlay, #consiltation, #thanks, #order').fadeOut('slow');
		});

		$('.button_mini').each(function(i) {
			$(this).on('click', function() {
				$('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
				$('.overlay, #order').fadeIn('slow');
			});
		});

		function validateForms(form) {
			$(form).validate({
				rules: {
					name: "required",
					phone: "required",
					email: {
						required: true,
						email: true
					}
				},
				messages: {
					name: "Пожайлуста, введите свое имя",
					phone: "Пожайлуста, введите свой номер телефон",
					email: {
						required:"Пожайлуста, введите свой почтовый адрес",
						email:"Неправильно введен адрес почты"
					}
				}
			});
		}

		validateForms('#consiltation-form');
		validateForms('#consiltation form');
		validateForms('#order form');
});