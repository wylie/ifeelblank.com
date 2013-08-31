$(function() {
	
	// display saved feelings
	$.get('feelings.html', function(data) {
		$('.second').html(data).fadeIn('fast');
	});		

	// save the feelings
	function sendFeeling(feeling, feeling, data) {
		$.post('feelings.php', function(feeling, feeling, data) {
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
	
	
	$('.feeling').on('click', function() {
		// set up the variables
		var feeling = $(this).data('feeling');
			data = {'feeling': feeling};
		$('.second').prepend('<div class="feeling ' + feeling + '"></div>');
		// send feeling to feelings page
		$.post('feelings.php', data, function(returnData){
			sendFeeling();
		});
	});
	
	// show the info
	$('.info').on('click', function() {
		$.get('info.html', function(data) {
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

});