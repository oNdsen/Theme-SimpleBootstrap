$(document).ready(function() {

	/* *** Cutting Title *** */
	$('.logo h2').text($('.logo h2').text().substring(0, $('.logo h2').text().lastIndexOf(" [") + 1));

	/* *** Remove CSS and JS Files *** */
	$('link[href="css/global.css"]').remove();
	//$('link[href="css/global.css"], script[src="js/global.js"]').remove();
	$('link[href="js/bootstrap/css/bootstrap-combined.min.css"]').remove();

	/* *** Removing Chars from Links *** */
        $('a, a span').each(function(){
                $(this).html($(this).html().replace('[','').replace(']',''));
        });

	/* *** Several Class and Style Stuff *** */
	$(window).load(function () {
		$('tr, td, div').css("background-color", "");
		$('div').css("border", "").css("height", "");
		$('input').css("width", "");
		if($.trim($("div").text()) == "") {
			$(this).remove();
		}
	});

	var inputs = $('input, textarea, select').not('input[type=button], input[type="submit"], input[type="SUBMIT"], input[type=reset], input[type=radio], input[type=checkbox], input[type=image]');
	$(inputs).addClass('form-control').removeAttr('style');
	var buttons = $('button, input[type="button"], input[type="submit"], input[type="SUBMIT"], input[type="reset"], .redirectLink, [href^="?m=gamemanager&p=update&update=refresh"], .main [href="?m=modulemanager&p=update"], .main [href="?m=simple-billing&p=shop"], .main [href^="home.php?m=TS3Admin&changevServer"], .main [href^="?m=gamemanager&p=game_monitor&home_id="]');
	$(buttons).addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('.main [href^="?m=modulemanager&p=del&id="]').addClass('btn').addClass('btn-xs').addClass('btn-danger');
	$('.main [href^="?m=modulemanager&p=add&module="]').addClass('btn').addClass('btn-xs').addClass('btn-success');
	$('.monitorbutton, .administration-buttons').addClass('btn-primary');
	$('.administration-buttons').removeClass('administration-buttons').addClass('admin-buttons');
	$('form').addClass('form-group');
	$('table').addClass('table').addClass('table-sm').addClass('table-striped').removeAttr('style');
	$('tfoot, input').removeAttr('style');
	$('tfoot .bloc').removeClass('bloc');
	$('.main input[name="remove"]').removeClass('btn-primary').addClass('btn-danger');

	$('.online').addClass('label').addClass('label-success').addClass('label-size');
	$('.offline').addClass('label').addClass('label-danger').addClass('label-size');
        $('.success').addClass('alert').addClass('alert-success');
	$('td b.success').removeClass('alert').removeClass('alert-success');
        $('.failure:not(b)').addClass('alert').addClass('alert-danger');

	$('.g-recaptcha').attr('data-theme','dark');

	$('img[src="modules/addonsmanager/loading.gif"]').replaceWith('<i class="fa fa-spinner fa-pulse fa-3x fa-fw loadinggif"></i>');

	$('.main img').error(function () {
		$(this).unbind("error").attr("src", "themes/SBS/images/image_not_found.png").removeAttr('height');
	});


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


        /* *** Pagination *** */
        $('#pagination').each(function(){
                $(this).replaceWith('<ul class="pagination">'+$(this).html()+'</ul>');
                var pm = $('.pagination');

                var ps = $(pm).find('.watchLogger_paginationStart');
                var pp = $(pm).find('.watchLogger_paginationPages');
                var pe = $(pm).find('.watchLogger_paginationEnd');

                if($(ps).length){
                        if($(ps).find('span').length){ console.log('divider!'); }
                        $(ps).find('a').each(function(){
                                var tl = $(this).attr('href');
                                var tc = $(this).text();
                                $(pm).append('<li><span><a href="'+tl+'">'+tc+'</a></li>');
                        });
                        if($(ps).find('span').length){
                                $(pm).append('<li><span>...</span></li>');
                        }
                        $(ps).remove();
                }
                $(pp).find('a').each(function(){
                        var tl = $(this).attr('href');
                        var tc = $(this).text().replace('[','').replace(']','');
                        if($(this).hasClass('watchLogger_currentPageLink')){
                                $(pm).append('<li class="active"><span><a href="'+tl+'">'+tc+'</a></li>');
                        }else{
                                $(pm).append('<li><span><a href="'+tl+'">'+tc+'</a></li>');
                        }
                });
                $(pp).remove();

                if($(pe).length){
                        if($(pe).find('span').length){
                                $(pm).append('<li><span>...</span></li>');
                        }
                        $(pe).find('a').each(function(){
                                var tl = $(this).attr('href');
                                var tc = $(this).text();
                                $(pm).append('<li><span><a href="'+tl+'">'+tc+'</a></li>');
                        });
                        $(pe).remove();
                }

        });


	/* *** Removing CSS File from FTP Page *** */
	if(window.location.href.indexOf("home.php?m=TS3Admin") != -1 ){
		$('link[href="modules/TS3Admin/webinterface.css"]').remove();
	}

	$('.image-tip').each(function(){
		var tip_text = $(this).find('.tip').text();
		$(this).replaceWith('<i class="fa fa-question-circle-o" aria-hidden="true" data-toggle="tooltip" data-placement="left" title="'+tip_text+'"></i>');
	});
	$('[data-toggle="tooltip"]').each(function(){
		$(this).tooltip();
	});



        /* *** Login Page Mod *** */
	if(/^(\/|\/index\.php)$/i.test(location.pathname)){
                //$('.main').html($('.bloc').html());

	if($('form[name="login_form"]').length > 0) {
		if ($('.g-recaptcha').length > 0) {
			var recaptcha = '<div class="text-center">'+$('[name="login_form"] tr:nth-child(4) td:last-child').html()+'</div>';
		}else{
			var recaptcha = "";
		}
                var title = $('.main h4').text();
                var user = $('[name="login_form"] tr:nth-child(2) td:first-child').text().replace(':', '');
                var pass = $('[name="login_form"] tr:nth-child(3) td:first-child').text().replace(':', '');
                var forgot = $('[href="?m=lostpwd"]').text();
                var lbtn = $('[name="login"]').val();
                var optns = $('[name="lang"]').html();

                var new_form = '\
		<div class="login-container">\
        		<h3>'+title+'</h3>\
        		<form action="index.php" name="login_form" method="post" class="form-group">\
        		        <input type="text" name="ulogin" id="ulogin" class="form-control" placeholder="'+user+'">\
				<input type="password" name="upassword" class="form-control" placeholder="'+pass+'">\
                		<select name="lang" onchange="this.form.submit();" class="form-control">'+optns+'</select>\
				'+recaptcha+'\
                		<input type="submit" name="login" value="'+lbtn+'" class="btn btn-primary btn-block btn-sm">\
        		</form>\
        		<a href="?m=lostpwd">'+forgot+'</a>\
		</div>';

                $('.main').empty().html(new_form);
	}

		$('.menu ul:first-of-type').addClass('nav').addClass('navbar-nav');
		$('.menu [class*="selected"]').parent('li').addClass('active');
		$('.menu a').removeClass();

		var navigation = $('.navigation .menu').html();

		var new_navigation = '\
		<div class="col-xs-12 main col-md-12">\
		<nav class="navbar navbar-default">\
			<div class="container-fluid">\
				<div class="navbar-header">\
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">\
					<span class="sr-only">Toggle navigation</span>\
					<span class="icon-bar"></span>\
					<span class="icon-bar"></span>\
					<span class="icon-bar"></span>\
					</button>\
					<a class="navbar-brand">Navigation</a>\
				</div>\
				<div id="navbar" class="navbar-collapse collapse">\
					'+navigation+'\
				</div>\
			</div>\
		</nav>\
		</div>';

		$('.navigation').remove();
		$('.main').removeClass('col-md-10').addClass('col-md-12');
		$('body > .container-fluid > .row:first-of-type').empty().html(new_navigation);

        }


});
