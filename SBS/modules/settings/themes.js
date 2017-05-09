$(document).ready(function() {

	$('form[action="?m=settings&p=themes"] tr:nth-child(4),form[action="?m=settings&p=themes"] tr:nth-child(5)').addClass('hide');

        $.getJSON("themes/SBS/conf/theme.config", function(json) {
                if(json['style']=='light'){
			$('form[action="?m=settings&p=themes"] tr:last').after('<tr><td align="right"><label for="style_tab">Theme Style:</label></td><td align="left"><select id="style_tab" name="style_tab" class="form-control"><option value="dark">dark</option><option value="light" selected>light</option></select></td><td><div class="image-tip" id="6"><img src="images/icon_help_small.gif"><span class="tip" id="6">Changes the Theme Style</span></div></td></tr>');
                }else{
			$('form[action="?m=settings&p=themes"] tr:last').after('<tr><td align="right"><label for="style_tab">Theme Style:</label></td><td align="left"><select id="style_tab" name="style_tab" class="form-control"><option value="dark" selected>dark</option><option value="light">light</option></select></td><td><div class="image-tip" id="6"><img src="images/icon_help_small.gif"><span class="tip" id="6">Changes the Theme Style</span></div></td></tr>');
                }
        });


	$('input[name="update_settings"]').click(function(){
		var theme_style = $('#style_tab').val();
		$.ajax({
			url: 'themes/SBS/conf/write_conf.php',
			type: 'GET',
			data: {style:theme_style},
			success: function(data) {
				//console.log('success');
				//console.log(data);
			},
			error: function(log) {
				console.log(log.message);
			}
		});
		//return false;
	});
});
