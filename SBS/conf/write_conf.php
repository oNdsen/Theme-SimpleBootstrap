<?php
if(!empty($_GET['style']))
{
	$f = "theme.config";
	if(file_exists($f)){ unlink($f); }
	$json = json_encode(array('style' => $_GET['style']));
	file_put_contents($f, $json);

	$stylesheet = "../css/main.css";
	$style_file = "../css/main_".$_GET['style'].".css";

	$string = file_get_contents($stylesheet);
	$replace = file_get_contents($style_file);
	$replace = "/* *** THEME STYLER *** */\n".$replace."\n/* *** THEME STYLER END *** */";
	$search = "/\/\* \*\*\* THEME STYLER \*\*\* \*\/(.*)\/\* \*\*\* THEME STYLER END \*\*\* \*\//s";

	file_put_contents($stylesheet, preg_replace($search,$replace,$string));

}
