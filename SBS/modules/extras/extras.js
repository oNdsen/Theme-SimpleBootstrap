$(document).ready(function() {
        $('.dragbox-content').html(function(index, text) {
                return text.replace(/\ - /g, '');
        });

        $('[href^="#uninstall_"]').addClass('btn').addClass('btn-danger').addClass('btn-xs').removeAttr('style');
        $('[href^="#remove_"]').addClass('btn').addClass('btn-danger').addClass('btn-xs').removeAttr('style');
	$('[href^="#install_"]').addClass('btn').addClass('btn-success').addClass('btn-xs').removeAttr('style');
        $('[href^="?m=extras&searchForUpdates="]').addClass('btn').addClass('btn-primary').addClass('btn-xs').removeAttr('style');

	$('.dragbox-content').prepend('<br>');
	$('.dragbox-content br').each(function(){
		var $set = $();
		var nxt = this.nextSibling;
		while(nxt) {
			if(!$(nxt).is('br')) {
				$set.push(nxt);
				nxt = nxt.nextSibling;
			} else break;
		}
		$set.wrapAll('<div class="content" />');
	});
	$('.dragbox-content br').remove();

        $('b[style="color:green;"').addClass('label').addClass('label-success').css("color", "");
        $('b[style="color:red;"').addClass('label').addClass('label-danger').css("color", "");

});

