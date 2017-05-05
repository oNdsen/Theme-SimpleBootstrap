$(document).ready(function(){
        $('.monitorbutton.size').click(function(){
                $(this).addClass('loading');
                $(this).bind("DOMSubtreeModified",function(){
                        $(this).removeClass('loading');
                });
        });
});

