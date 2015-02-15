$(function() {
	
	// display saved feelings
	$.get('../templates/feelings.html', function(data) {
		$('.second').html(data).fadeIn('fast');
	});		

	// save the feelings
	function sendFeeling(feeling, feeling, data) {
		$.post('../actions/feelings.php', function(feeling, feeling, data) {
			//console.log(data);
		});	
	}
	
	// rollover feelings
	$('.feeling').on('mouseover', function() {
		var feeling = $(this).data('feeling');
		$('.subheading').fadeIn(1000).children('span').text(feeling);
	});
	// set the feeling to blank in the subheading
	$('.first').on('mouseleave', function() {
		$('.subheading span').text('      ');
	});

	// get feeling box width
	var boxW = $('.feelings').width();
		numFeelings = $('.feeling').length;
		newBoxW = boxW - (numFeelings * 12); // new width minus margins
		newDim = newBoxW / numFeelings  + 'px';
	// set the new dimensions
	$('.feeling').css({'width': newDim, 'height': newDim});
	
	// add your feeling
	$('.feeling').on('click', function() {
		// set up the variables
		var feeling = $(this).data('feeling');
			data = {'feeling': feeling};
		// bake a cookie
		$.cookie('feeling', feeling, { expires: 1, path: '/' });
		// count clicks
		//for(n = 1; n <= 3; n++) {
			//if(n<3) {
				$('.second').prepend('<div class="feeling ' + feeling + '"></div>');
				// send feeling to feelings page
				$.post('../actions/feelings.php', data, function(returnData){
					sendFeeling();
				});
			//}			
		//}
	});
	
	// show the info
	$('.info').on('click', function() {
		$.get('../templates/info.html', function(data) {
			$('body').append(data);
		});
	});

	// hide the info
	$(document).on('click', '.infobox .close', function() {
		$('.infobox').remove();
		$('.shade').remove();
	});
	
	/*
	// show hover 
	$(document).on('mouseover', '.second .feeling', function() {
		var date = $(this).data('date');
		$(this).wrap('<div class="lilwrap">').after('<div class="hover"><span>Felt on <em>' + date + '</em></span></div>').css('z-index', 2);
	});

	$(document).on('mouseout', '.second .feeling', function() {
		$('.hover').remove('.hover');
		$(this).unwrap('<div class="lilwrap">').css('z-index', 0);
	});
	*/

	// cookie business
	var chip = $.cookie('feeling');
	if(chip) {
		console.log(chip);
	}

});