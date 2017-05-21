$(document).ready(function(){
        $('.monitorbutton.size').click(function(){
                $(this).addClass('loading');
                $(this).bind("DOMSubtreeModified",function(){
                        $(this).removeClass('loading');
                });
        });

	$('tr.maintr td:last-child').css('width','').css('padding','');

	$('table#servermonitor').wrap('<div class="table-responsive"/>');
	$('table#servermonitor td > a').addClass('label').addClass('label-primary').addClass('label-size');

	$('img[src="images/magnifglass.png"]').replaceWith('<i class="fa fa-search" aria-hidden="true"></i>');

	$('.main').addClass('main-content');

        $('#refreshed-0').bind("DOMSubtreeModified",function(){
                $(this).find('.upload-image').addClass('btn').addClass('btn-sm').addClass('btn-primary');
		$(this).find('.player_monitor').css('border', '').addClass('table').addClass('table-sm').addClass('table-striped');

	});


	/*$('img[src="images/stop.png"]').replaceWith('<i class="fa fa-stop-circle-o" aria-hidden="true" id="action-stop"></i>');
	$('img[src="images/start.png"]').replaceWith('<i class="fa fa-play-circle" aria-hidden="true" id="action-start"></i>');
	$('img[src="images/restart.png"]').replaceWith('<i class="fa fa-refresh" aria-hidden="true" id="action-restart"></i>');*/

/*	if ($(window).load()) {
		var is_set = false;
		add_responsive();
	}
	$(window).on('resize', function() {
		add_responsive();
	});

	function add_responsive(){
                if ($(window).innerWidth() < 767) {
                        if(!is_set){
                                if( $('#servermonitor > tbody > tr.resp').length){}else{

var sit = $('#servermonitor > thead > tr > th:nth-child(4)');
var sot = $('#servermonitor > thead > tr > th:nth-child(5)');
var si = $('#servermonitor > tbody > tr.maintr.expandme > td:nth-child(4)');
var so = $('#servermonitor > tbody > tr.maintr.expandme > td:nth-child(5)');

var srv_ip_title = $(sit).html();
var srv_own_title = $(sot).html();
var srv_ip = $(si).html();
var srv_own = $(so).html();

$(sot, sit, si, so).addClass('hide');
$('#servermonitor > tbody > tr.expand-child > td').attr('colspan',2);

                                        $('#servermonitor > tbody > tr.maintr.expandme').after('<tr class="resp"><td colspan="2">'+srv_ip_title+': '+srv_ip+'</td><td colspan="2">'+srv_own_title+': '+srv_own+'</td></tr>');
                                        var is_set = true;
                                }
                        }
                }else{
                        if( $('#servermonitor tr.resp').length ){
                                $('#servermonitor tr.resp').remove();
				$('#servermonitor > tbody > tr.expand-child > td').attr('colspan',4);
				$(sit, sot, si, so).removeClass('hide');
                                var is_set = false;
                        }
                }
	}
*/
});
