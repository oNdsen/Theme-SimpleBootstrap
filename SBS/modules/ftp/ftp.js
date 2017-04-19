$(document).ready(function(){
        if(window.location.href.indexOf("home.php?m=ftp") != -1 ){
                $('iframe').attr('id', 'ftp_iframe');
                $('iframe').load(function() {
                        $(this).contents().find("body").addClass('ftp_iframe');
                        $(this).contents().find("div").removeAttr("style");
                        $(this).contents().find("table").removeAttr("style").removeAttr("colspan").addClass('table').addClass('table-sm');
                        //$(this).contents().find(".page table").removeAttr("colspan");
                        $(this).contents().find(".page > table > tbody > tr:nth-child(3)").remove();

                        $(this).contents().find("link").remove();
                        var css = '<link rel="stylesheet" type="text/css" href="/themes/SBS/css/main.css">';
			var bs = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">';
			$(this).contents().find("head").append(bs);
			$(this).contents().find("head").append(css);
                });

        }
});
