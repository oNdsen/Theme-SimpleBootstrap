$(document).ready(function(){

	$("#refreshed-0 > #column4").ready(function() {
		$(this).addClass("jup");
		//alert("finished!");
	});

	//alert("loaded!");

        $(".progress-bar").each(function() {
                var value = $(this).attr("data");
                $(this).radialIndicator({
                        barColor: {
                                0: '#43DB00',
                                74: '#E9E900',
                                100: '#C50606'
                        },
                        percentage: true,
                        roundCorner: true,
                        initValue: value
                });
        });
});

