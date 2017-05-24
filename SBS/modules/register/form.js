$(document).ready(function() {

	$(window).load(function () {
		if ($('.g-recaptcha').length > 0) {
			var recaptcha = '<div class="text-center">'+$('[name="loginForm"] tr:last-child td:last-child').html()+'</div>';
		}else{
			var recaptcha = "";
		}
		var title = $('.main h2').text();
		var user = $('[name="loginForm"] label[for="login_name"]').text().replace(':', '');
		var pass = $('[name="loginForm"] label[for="users_passwd"]').text().replace(':', '');
		var vpass = $('[name="loginForm"] label[for="users_cpasswd"]').text().replace(':', '');
		var fname = $('[name="loginForm"] label[for="users_fname"]').text().replace(':', '');
		var lname = $('[name="loginForm"] label[for="users_lname"]').text().replace(':', '');
		var email = $('[name="loginForm"] label[for="users_email"]').text().replace(':', '');

		var sbtn = $('input[type="submit"]').val();
		var rval = $('input[name="users_comment"]').val();

                var new_form = '\
                <div class="login-container">\
                        <h3>'+title+'</h3>\
                        <form action="index.php" name="login_form" method="post" class="form-group">\
				<input type="text" id="login_name" name="login_name" class="form-control" placeholder="'+user+'">\
				<input id="users_passwd" type="password" name="users_passwd" class="form-control" placeholder="'+pass+'">\
				<input id="users_cpasswd" type="password" name="users_cpasswd" class="form-control" placeholder="'+vpass+'">\
				<input type="text" id="users_fname" name="users_fname" class="form-control" placeholder="'+fname+'">\
				<input type="text" id="users_lname" name="users_lname" class="form-control" placeholder="'+lname+'">\
				<input type="text" id="users_email" name="users_email" class="form-control" placeholder="'+email+'">\
				<input type="hidden" name="users_comment" value="'+rval+'" class="form-control">\
                                '+recaptcha+'\
                                <input type="submit" name="Submit" value="'+sbtn+'" class="btn btn-primary btn-block btn-sm">\
                        </form>\
                </div>';

		$('.main').empty().html(new_form);
	});

});
