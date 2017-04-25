$(document).ready(function() {
	$('[href="?m=user_games&p=add"]').addClass('btn').addClass('btn-success').addClass('btn-sm');
        $('[href^="?m=user_games&p=del&home_id"]').addClass('btn').addClass('btn-danger').addClass('btn-sm');
	$('[href^="?m=user_games&p=edit&home_id"]').addClass('btn').addClass('btn-warning').addClass('btn-sm');
	$('[href^="?m=user_games&p=clone&home_id"]').addClass('btn').addClass('btn-info').addClass('btn-sm');

	$('[href^="?m=user_games&p="]').each(function() {
		var newContent = $(this).text().replace('[', '').replace(']', '');
        	$(this).text(newContent);
	});

});
