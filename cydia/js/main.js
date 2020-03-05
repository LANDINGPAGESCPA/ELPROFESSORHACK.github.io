$(document).ready(function() {
	
	
	(function( $ ){
	  $.fn.animateProgress = function(progress, callback) {
		return this.each(function() {
		  $(this).animate({
			width: progress+'%'
		  }, {
			duration: 1000,
	  
			easing: 'swing',
	  
			step: function( progress ){
			  var labelEl = $('.ui-label', this);
	  
			 if (progress >= 7 && labelEl.is(':hidden')) {
				labelEl.html('').fadeIn();
			  };
	  
			  if (Math.ceil(progress) == 100) {
				labelEl.html('Done');
				setTimeout(function() {
				  labelEl.fadeOut();
				}, 1000);
			  }else if (progress >= 10) {
				labelEl.html('Processing <b>' + Math.ceil(progress) + '%</b>');
			  } 
			},
			complete: function(scope, i, elem) {
			  if (callback) {
				callback.call(this, i, elem );
			  };
			}
		  });
		});
	  };
	})( jQuery );
  
	$(function() {
		$('#progress_bar').hide();
		$('#start').click(function() {
		  $('#main_content').hide();
		  $('#progress_bar').fadeIn();
		  $('#progress_bar .ui-progress').css('width', '3%').
			animateProgress(14, function() {
			$(this).animateProgress(38, function() {
				$(this).animateProgress(69, function() {
					$(this).animateProgress(93, function() {
						setTimeout(function() {
						$('#progress_bar .ui-progress').animateProgress(100, function() {
							setTimeout(function() { $('.loading-bar-wrapper').fadeOut(); }, 500 );	
							setTimeout(function() { $('#processing-message-2').fadeOut(); }, 900 );	
							setTimeout(function() { $('.compatibility-success-wrapper ').fadeIn(); }, 1250 );	
						});
						}, 2000);
					});
					setTimeout(function() { $('#main_content').slideDown(); }, 1000 );
				});
			});
		  });
		});
	  
	});
	
	$('.verify-compatibility').click(function () { 
		$('.generator-first-step').fadeOut(500, function() {
			$('#processing-1').fadeIn(500, function() {
				setTimeout(function() { $('#processing-1').fadeOut(500, function() {
					setTimeout(function() { $('#processing-2').fadeIn(); }, 300 );
					setTimeout(function() { $('#start').trigger('click') }, 700 );
				}); }, 1000 );
			});
		});
	});
	
	$('.jailbreak').click(function () { 
		$('#processing-2').fadeOut(500, function() {
			$('#generator-console').fadeIn(500, function() {
				setTimeout(function() { $('.console-message-1').fadeIn(); }, 300 );
				setTimeout(function() { $('.console-message-2').fadeIn(); }, 1000 );
				setTimeout(function() { $('.console-message-3').fadeIn(); }, 1700 );
				setTimeout(function() { $('.console-message-4').fadeIn(); }, 2400 );
				setTimeout(function() { $('.console-message-5').fadeIn(); }, 4000 );
				setTimeout(function() { $('.console-message-6').fadeIn(); }, 4900 );
				setTimeout(function() { $('.console-message-7').fadeIn(); }, 6200 );
				setTimeout(function() { $('.console-message-8').fadeIn(); }, 7000 );
				setTimeout(function() { $('.console-message-9').fadeIn(); }, 8500 );
				setTimeout(function() { $('.console-message-10').fadeIn(); }, 9200 );
				setTimeout(function() { $('#generator-console').fadeOut(); }, 10000 );
				setTimeout(function() { $('#human-verification').fadeIn(); }, 10400 );
			});
		});
	});
	
	
	$('.scroll-me').bind("click", function(e) {
		var target = $(this).attr("href"); // Get the target element
		var scrollToPosition = $(target).offset().top; // Position to scroll to
		$('html /* For FF & IE */,body /* For Chrome */').animate({
			'scrollTop': scrollToPosition
		}, 500, function(target) {
			window.location.hash = target;
		});
		e.preventDefault();
	});
	
	$('.popup-tos').magnificPopup({
    type: 'inline',
    preloader: false
	});
	
	$('.popup-contact').magnificPopup({
		type: 'inline',
		preloader: false
	});
	
	$('.popup-pp').magnificPopup({
		type: 'inline',
		preloader: false
	});
	
});