$(document).ready(function(){
	/* *** Administration Button - Removing all TD/TR *** */
	$('.main').prepend('<table class="administration-table table table-sm"><tbody><tr><td><div class="flex-container"></div></td></tr></table>');
	$('.main').prepend('<h2>'+$('.main h2:nth-of-type(1)').html()+'</h2>');
	$('.main .administration-table:nth-of-type(2) td:not(.administration-buttons-hmargin)').each(function() {
		$('.flex-container').append($(this).html());
	});
	$('.main h2:nth-of-type(2)').remove();
	$('.main .administration-table:nth-of-type(2)').remove();
});
