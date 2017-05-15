$(document).ready(function() {

	/* *** Parse Config File *** */
	/*$.getJSON("themes/SBS/conf/theme.config", function(json) {
		d = new Date();
		if(json['style']=='light'){
			$('head').append('<link rel="stylesheet" href="themes/SBS/css/main_light.css?' + d.getTime() + '" type="text/css" />');
		}else{
			$('head').append('<link rel="stylesheet" href="themes/SBS/css/main_dark.css?' + d.getTime() + '" type="text/css" />');
		}
	});*/

	/* *** Login Page remove Table *** */
	var homepages = ['/', '/index.php'];
	if (homepages.indexOf(window.location.pathname) >= 0) {
		$('.main').html($('.bloc').html());
	}

	/* *** Cutting Title *** */
	/*var head_title = $('.logo h2').text();
	var head_title_short = head_title.substring(0, head_title.lastIndexOf(" [") + 1);
	$('.logo h2').text(head_title_short);*/
	$('.logo h2').text($('.logo h2').text().substring(0, $('.logo h2').text().lastIndexOf(" [") + 1));

	/* *** Remove CSS and JS Files *** */
	$('link[href="css/global.css"]').remove();
	$('script[src="js/global.js"]').remove();
	$('link[href="js/bootstrap/css/bootstrap-combined.min.css"]').remove();

	/* *** Removing Chars from Links *** */
        $('a, a span').each(function(){
                $(this).html($(this).html().replace('[','').replace(']',''));
        });

	/* *** Several Class and Style Stuff *** */
	var inputs = $('input, textarea, select').not('input[type=button], input[type="submit"], input[type="SUBMIT"], input[type=reset], input[type=radio], input[type=checkbox], input[type=image]');
	$(inputs).addClass('form-control').removeAttr('style');
	var buttons = $('button, input[type="button"], input[type="submit"], input[type="SUBMIT"], input[type="reset"], .redirectLink, [href^="?m=gamemanager&p=update&update=refresh"], .main [href="?m=modulemanager&p=update"], .main [href="?m=simple-billing&p=shop"], .main [href^="home.php?m=TS3Admin&changevServer"]');
	$(buttons).addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('.main [href^="?m=modulemanager&p=del&id="]').addClass('btn').addClass('btn-xs').addClass('btn-danger');
	$('.main [href^="?m=modulemanager&p=add&module="]').addClass('btn').addClass('btn-xs').addClass('btn-success');
	$('.monitorbutton, .administration-buttons').addClass('btn-primary');
	$('.administration-buttons').removeClass('administration-buttons').addClass('admin-buttons');
	$('form').addClass('form-group');
	$('table').addClass('table').addClass('table-sm').addClass('table-striped').removeAttr('style');
	$('tr').css("background-color", "");
	$('input').css("width", "");
	$('tfoot, input').removeAttr('style');
	$('tfoot .bloc').removeClass('bloc');
	$('.online').addClass('label').addClass('label-success').addClass('label-size');
	$('.offline').addClass('label').addClass('label-danger').addClass('label-size');

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

	$('.image-tip').each(function(){
		var tip_text = $(this).find('.tip').html();
		$(this).replaceWith('<i class="fa fa-question-circle-o" aria-hidden="true" data-toggle="tooltip" data-placement="left" title="'+tip_text+'"></i>');
	});
	$('[data-toggle="tooltip"]').each(function(){
		$(this).tooltip();
	});

	$("span.versionInfo").click(function(e){
		handleVersionClick();
	});

	$(".getAutoUpdateLink").click(function(e){
		showSteamUpdateLink($(this));
	});

});



function showSteamUpdateLink(elem){
	$("div.mangificWrapper .magnificTitle").text($(elem).attr('autoupdatetext'));
	$("div.mangificWrapper .magnificContentsDiv").html('<p>' + $(elem).attr('autoupdatehtml') + '</p><p><input class="updateLink" style="width: 75%;" type="text" value="' + $(elem).attr('autoupdatelink') + '"><button class="copyButton">' + $(elem).attr('copyme') + '</button>&nbsp; <span class="copyStatus"></span></p>');

	showPopup(function(){
		$("input.updateLink").click(function(e){
			$(this).select();
		});

		$(".copyButton").click(function(e){
			copyInput($("input.updateLink"), $("span.copyStatus"), elem);
		});

		copyInput($("input.updateLink"), $("span.copyStatus"), elem);
	});
}

function copyInput(input, resultArea, elemWithAttr){
	$(input).select();
	var successful = document.execCommand('copy');
	var msg = successful ? 'successful' : 'unsuccessful';
	logToConsole('Copying text command was ' + msg);
	if(successful){
		$(resultArea).text($(elemWithAttr).attr('copysuccess')).fadeIn('fast').delay(500).fadeOut('slow').delay(500).fadeIn('slow').delay(500).fadeOut('slow').delay(500).fadeIn('fast').delay(2000).fadeIn('fast');
	}else{
		$(resultArea).text($(elemWithAttr).attr('copyfail')).fadeIn('fast').delay(500).fadeOut('slow').delay(500).fadeIn('slow').delay(500).fadeOut('slow').delay(500).fadeIn('fast').delay(2000).fadeIn('fast');
	}
}

function showPopup(onOpen, onClose){
	$.magnificPopup.open({
		items: {
			src: $("div.mangificWrapper div.white-popup"),
			type: 'inline'
		},
		callbacks: {
			close: function() {
				cleanupPopup();
				if(!isUndefinedOrEmptyValue(onClose) && jQuery.isFunction(onClose)){
					onClose();
				}
			},
			open: function() {
				if(!isUndefinedOrEmptyValue(onOpen) && jQuery.isFunction(onOpen)){
					onOpen();
				}
			}
		}
	});
}

function cleanupPopup(){
	$("div.mangificWrapper .magnificTitle").text('');
	$("div.mangificWrapper .magnificContentsDiv").html('');
}

function handleVersionClick(){
	if($("span.versionNumber").hasClass("hide")){
		$("span.versionNumber").removeClass("hide");
		$("span.version").removeClass("hide");

		// Copy the value of the version if their browser supports it
		$(document.body).append("<input class='tempCopyValue hide' type='text' value='" + $("span.versionNumber").text() + "' />");
		try {
			$("input.tempCopyValue").removeClass("hide");
			$("input.tempCopyValue").select();
			var successful = document.execCommand('copy');
			$("input.tempCopyValue").remove();
			var msg = successful ? 'successful' : 'unsuccessful';
			logToConsole('Copying text command was ' + msg);
			if(successful){
				$("span.copyVersionResult").text("Copied!").css("color", "#43ff0f").removeClass("hide");
				$("span.copyVersionResult").css("left", $("span.versionNumber").offset().left + $("span.versionNumber").width() + 5 + "px");
				$("span.copyVersionResult").fadeIn('fast', function(e){  hideVLength(); }).delay(500).fadeOut('slow', function(e){  showVLength(); }).delay(500).fadeIn('slow', function(e){  hideVLength(); }).delay(500).fadeOut('slow', function(e){  showVLength(); }).delay(500).fadeIn('fast', function(e){  hideVLength(); }).delay(2000).fadeIn('fast',function() {
					resetVersionView(true);
				});
			}
		}catch(err){
			resetVersionView(true);
		}
	}else{
		$("span.copyVersionResult").stop();
		resetVersionView();
	}
}

function logToConsole(msg){
	window.console && console.log(msg);
}

function isUndefinedOrEmptyValue(input, canBeFalse){
	if(typeof input === typeof undefined || input === null || input === ''){
		return true;
	}

	if(input === false && !isUndefinedOrEmptyValue(canBeFalse) && canBeFalse === true){
		return false;
	}else if(input === false){
		return true;
	}

	return false;
}

function resetVersionView(hideVersion){
	$("input.tempCopyValue").remove();
	$("span.copyVersionResult").text("");
	if(isUndefinedOrEmptyValue(hideVersion)){
//		$("span.versionNumber").removeClass("hide").addClass("hide");
//		$("span.version").removeClass("hide").addClass("hide");
	}
//	$("span.copyVersionResult").removeClass("hide").addClass("hide");
}

function hideVLength(){
	$("span.versionNumberCopyLengthener").removeClass("hide").addClass("hide");
}

function showVLength(){
	$("span.versionNumberCopyLengthener").removeClass("hide");
}

