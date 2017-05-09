$(document).ready(function(){
        $('.monitorbutton.size').click(function(){
                $(this).addClass('loading');
                $(this).bind("DOMSubtreeModified",function(){
                        $(this).removeClass('loading');
                });
        });

	$('table#servermonitor').wrap('<div class="table-responsive"/>');
	$('table#servermonitor td > a').addClass('label').addClass('label-primary').addClass('label-size');
});
