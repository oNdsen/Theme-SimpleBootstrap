$(document).ready(function() {
	$('#servermonitor [href$="&delete"]').addClass('btn').addClass('btn-xs').addClass('btn-danger');
	$('#servermonitor [href$="&edit"]').addClass('btn').addClass('btn-xs').addClass('btn-primary');
        $('#servermonitor [href^="?m=server&p=reboot"]').addClass('btn').addClass('btn-xs').addClass('btn-primary');
        $('#servermonitor [href^="?m=server&p=restart"]').addClass('btn').addClass('btn-xs').addClass('btn-primary');
        $('#servermonitor [href^="?m=server&p=log"]').addClass('btn').addClass('btn-xs').addClass('btn-primary');

	$('#servermonitor .success').addClass('label').addClass('label-success').removeClass('success');
	$('#servermonitor .failure').addClass('label').addClass('label-danger').removeClass('failure');

});
