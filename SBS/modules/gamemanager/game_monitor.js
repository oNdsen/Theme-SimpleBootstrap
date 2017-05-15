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

});
