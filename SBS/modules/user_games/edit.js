$(document).ready(function() {
	$('p > a').addClass('btn').addClass('btn-primary').addClass('btn-sm');

	$('#mods').bind("DOMSubtreeModified",function(){
		$(this).find('table').addClass('table').addClass('table-sm').addClass('table-striped');
	});
});
