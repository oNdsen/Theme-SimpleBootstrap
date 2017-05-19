$(document).ready(function() {
	$('#description').addClass('form-control');
	$('.underline-link, .news-btn').addClass('btn').addClass('btn-primary').addClass('btn-sm');
	$('.ajax-upload-dragdrop input').removeAttr('style');

	create_button('[href$="&page=permissions"]', 'btn-danger');
	create_button('[href$="&page=settings"]', 'btn-warning');
	create_button('[href$="&page=add"]', 'btn-success');

        /* *** Replace UL / LI with Table *** */
        var ul = $(".main ol");
        $(ul).each(function(){
                var li = $(this).find("li");
                var tul = $(this);
                $(li).each(function(){
                        $(this).replaceWith('<tr><td>'+$(this).html()+'</td></tr>');
                });
                $(tul).replaceWith('<table>'+$(tul).html()+'</table>');
        });

	$('[href^="home.php?m=news&p=admin_news&page=edit&id="]').each(function(){
		$(this).replaceWith('<a href="'+$(this).attr('href')+'"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>');
	});

	$('img[src="modules/news/images/cancel.gif"]').parent('a').each(function(){
		$(this).replaceWith('<a href="'+$(this).attr('href')+'" class="btn btn-sm btn-danger pull-right">'+$(this).find('img').attr('alt')+'</a>');
	});

});


function create_button(elem, clss){
	$(elem).each(function(){
                $(this).replaceWith('<a href="'+$(this).attr('href')+'" class="btn btn-sm '+clss+' pull-right">'+$(this).text()+'</a>');
        });

}
