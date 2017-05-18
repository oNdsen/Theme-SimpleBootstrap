$(document).ready(function() {
	$('tr > td:nth-child(3), .main > style').remove();
	$('tr:last-of-type > td:first-of-type').remove();
	$('tr:last-of-type > td[align="right"]').removeAttr('align').attr('align','center').attr('colspan',2);
});
