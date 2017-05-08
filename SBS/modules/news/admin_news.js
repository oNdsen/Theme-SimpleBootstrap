$(document).ready(function() {

	//$('link[href="modules/news/admin_news.css"]').remove();
	//$('.main script[src^="modules/news/js/jquery"]').remove();

	$('.main [href$="?m=news&p=admin_news&page=permissions"]').addClass('btn').addClass('btn-sm').addClass('btn-primary').removeClass('adm_btn');
	$('.main [href$="?m=news&p=admin_news&page=settings"]').addClass('btn').addClass('btn-sm').addClass('btn-primary').removeClass('adm_btn');
	$('.main [href$="?m=news&p=admin_news&page=add"]').addClass('btn').addClass('btn-sm').addClass('btn-primary').removeClass('adm_btn');

	$('.news-btn').removeClass('pull-right').removeClass('news-btn').removeClass('news-btn-default').addClass('btn').addClass('btn-sm').addClass('btn-primary');

	$('.main [href*="?m=news&p=admin_news&page="] img').remove();

	$('.success').addClass('label').addClass('label-success');

});
