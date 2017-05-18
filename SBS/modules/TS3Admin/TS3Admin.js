$(document).ready(function() {
	$('img[src$="edit.png"]').replaceWith('<i class="fa fa-pencil-square-o" aria-hidden="true"></i>');
	$('img[src$="refresh.png"]').replaceWith('<i class="fa fa-refresh" aria-hidden="true"></i>');

        $('[name="stopvServer"]').removeClass('btn-primary').addClass('btn-danger');

});

