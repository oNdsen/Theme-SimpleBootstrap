$(document).ready(function() {
	$('.online_servers td').each(function(){
		$(this).addClass('btn-primary').html($(this).children());
	});
});
