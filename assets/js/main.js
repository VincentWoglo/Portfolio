(function ($) {
 "use strict";
 
/*
 _____      						 _______ 	     
|  __ \  							|_ _ _ _| _  	 	    
| |__) | 					     _	   | |	 | |	        
|  ___/    ___    __ _    __ _  | |    | |	 | |__     ___ 	 _ __  _ __    ___ 
| |\ \    / _ \  / _` |  / _` | | |    | |	 | '_ \   / _ \ | '_ \| '_ \  / _ \
| | \ \  |  __/ | (_| | | (_| | | |    | |	 | | | | |  __/ | |  ||  | | |  __/
|_|  \ \  \___|  \__, |  \__,_| |_|    |_|   |_| |_|  \___| |_|  ||  |_|  \___|
                  __/ |              
                 |___/  		     
================================================================================ */

	// addClass on Body
	var darkVersion = $('.dark-version');
	darkVersion.parent('body').addClass('black-bg');
	/*
	ONE PAGE CLICK REMOVE IN CLASS
	================================== */
	var menuLiA = $('.mainmenu li a');
	menuLiA.on('click', function(e) {
		var navColl = $('.navbar-collapse ul');
		if ( $(e.target).is('a') ) {
			navColl.parent().removeClass('in');
			navHeaderButton.removeClass('replace');
		}
	});
	// Menu Button Text Change
	var navHeaderButton = $('.navbar-header button');
	navHeaderButton.on('click', function(e) {
		navHeaderButton.toggleClass('replace');
	});
	
	/*
	STICKY
	================================== */
	var AcSticky = $('#active-sticky');
	var WinD = $(window);
	WinD.on('scroll',function() {
		var scroll = $(window).scrollTop();
		var AESticky = AcSticky;
		if (scroll < 80) {
			AESticky.removeClass("is-sticky");
		}
		else{
			AESticky.addClass("is-sticky");
		}
	});
	/*
	RT ANIMATION
	================================== */
	var rtAnimateNot = $('.rt-animate:not(.rt-animate-show)');
	rtAnimateNot.each(function() {
		var $rtElement = $(this);
		$rtElement.waypoint(function() {
			$rtElement.addClass('rt-animate-show');
		},
		{
			offset: $rtElement.data('rt-offset')
		});
	});
	
	/*
	EXPEND MENU 
	================================== */
	var exapndIcon = $('.expand-icon');
	var expandSidebar = $('.exapnd-sidebar');
	exapndIcon.on("click", function(e) {
		expandSidebar.toggleClass("slide_right");
		exapndIcon.toggleClass("close_icon");
		e.stopPropagation()
	});
	$(document).on('click', function(e) {
		var $selectOtherSide = $('.exapnd-sidebar,.expand-icon');
		if (!$selectOtherSide.is(e.target) && $selectOtherSide.has(e.target).length === 0) {
			expandSidebar.removeClass("slide_right");
			exapndIcon.removeClass("close_icon");
		}
	});
	
	/*
	ONE PAGE MENU
	================================== */
	var mainMenu = $('.mainmenu nav'); 
    var headerTopOffset = $('header').height(); 
	mainMenu.onePageNav({
		currentClass: 'active',
		scrollThreshold: 0.2,
		scrollSpeed: 1000,
		scrollOffset: headerTopOffset - 20,
	});
	
	/*
	SMOOTH SCROLL
	================================ */
	var smScroll = $('.smooth-scroll a');
	if (smScroll.length > 0) {
		smScroll.on('click', function() {
			$.smoothScroll({
			  offset: -60,
			  scrollTarget: this.hash,
			  speed: 1000,
			});
			return false;
		});
	}
	
	/*
	PROGRESS WITH WAYPOINT ACTIVE
	================================== */
	var ProWey = $('.skill-progress');
    if (ProWey.length > 0) {
        ProWey.waypoint(function () {
			// element 
			jQuery('.skill-bar').each(function() {
				jQuery(this).find('.progress-content').animate({
					width:jQuery(this).attr('data-percentage')
				},2000);
				
				jQuery(this).find('.progress-mark').animate(
				{left:jQuery(this).attr('data-percentage')},
			{
				duration: 2150,
				step: function(now, fx) {
					var data = Math.round(now);
					jQuery(this).find('.percent').html(data + '%');
				}
			});  
			
			});
		}, {offset: '90%'});
	}
	
	/*
	COUNTERUP ACTIVE
	================================ */
	var countUp = $('.counter');
	countUp.counterUp({
		delay: 50,
		time: 3000
	});
	
     /*
     ISOTOPE MENU
     ================================ */
     var folioMenuLi = $('.portfolio-menu li');
	 if (folioMenuLi.length) {
		 folioMenuLi.on('click', function() {
			 var folioGrid = $('.portfolio-grid');
			 folioMenuLi.removeClass("active");
			 $(this).addClass("active");
			 var selector = $(this).attr('data-filter');
			 folioGrid.isotope({
				 filter: selector,
				 animationOptions: {
					 duration: 750,
					 easing: 'linear',
					 queue: false
				 }
			 });
		 });
	 }
	 
	/*
	VENOBOX ACTIVE
	================================ */
	
	
    /*
    SLICK CAROUSEL AS NAV
    ===================================*/
    var oneItem = $('#one-item');
	if (oneItem.length) {
		oneItem.slick({
			dots: true,
			arrows: false,
		});
	}
	 
	/*
	CONTACT FORM VALIDATIONS SETTINGS
	========================================*/
	var CTForm = $('#contact_form');
	if ($('#contact_form').length) {
		CTForm.validate({
			onfocusout: false,
			onkeyup: false,
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				}
			},
			errorPlacement: function(error, element) {
				error.insertBefore(element);
			},
			messages: {
				name: "What's your name?",
				email: {
					required: "What's your email?",
					email: "Please, enter a valid email"
				}
			},
						
			highlight: function(element) {
				$(element)
				.text('').addClass('error')
			},                    
						
			success: function(element) {
				element
				.text('').addClass('valid')
			}
		});
	}	

	/*
	CONTACT FORM SCRIPT
	========================================*/
	if ($('#contact_submit').length) {
		var CTSubmit = $('#contact_submit');
		CTForm.submit(function() {
			// submit the form
			if($(this).valid()){
			   CTSubmit.button('loading'); 
				var action = $(this).attr('action');
				$.ajax({
					url: action,
					type: 'POST',
					data: {
						contactname: $('#contact_name').val(),
						contactemail: $('#contact_email').val(),
						contactmessage: $('#contact_message').val()
					},
					success: function() {
					   CTSubmit.button('reset');
					   CTSubmit.button('complete');
					},
					error: function() {
						CTSubmit.button('reset');
						CTSubmit.button('error');
					}
				});
			// return false to prevent normal browser submit and page navigation 
			} else {
				CTSubmit.button('reset')
			}
			return false; 
		});
	}
	
	/*
	SCROLLUP
	=================== */
	$.scrollUp({
		scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
	
	jQuery(window).on('load', function(){
		
        // Preloader
        var preeLoad = $('#loading-wrap');
        preeLoad.fadeOut(1000);

        // FITROWS GRID
        var fitRowGrid = $('.fitRows-grid');
		if (fitRowGrid.length) {
			fitRowGrid.isotope({
				itemSelector: '.grid-item',
				// layout mode options
				layoutMode: 'fitRows'
			});
		}
        // MASONRY GRID
        var masonryGrid = $('.masonry-grid');
		if (masonryGrid.length) {
			masonryGrid.isotope({
				itemSelector: '.grid-item',
				// layout mode options
				layoutMode: 'masonry',
				masonryHorizontal: {
					rowHeight: 100
				}
			});
		}
		
	});
	
})(jQuery);

