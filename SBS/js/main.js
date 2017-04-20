$(document).ready(function() {

	/* *** Login Form Mod *** */
	/*var homepages = ['/', 'index.php'];
	if (homepages.indexOf(window.location.pathname) >= 0) {
		$('.main').html($('.bloc').html());
		var lang = $('form[name="login_form"] tr:eq(0)');
		$('form[name="login_form"] tr:eq(2)').after(lang.contents());
		lang.remove();
	}*/

	/* *** Several Class and Style Stuff *** */
	var inputs = $('input, textarea, select').not(':input[type=button], :input[type=submit], :input[type=reset], :input[type=radio], :input[type=checkbox], :input[type=image]');
	$(inputs).addClass('form-control').removeAttr('style');
	$('button, :input[type=button], :input[type=submit], :input[type=reset]').addClass('btn').addClass('btn-sm').addClass('btn-secondary');
	$('form').addClass('form-group');
	$('table').addClass('table').addClass('table-sm').removeAttr('style');
	$('tr').css("background-color", "");
	$('input').css("width", "");
	$('tfoot').removeAttr('style');
	$('tfoot .bloc').removeClass('bloc');

	/* *** MENU *** */
	$('.menu ul[id^=submenu] span').each(function() {
		var img_url = $(this).attr('data-icon_path');
		$(this).before("<img src='"+img_url+"'/>");
	});

	$('.menu [class$="menu_link_selected"]').addClass('ready').next('ul').addClass('opened').parent('li').addClass('active');
	$('.menu a').next('ul').parent('li').addClass('tree');

	$('.menu a').click(function () {
		$(this).parent('li').addClass('active');
		if($(this).parent('li').has('ul').length){
			if($(this).next('ul').hasClass('opened')){
				$(this).next('ul').removeClass('opened');
			}else{
				$(this).next('ul').addClass('opened');
				if($(this).hasClass('ready')){
					return true;
				}else{
					$(this).addClass('ready');
					return false;
				}
			}
		}
	});

	/* *** Removing CSS File from FTP Page *** */
	if(window.location.href.indexOf("home.php?m=TS3Admin") != -1 ){
		$('link[href="modules/TS3Admin/webinterface.css"]').remove();
	}



});
