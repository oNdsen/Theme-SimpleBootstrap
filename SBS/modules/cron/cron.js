$(document).ready(function() {
	$('td > [href="?m=administration&p=main"]').addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('input[name="removeJob"]').removeClass('btn-secondary').addClass('btn-danger');
	$('input[name="editJob"]').removeClass('btn-secondary').addClass('btn-warning');
	$('input[name="addJob"]').removeClass('btn-secondary').addClass('btn-success');
});

