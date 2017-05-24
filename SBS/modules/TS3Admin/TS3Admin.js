$(document).ready(function() {
	$('img[src$="edit.png"]').replaceWith('<i class="fa fa-pencil-square-o" aria-hidden="true"></i>');
	$('img[src$="refresh.png"]').replaceWith('<i class="fa fa-refresh" aria-hidden="true"></i>');

        $('[name="stopvServer"]').removeClass('btn-primary').addClass('btn-danger');

	$('.edit, .main [href^="home.php?m=TS3Admin"], .main [href*="home.php?m=TS3Admin&token"], .main [href="home.php?m=TS3Admin&liveview"]').addClass('btn').addClass('btn-xs').addClass('btn-primary');

});

